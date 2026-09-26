import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const outputPath = resolve("public/data/active-threats.json");
const threatFoxUrl = "https://threatfox.abuse.ch/export/json/recent/";
const urlHausUrl = "https://urlhaus.abuse.ch/downloads/csv_recent/";

function parseCsvLine(line) {
  const values = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (character === '"') {
      if (quoted && line[index + 1] === '"') {
        value += '"';
        index += 1;
      } else quoted = !quoted;
    } else if (character === "," && !quoted) {
      values.push(value);
      value = "";
    } else value += character;
  }
  values.push(value);
  return values;
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { "User-Agent": "BrainFort-Security-Threat-Dashboard/1.0" } });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.text();
}

const [threatFoxText, urlHausText] = await Promise.all([
  fetchText(threatFoxUrl),
  fetchText(urlHausUrl),
]);

const threatFoxRaw = JSON.parse(threatFoxText);
const threatFoxItems = Object.values(threatFoxRaw).flat();
const malwareCounts = new Map();
for (const item of threatFoxItems) {
  const name = item.malware_printable || item.malware || "Unknown";
  malwareCounts.set(name, (malwareCounts.get(name) || 0) + 1);
}

const topMalware = [...malwareCounts.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5)
  .map(([name, count]) => ({ name, count }));

const urlHausRows = urlHausText
  .split(/\r?\n/)
  .filter((line) => line && !line.startsWith("#"))
  .map(parseCsvLine);
const dayAgo = Date.now() - 24 * 60 * 60 * 1000;
const onlineUrls = urlHausRows.filter((row) => row[3] === "online");
const urlsLast24Hours = urlHausRows.filter((row) => {
  const timestamp = Date.parse(`${row[1]?.replace(" ", "T")}Z`);
  return Number.isFinite(timestamp) && timestamp >= dayAgo;
}).length;
const commandAndControl = threatFoxItems.filter((item) => item.threat_type === "botnet_cc").length;

const result = {
  updatedAt: new Date().toISOString(),
  metrics: {
    activeMaliciousUrls: onlineUrls.length,
    urlsLast24Hours,
    recentIocs: threatFoxItems.length,
    commandAndControl,
  },
  topMalware,
  sources: [
    { name: "URLhaus", href: "https://urlhaus.abuse.ch/" },
    { name: "ThreatFox", href: "https://threatfox.abuse.ch/" },
  ],
};

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`);

try {
  const current = JSON.parse(await readFile(outputPath, "utf8"));
  console.log(`Threat data synchronized at ${current.updatedAt}`);
} catch {
  console.log("Threat data synchronized");
}
