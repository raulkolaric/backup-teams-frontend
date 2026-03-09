import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SignupTerminalAnim } from "@/components/features/auth/SignupTerminalAnim";
import { SignUpForm } from "@/components/features/auth/SignUpForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign Up | Backup Teams",
  description: "Create your Backup Teams account.",
};

export default async function SignupPage() {
  const t = await getTranslations("Signup");

  return (
    <main className="min-h-screen w-full relative bg-background flex flex-col lg:flex-row overflow-hidden font-sans">
      
      {/* Left Pane: The Technical Terminal Animation */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative hidden md:block">
        <SignupTerminalAnim />
      </div>

      {/* Right Pane: The Form */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex flex-col justify-center px-6 py-12 lg:px-16 relative border-t lg:border-t-0 lg:border-l border-border/50 bg-background/95 backdrop-blur-sm z-20">
        
        {/* Subtle radial glow on the form side */}
        <div
          className="pointer-events-none absolute right-10 top-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full mix-blend-screen"
          aria-hidden="true"
        />

        <div className="w-full max-w-sm mx-auto relative z-10 flex flex-col h-full justify-center">
          
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12 w-fit px-3 py-1.5 rounded-full hover:bg-muted/50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToHome')}
          </Link>

          <div className="flex flex-col space-y-2 mb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              {t('heading')}
            </h1>
            <p className="text-muted-foreground">
              {t('subheading')}
            </p>
          </div>
          
          <SignUpForm />
          
          <p className="px-8 text-center text-xs text-muted-foreground mt-8">
            {t('termsText')}{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary transition-colors">
              {t('termsLink')}
            </Link>{" "}
            {t('andText')}{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary transition-colors">
              {t('privacyLink')}
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
