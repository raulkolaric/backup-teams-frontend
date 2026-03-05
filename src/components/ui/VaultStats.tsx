import { fetchVaultStats, type VaultStats } from "@/lib/api";
import MagicBento from "../MagicBento";

// ── Icon map for known file types ─────────────────────────────────────────────

const EXT_META: Record<string, { label: string }> = {
  pdf:  { label: "PDF" },
  docx: { label: "Word" },
  doc:  { label: "Word (Old)" },
  pptx: { label: "PowerPoint" },
  ppt:  { label: "PPT (Old)" },
  xlsx: { label: "Excel" },
  xls:  { label: "XLS (Old)" },
  zip:  { label: "Archive" },
  mp4:  { label: "Video" },
  jpg:  { label: "JPEG" },
  jpeg: { label: "JPEG" },
  png:  { label: "PNG" },
  txt:  { label: "Text" },
};

function extMeta(ext: string) {
  return (
    EXT_META[ext.toLowerCase()] ?? {
      label: ext.toUpperCase(),
    }
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────



export function SkeletonCard() {
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
      <span className="w-20 shrink-0 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors truncate">
        {meta.label}
      </span>

      {/* Bar */}
      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 bg-white"
          style={{ width: `${pct}%` }}
        />
      </div>

      <span className="w-12 text-right text-xs font-mono text-muted-foreground">
        {count.toLocaleString()}
      </span>
    </li>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default async function VaultStats() {
  let stats: VaultStats | null = null;
  let error: string | null = null;

  try {
    stats = await fetchVaultStats(); // no token needed for public endpoint
  } catch (err: any) {
    error = err.message ?? "Could not load stats.";
  }

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
        {error && (
          <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-6 text-sm text-destructive">
            ⚠️ Could not reach the API: {error}
          </div>
        )}

        {/* Top-level metric cards */}
        <div className="w-full mb-10">
          {stats ? (
            <MagicBento
              cards={[
                {
                  title: stats.total_files.toLocaleString(),
                  description: "All archived file objects",
                  label: "Total Files",
                  color: "var(--card)"
                },
                {
                  title: stats.storage_human,
                  description: `${stats.s3_object_count.toLocaleString()} S3 objects`,
                  label: "Storage Used",
                  color: "var(--card)"
                },
                {
                  title: stats.total_classes.toLocaleString(),
                  description: "Distinct Teams channels",
                  label: "Channels",
                  color: "var(--card)"
                },
                {
                  title: stats.indexed_pdfs.toLocaleString(),
                  description: `of ${stats.total_files.toLocaleString()} total files`,
                  label: "Searchable PDFs",
                  color: "var(--card)"
                }
              ]}
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect={true}
              spotlightRadius={400}
              particleCount={12}
              glowColor="132, 0, 255"
              disableAnimations={false}
            />
          ) : !error ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : null}
        </div>

        {/* File type breakdown */}
        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            File Types Breakdown
          </h3>

          {topExt.length > 0 ? (
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

export function VaultStatsSkeleton() {
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>

        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            File Types Breakdown
          </h3>
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
        </div>
      </div>
    </section>
  );
}
