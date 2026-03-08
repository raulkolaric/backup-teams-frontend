import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 flex h-16 items-center justify-between">
        
        {/* Brand & Logo */}
        <div className="flex flex-1 items-center gap-6">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Image 
              src="/WOW2backup-teams.svg" 
              alt="Backup Teams Logo" 
              width={32} 
              height={32} 
              className="object-contain"
              priority
            />
            <span className="font-bold tracking-tight text-foreground hidden sm:block">
              Backup Teams
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">
              {t('features')}
            </Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">
              {t('pricing')}
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              {t('enterprise')}
            </Link>
          </nav>
        </div>

        {/* Right CTA Area & Utilities */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          
          <div className="flex items-center gap-2">
            <Link 
              href="/login" 
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
            >
              {t('login')}
            </Link>
            <Link 
              href="/signup" 
              className="inline-flex h-9 items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-colors"
            >
              {t('getStarted')}
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}
