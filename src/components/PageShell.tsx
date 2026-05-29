import type { ReactNode } from "react";
import { motion } from "motion/react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function PageShell({
  eyebrow,
  title,
  italicWord,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  italicWord: string;
  intro?: string;
  children: ReactNode;
}) {
  const parts = title.split(italicWord);
  return (
    <div className="bg-bg text-text-primary font-body min-h-screen">
      <SiteNav />
      <header className="relative pt-36 md:pt-44 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40 [background:radial-gradient(circle_at_30%_20%,#4E85BF22,transparent_60%),radial-gradient(circle_at_70%_60%,#89AACC22,transparent_55%)]" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">{eyebrow}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1] text-text-primary">
              {parts[0]}
              <span className="font-display italic">{italicWord}</span>
              {parts[1]}
            </h1>
            {intro && <p className="mt-6 max-w-2xl text-base md:text-lg text-muted">{intro}</p>}
          </motion.div>
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
