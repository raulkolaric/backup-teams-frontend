import { Terminal } from "lucide-react";
import { useTranslations } from "next-intl";
import { WordFadeIn } from "./word-fade-in";
import { BlurFade } from "./blur-fade";

export default function HowItWorksTerminal() {
  const t = useTranslations("Terminal");
  
  // Static content to be rendered server-side
  const terminalSteps = [
    { text: t('step1'), delay: "0s" },
    { text: t('step2'), delay: "0.8s", color: "text-green-400" },
    { text: t('step3'), delay: "1.6s" },
    { text: t('step4'), delay: "2.4s", color: "text-green-400" },
    { text: t('step5'), delay: "3.2s" },
    { text: t('step6'), delay: "4.0s", color: "text-muted-foreground" },
    { text: t('step7'), delay: "4.8s", color: "text-green-400" },
    { text: t('step8'), delay: "5.6s" },
    { text: t('step9'), delay: "6.4s", color: "text-accent font-bold" },
    { text: "> _", delay: "7.2s", color: "animate-pulse" }
  ];

  return (
    <section className="w-full py-24 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Safe inline styles to prevent Tailwind v4 config crashes */}
      <style>{`
        @keyframes terminalLineAppear {
          0% { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .terminal-line {
          opacity: 0;
          animation: terminalLineAppear 0.3s ease-out forwards;
        }
      `}</style>

      {/* Background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-4xl w-full px-6 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <WordFadeIn 
            words={t('title')} 
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance" 
          />
          <BlurFade delay={0.25} inView>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </BlurFade>
        </div>

        {/* Terminal Window */}
        <article className="w-full rounded-xl border border-border bg-card/60 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col">
          {/* Mac-style Header */}
          <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-black/20">
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Terminal className="w-3 h-3" />
              <span>backup-daemon — bash — 80x24</span>
            </div>
            <div className="w-12" /> {/* Spacer for centering */}
          </header>
          
          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base text-foreground bg-[#111] overflow-x-auto">
            <div className="flex flex-col gap-2 min-h-[300px]">
              {terminalSteps.map((step, i) => (
                <div 
                  key={i} 
                  className={`terminal-line ${step.color || ""}`}
                  style={{ animationDelay: step.delay }}
                >
                  {step.text}
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
