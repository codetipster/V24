"use client";
import * as React from "react";

function getRemaining(target: number) {
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s, diff };
}

export function Countdown({ launchAt }: { launchAt?: string }) {
  const launch = launchAt || "";
  const target = Date.parse(launch);
  const [t, setT] = React.useState(() => getRemaining(target));
  React.useEffect(() => {
    if (!launch || Number.isNaN(target)) return;
    const id = setInterval(() => setT(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [launch, target]);

  if (!launch || Number.isNaN(target) || t.diff <= 0) return null;
  return (
    <div aria-live="polite" className="mt-4 sm:mt-8 flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
      <TimeBlock label="Days" value={t.d} />
      <span className="text-white/60 text-lg sm:text-2xl font-light">:</span>
      <TimeBlock label="Hours" value={t.h} />
      <span className="text-white/60 text-lg sm:text-2xl font-light">:</span>
      <TimeBlock label="Minutes" value={t.m} />
      <span className="text-white/60 text-lg sm:text-2xl font-light">:</span>
      <TimeBlock label="Seconds" value={t.s} />
    </div>
  );
}

function TimeBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-12 sm:min-w-16 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-2 sm:px-4 py-2 sm:py-3 text-center shadow-lg">
      <div className="text-lg sm:text-2xl font-bold tabular-nums text-white">{String(value).padStart(2, "0")}</div>
      <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-white/70 font-medium">{label}</div>
    </div>
  );
}
