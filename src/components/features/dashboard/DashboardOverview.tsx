"use client";

import { Button } from "@/components/ui/button";
import { LogOut, Home, User } from "lucide-react";

export function DashboardOverview() {
  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar - Classic Espresso Dark Terminal Navigation */}
      <aside className="w-64 border-r border-border bg-card/40 backdrop-blur-md hidden md:flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="font-mono text-sm text-muted-foreground ml-2">~/teams</span>
          </div>
          
          <nav className="space-y-4">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-accent bg-accent/10 rounded-md font-medium transition-colors">
              <Home className="w-4 h-4" />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-card rounded-md font-medium transition-colors">
              <User className="w-4 h-4" />
              Profile
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Glow Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] blur-[120px] opacity-10 bg-accent rounded-full pointer-events-none" />
        
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between px-8">
          <h1 className="text-xl font-bold tracking-tight text-foreground">Welcome to Backup Teams</h1>
          <Button variant="outline" className="border-border text-foreground hover:bg-card">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </header>

        <div className="p-8 space-y-8">
          <section className="bg-card border border-border rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-accent">Your Dashboard is Active</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              You have successfully authenticated via Google and bypasssed the pending admin check. 
              This is the secure area of your application, designed to adhere strictly to the "Espresso Dark" aesthetic principles.
            </p>
          </section>

          {/* Quick Metrics (Empty State) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 relative overflow-hidden group hover:border-accent/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <User className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Backups</h3>
              <p className="text-4xl font-light text-foreground">0</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 relative overflow-hidden group hover:border-accent/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Home className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Storage Used</h3>
              <p className="text-4xl font-light text-foreground">0 GB</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
