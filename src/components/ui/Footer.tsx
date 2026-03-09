import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background pt-10 pb-6">
      <div className="mx-auto max-w-6xl px-6">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand & Mission Statement */}
          <div className="space-y-8 xl:col-span-1">
            <span className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
               Backup Teams
               <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </span>
            <p className="text-sm leading-6 text-muted-foreground w-4/5">
              {t("description")}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-10 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">{t("solutions")}</h3>
                <nav aria-label="Solutions navigation" className="mt-6 flex flex-col space-y-4">
                  <Link href="#features" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("features")}
                  </Link>
                  <Link href="#pricing" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("pricing")}
                  </Link>
                  <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("enterprise")}
                  </Link>
                  <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("apiAccess")}
                  </Link>
                </nav>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">{t("support")}</h3>
                <nav aria-label="Support navigation" className="mt-6 flex flex-col space-y-4">
                  <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("documentation")}
                  </Link>
                  <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("guides")}
                  </Link>
                  <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("apiStatus")}
                  </Link>
                </nav>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">{t("company")}</h3>
                <nav aria-label="Company navigation" className="mt-6 flex flex-col space-y-4">
                  <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("about")}
                  </Link>
                  <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("blog")}
                  </Link>
                  <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("partners")}
                  </Link>
                </nav>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">{t("legal")}</h3>
                <nav aria-label="Legal navigation" className="mt-6 flex flex-col space-y-4">
                  <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("privacyPolicy")}
                  </Link>
                  <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("termsOfService")}
                  </Link>
                  <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                    {t("dataProcessing")}
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-10 pt-4 sm:mt-12 lg:mt-16">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {currentYear} Backup Teams, Inc. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
