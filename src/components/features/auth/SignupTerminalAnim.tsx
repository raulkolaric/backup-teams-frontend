"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";

interface LogLine {
  id: string;
  type: "info" | "success" | "warning" | "error" | "system";
  text: string;
  delayMs: number;
}

// A generic technical-looking animation script to loop through
// Authentic logs extracted from the backup-teams backend (teams_scraper.py, main.py)
const SCRIPT: Omit<LogLine, "id">[] = [
  { type: "system", text: "Initializing Backup Teams daemon v2.4.1", delayMs: 400 },
  { type: "info", text: "Fetching joined MS Teams from Graph API...", delayMs: 600 },
  { type: "success", text: "Found 14 teams — processing concurrently.", delayMs: 150 },
  { type: "info", text: "Team: Engineering & Architecture", delayMs: 200 },
  { type: "info", text: "Resolving Graph channels...", delayMs: 400 },
  { type: "success", text: "Channel list resolved (42 total channels)", delayMs: 100 },
  { type: "system", text: "Allocating dedicated S3 storage vault...", delayMs: 500 },
  { type: "success", text: "S3 Vault config ready [encrypted: true]", delayMs: 100 },
  { type: "warning", text: "Graph API rate limit pool at 80% capacity", delayMs: 800 },
  { type: "info", text: "Discovering site drives for Engineering & Architecture...", delayMs: 400 },
  { type: "warning", text: "[DRIVES] Root folder empty on first call — warming up, retrying", delayMs: 1200 },
  { type: "success", text: "Drive enumeration complete (1,240 items)", delayMs: 100 },
  { type: "system", text: "Starting concurrent download stream (concurrency=50)", delayMs: 200 },
  { type: "info", text: "[SKIP] Q3_Roadmap.xlsx (etag matches — already in S3)", delayMs: 70 },
  { type: "info", text: "[SKIP] Architecture_v2.pdf (etag matches — already in S3)", delayMs: 50 },
  { type: "success", text: "[NEW] API_Spec_Draft.docx → s3://bt-vault/...", delayMs: 250 },
  { type: "success", text: "[NEW] design_assets.zip → s3://bt-vault/...", delayMs: 500 },
  { type: "info", text: "Indexing payload into ElasticSearch cluster...", delayMs: 400 },
  { type: "success", text: "Indexing complete. Search ready.", delayMs: 100 },
  { type: "system", text: "All teams processed. Listening for webhook events.", delayMs: 2000 },
];

const TYPE_COLORS = {
  info: "text-blue-400",
  success: "text-emerald-400",
  warning: "text-amber-400",
  error: "text-red-400",
  system: "text-slate-400",
};

const PREFIXES = {
  info: "[INFO]",
  success: "[OK]",
  warning: "[WARN]",
  error: "[ERR]",
  system: "[SYS]",
};

export function SignupTerminalAnim() {
  const t = useTranslations("Signup");
  const [lines, setLines] = useState<LogLine[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptIndexRef = useRef(0);
  const isRunningRef = useRef(true);

  // Auto-scroll to bottom whenever lines change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  // Main animation loop
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isActive = true;

    const processNextLine = () => {
      if (!isActive) return;

      const template = SCRIPT[scriptIndexRef.current];
      
      const jitter = template.delayMs * 0.2; 
      const actualDelay = Math.max(20, template.delayMs + (Math.random() * jitter * 2 - jitter));

      timeoutId = setTimeout(() => {
        if (!isActive) return;

        // Add current line
        setLines(prev => {
          const newLine: LogLine = {
            id: Math.random().toString(36).substring(7),
            ...template
          };
          return [...prev, newLine].slice(-50);
        });

        // Advance pointer
        scriptIndexRef.current++;
        if (scriptIndexRef.current >= SCRIPT.length) {
          scriptIndexRef.current = 0;
          setLines([{ id: "reset", type: "system", text: "--- RESTARTING DAEMON ---", delayMs: 1000 }]);
        }

        // Schedule next
        processNextLine();
      }, actualDelay);
    };

    // To prevent strict mode double-firing from creating two parallel streams,
    // we clear any existing lines on mount, reset the head, and start fresh.
    setLines([]);
    scriptIndexRef.current = 0;
    processNextLine();

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[50vh] lg:min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8 overflow-hidden">
      
      {/* Absolute positional gradients for depth behind the terminal */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Terminal Window */}
      <div className="relative w-full max-w-2xl backdrop-blur-md bg-slate-900/60 rounded-xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col z-10 transition-all duration-500 h-[60vh] lg:h-[80vh]">
        
        {/* Fake Window Header */}
        <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900/80">
          <div className="flex gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex-1 text-center font-mono text-xs text-slate-500 font-medium">
            deploy@backup-teams: ~/auth/provision
          </div>
        </div>

        {/* Terminal Output Area */}
        <div 
          ref={containerRef}
          className="flex-1 p-6 overflow-hidden font-mono text-sm leading-relaxed scroll-smooth"
        >
          {lines.map((line) => (
            <div 
              key={line.id} 
              className="flex gap-3 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-300 fill-mode-forwards"
            >
              <span className={`w-12 shrink-0 font-semibold ${TYPE_COLORS[line.type]}`}>
                {PREFIXES[line.type]}
              </span>
              <span className="text-slate-300 break-words flex-1">
                {line.text}
              </span>
            </div>
          ))}
          {/* Blinking Cursor */}
          <div className="flex gap-3 mt-1">
            <span className="w-12 shrink-0"></span>
            <span className="w-2 h-4 bg-slate-400 animate-pulse inline-block align-middle" />
          </div>
        </div>
      </div>

      {/* Terminal Footer Info */}
      <div className="mt-8 flex flex-col items-center justify-center max-w-md text-center opacity-80 z-10">
        <h3 className="text-xl font-medium text-white mb-2">{t('terminalTitle')}</h3>
        <p className="text-sm text-slate-400">
          {t('terminalSubtitle')}
        </p>
      </div>
    </div>
  );
}
