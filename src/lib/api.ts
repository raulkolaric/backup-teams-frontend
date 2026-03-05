/**
 * src/lib/api.ts — Centralised fetch helpers for the Backup Teams API.
 *
 * All requests are made to NEXT_PUBLIC_API_URL (set in .env.local).
 * Authenticated endpoints require a Bearer token retrieved from
 * localStorage/sessionStorage by the caller.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://api.backup-teams.com";

// ── Types ──────────────────────────────────────────────────────────────────────

export interface VaultStats {
  /** Total archived files in the database */
  total_files: number;
  /** Total distinct channels */
  total_classes: number;
  /** Total distinct teams / subject areas */
  total_cursos: number;
  /** PDFs with extracted, searchable text */
  indexed_pdfs: number;
  /** Breakdown by file extension, e.g. { pdf: 120, docx: 40 } */
  files_by_extension: Record<string, number>;
  /** Raw byte size of the S3 bucket */
  storage_bytes: number;
  /** Human-readable storage size string, e.g. "4.2 GB" */
  storage_human: string;
  /** Total objects in S3 */
  s3_object_count: number;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

async function apiFetch<T>(
  path: string,
  token?: string,
  options?: RequestInit,
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options?.headers,
  };

  const res = await fetch(`${BASE_URL}${path}`, { ...options, headers });

  if (!res.ok) {
    const detail = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(detail?.detail ?? `API error ${res.status}`);
  }

  return res.json() as Promise<T>;
}

// ── Public API functions ───────────────────────────────────────────────────────

/**
 * Fetch aggregate vault statistics.
 * No authentication required for the public landing page stats section.
 * When you lock down the endpoint later, pass the token here.
 */
export async function fetchVaultStats(token?: string): Promise<VaultStats> {
  return apiFetch<VaultStats>("/stats/", token);
}
