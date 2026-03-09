import { Metadata } from "next";
import { LoginForm } from "@/components/features/auth/LoginForm";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login | Backup Teams",
  description: "Login to your account.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden bg-background font-sans flex items-center justify-center p-4">
      {/* Espresso Dark: Ambient Radial Glows (similar to Hero.tsx) */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent opacity-10 blur-[120px] rounded-full mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 w-[400px] h-[400px] bg-accent opacity-[0.05] blur-[100px] rounded-full mix-blend-screen"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Logo routing back to Home */}
        <Link href="/" className="mb-8 transition-opacity hover:opacity-80">
          <Image 
            src="/WOW2backup-teams.svg" 
            alt="Backup Teams Logo" 
            width={48} 
            height={48} 
            className="object-contain"
            priority
          />
        </Link>

        {/* Mock-terminal header & Glassmorphism Card */}
        <div className="backdrop-blur-md bg-card/60 rounded-2xl border border-border/60 shadow-2xl overflow-hidden p-[1px] w-full">
          {/* Mock Terminal Header */}
          <div className="flex gap-2 p-4 items-center border-b border-border/40 bg-card/40">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-muted-foreground font-medium">~/auth/login</span>
          </div>
          
          <div className="p-8">
            <div className="flex flex-col space-y-2 text-center mb-8">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground font-sans">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials or use Google Auth
              </p>
            </div>
            
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
