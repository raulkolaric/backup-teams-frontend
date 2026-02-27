"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      // replace ensures we push the new locale into history nicely
      router.replace(pathname, { locale: newLocale });
      router.refresh(); // Important fix in newest next-intl version to fully flush context
    });
  };

  return (
    <div className="flex items-center gap-2 bg-card border border-border rounded-full p-1 backdrop-blur-md shadow-lg opacity-90 hover:opacity-100 transition-opacity">
      <button
        onClick={() => handleLocaleChange("en")}
        disabled={isPending}
        className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
          locale === "en"
            ? "bg-accent text-accent-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLocaleChange("pt-BR")}
        disabled={isPending}
        className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
          locale === "pt-BR"
            ? "bg-accent text-accent-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
      >
        PT
      </button>
    </div>
  );
}
