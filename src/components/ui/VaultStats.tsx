"use client";

/**
 * VaultStats.tsx — Landing page live statistics section.
 *
 * Fetches data from GET /stats/ and displays animated metric cards.
 * The component is intentionally structured to be API-ready:
 *   - `useEffect` fetches on mount (token-less for now, add token later)
 *   - Loading state shows skeleton shimmer cards
 *   - Error state shows a graceful fallback row
 *
 * File-type breakdown renders as a horizontal bar chart built from
 * pure CSS so no charting library is needed.
 */

import { useEffect, useState } from "react";
import { fetchVaultStats, type VaultStats } from "@/lib/api";

// ── Icon map for known file types ─────────────────────────────────────────────

const EXT_META: Record<string, { label: string; color: string; icon: string }> = {
  pdf:  { label: "PDF",        color: "#f87171", icon: "📄" },
  docx: { label: "Word",       color: "#60a5fa", icon: "📝" },
  doc:  { label: "Word (Old)", color: "#3b82f6", icon: "📝" },
  pptx: { label: "PowerPoint", color: "#fb923c", icon: "📊" },
  ppt:  { label: "PPT (Old)",  color: "#f97316", icon: "📊" },
  xlsx: { label: "Excel",      color: "#4ade80", icon: "📈" },
  xls:  { label: "XLS (Old)",  color: "#22c55e", icon: "📈" },
  zip:  { label: "Archive",    color: "#a78bfa", icon: "🗜️" },
  mp4:  { label: "Video",      color: "#e879f9", icon: "🎬" },
  jpg:  { label: "JPEG",       color: "#fbbf24", icon: "🖼️" },
  jpeg: { label: "JPEG",       color: "#fbbf24", icon: "🖼️" },
  png:  { label: "PNG",        color: "#34d399", icon: "🖼️" },
  txt:  { label: "Text",       color: "#94a3b8", icon: "📃" },
};

function extMeta(ext: string) {
  return (
    EXT_META[ext.toLowerCase()] ?? {
      label: ext.toUpperCase(),
      color: "#a6988f",
      icon:  "📎",
    }
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
  icon,
}: {
  label: string;
  value: string | number;
  sub?: string;
  icon: string;
}) {
  return (
    <div
      className="group relative flex flex-col gap-2 rounded-xl border border-border bg-card p-6
                 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_24px_rgba(212,106,67,0.1)]
                 overflow-hidden"
    >
      {/* Subtle glow orb */}
      <div
        className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full
                   bg-accent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10"
      />

      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <span className="text-2xl">{icon}</span>
      </div>

      <p className="text-4xl font-bold tracking-tight text-foreground">{value}</p>

      {sub && (
        <p className="text-xs text-muted-foreground">{sub}</p>
      )}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 animate-pulse space-y-3">
      <div className="h-3 w-24 rounded bg-muted" />
      <div className="h-9 w-20 rounded bg-muted" />
      <div className="h-2 w-32 rounded bg-muted" />
    </div>
  );
}

function ExtBar({
  ext,
  count,
  max,
}: {
  ext: string;
  count: number;
  max: number;
}) {
  const meta  = extMeta(ext);
  const pct   = max > 0 ? Math.max(4, Math.round((count / max) * 100)) : 4;

  return (
    <li className="flex items-center gap-3 group">
      <span className="text-base w-5 shrink-0">{meta.icon}</span>

      <span className="w-20 shrink-0 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors truncate">
        {meta.label}
      </span>

      {/* Bar */}
      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: meta.color }}
        />
      </div>

      <span className="w-12 text-right text-xs font-mono text-muted-foreground">
        {count.toLocaleString()}
      </span>
    </li>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function VaultStats() {
  const [stats,   setStats]   = useState<VaultStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchVaultStats()          // no token needed for public endpoint
      .then((data) => { if (!cancelled) { setStats(data); } })
      .catch((err) => {
        if (!cancelled) { setError(err.message ?? "Could not load stats."); }
      })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, []);

  // Sort extensions by count descending, take top 8
  const topExt = stats
    ? Object.entries(stats.files_by_extension)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
    : [];

  const maxCount = topExt[0]?.[1] ?? 1;

  return (
    <section id="vault-stats" className="relative w-full overflow-hidden py-24 border-t border-border">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-border bg-card text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Live Vault Stats
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What&apos;s in the vault?
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Real-time snapshot of every file archived from Microsoft Teams —
            updated continuously as new content is synced.
          </p>
        </div>

        {/* Error state */}
        {error && !loading && (
          <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-6 text-sm text-destructive">
            ⚠️ Could not reach the API: {error}
          </div>
        )}

        {/* Top-level metric cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
          ) : stats ? (
            <>
              <StatCard
                label="Total Files"
                value={stats.total_files.toLocaleString()}
                icon="🗄️"
                sub="All archived file objects"
              />
              <StatCard
                label="Storage Used"
                value={stats.storage_human}
                icon="💾"
                sub={`${stats.s3_object_count.toLocaleString()} S3 objects`}
              />
              <StatCard
                label="Channels"
                value={stats.total_classes.toLocaleString()}
                icon="📡"
                sub="Distinct Teams channels"
              />
              <StatCard
                label="Searchable PDFs"
                value={stats.indexed_pdfs.toLocaleString()}
                icon="🔍"
                sub={`of ${stats.total_files.toLocaleString()} total files`}
              />
            </>
          ) : null}
        </div>

        {/* File type breakdown */}
        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            File Types Breakdown
          </h3>

          {loading ? (
            <div className="space-y-4 animate-pulse">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-3 w-5 rounded bg-muted" />
                  <div className="h-3 w-16 rounded bg-muted" />
                  <div className="flex-1 h-2 rounded bg-muted" />
                  <div className="h-3 w-10 rounded bg-muted" />
                </div>
              ))}
            </div>
          ) : topExt.length > 0 ? (
            <ul className="space-y-4">
              {topExt.map(([ext, count]) => (
                <ExtBar key={ext} ext={ext} count={count} max={maxCount} />
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No file data yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
