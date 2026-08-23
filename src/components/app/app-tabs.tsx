"use client";

import { useState, type ReactNode } from "react";
import { CalendarClock, Calculator, LayoutGrid } from "lucide-react";

import { cn } from "@/lib/utils";

interface AppTabsProps {
  simulatorLabel: string;
  catalogLabel: string;
  bookingLabel: string;
  simulator: ReactNode;
  catalog: ReactNode;
  booking: ReactNode;
}

export function AppTabs({
  simulatorLabel,
  catalogLabel,
  bookingLabel,
  simulator,
  catalog,
  booking,
}: AppTabsProps) {
  const [tab, setTab] = useState<"sim" | "cat" | "rdv">("sim");

  const tabs = [
    { id: "sim" as const, label: simulatorLabel, Icon: Calculator },
    { id: "cat" as const, label: catalogLabel, Icon: LayoutGrid },
    { id: "rdv" as const, label: bookingLabel, Icon: CalendarClock },
  ];

  return (
    <>
      <div
        role="tablist"
        className="glass sticky top-0 z-40 flex gap-1 border-b border-border p-2"
      >
        {tabs.map(({ id, label, Icon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-xl px-2 py-2.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm",
              tab === id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="size-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{label}</span>
          </button>
        ))}
      </div>
      {/* Panels stay mounted so simulator inputs survive tab switches. */}
      <div className={cn(tab !== "sim" && "hidden")}>{simulator}</div>
      <div className={cn(tab !== "cat" && "hidden")}>{catalog}</div>
      <div className={cn(tab !== "rdv" && "hidden")}>{booking}</div>
    </>
  );
}
