import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const outputPath = resolve("public/data/active-threats.json");
const cisaKevUrl = "https://raw.githubusercontent.com/cisagov/kev-data/develop/known_exploited_vulnerabilities.json";

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { "User-Agent": "BrainFort-Security-KEV-Dashboard/1.0" },
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.json();
}

const feed = await fetchJson(cisaKevUrl);
if (!Array.isArray(feed.vulnerabilities) || typeof feed.dateReleased !== "string") {
  throw new Error("CISA KEV returned an unexpected payload");
}

const vulnerabilities = feed.vulnerabilities;
const cutoff = new Date();
cutoff.setUTCDate(cutoff.getUTCDate() - 30);

const vendors = new Map();
for (const item of vulnerabilities) {
  const vendor = item.vendorProject?.trim();
  if (vendor) vendors.set(vendor, (vendors.get(vendor) || 0) + 1);
}

const topVendors = [...vendors.entries()]
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .slice(0, 5)
  .map(([name, count]) => ({ name, count }));

const result = {
  updatedAt: feed.dateReleased,
  catalogVersion: feed.catalogVersion,
  metrics: {
    knownExploitedVulnerabilities: Number.isFinite(feed.count) ? feed.count : vulnerabilities.length,
    addedLast30Days: vulnerabilities.filter((item) => {
      const dateAdded = Date.parse(`${item.dateAdded}T00:00:00Z`);
      return Number.isFinite(dateAdded) && dateAdded >= cutoff.getTime();
    }).length,
    ransomwareLinked: vulnerabilities.filter((item) => item.knownRansomwareCampaignUse === "Known").length,
    vendorsRepresented: vendors.size,
  },
  topVendors,
  sources: [
    { name: "CISA KEV Catalog", href: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog" },
    { name: "CISA official GitHub mirror", href: "https://github.com/cisagov/kev-data" },
  ],
};

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`);

try {
  const current = JSON.parse(await readFile(outputPath, "utf8"));
  console.log(`CISA KEV data synchronized at ${current.updatedAt}`);
} catch {
  console.log("CISA KEV data synchronized");
}
