import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent opacity-10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl gap-8">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-md text-sm text-muted-foreground mb-2 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </span>
          Secure Microsoft Teams Backup Engine
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          Backup your <span className="text-accent">Teams</span> data.<br />
          Never lose context.
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          An enterprise-grade, encrypted backup solution designed to capture your Microsoft Teams chats, files, and channels. Maintain full ownership of your organization's entire memory.
        </p>
        
        {/* Call to Actions (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center">
          <button className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-base transition-all hover:opacity-90 shadow-[0_0_20px_rgba(212,106,67,0.25)] min-w-[200px]">
            Start Backup
          </button>
          <button className="bg-card text-foreground border border-border px-8 py-4 rounded-md font-medium text-base transition-colors hover:bg-muted cursor-pointer min-w-[200px]">
            View Documentation
          </button>
        </div>
      </div>
      
      {/* Decorative Mock Terminal Window */}
      <div className="w-full max-w-3xl mt-24 rounded-xl border border-border bg-card shadow-2xl overflow-hidden backdrop-blur-sm opacity-95">
        
        {/* Terminal Header */}
        <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <div className="ml-4 text-xs font-mono text-muted-foreground flex-1 text-center pr-12">
            ~/backup-cli — bash
          </div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm sm:text-base leading-relaxed text-muted-foreground overflow-x-auto text-left">
          <div className="flex items-center gap-2">
            <span className="text-accent font-bold">$</span>
            <span className="text-foreground">teams-backup start --channel "General" --full</span>
          </div>
          <div className="mt-3 text-[#27c93f] flex items-center gap-2">
            <span>[OK]</span> 
            <span className="text-muted-foreground">Authenticated with Microsoft Graph API using token</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-accent">[INFO]</span> 
            <span>Fetching message history...</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-accent">[INFO]</span>
            <span>Downloading attached files (12/45)...</span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <span className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            <span className="text-foreground opacity-80">Encrypting local volume payload...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
