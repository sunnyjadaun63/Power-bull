import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export type CourseCardData = {
  title: string;
  tagline: string;
  img: string;
  duration: string;
  level: string;
  price: string;
  highlights: string[];
};

export function CourseCard({ c, index = 0 }: { c: CourseCardData; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative flex flex-col overflow-hidden bg-surface/60 border border-stroke rounded-3xl hover:border-text-primary/30 transition-colors"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={c.img}
          alt={c.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 halftone opacity-20 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] bg-bg/70 backdrop-blur border border-stroke px-2 py-1 rounded-full text-text-primary">
            {c.level}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] bg-bg/70 backdrop-blur border border-stroke px-2 py-1 rounded-full text-text-primary">
            {c.duration}
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-2xl text-text-primary">
          <span className="font-display italic">{c.title}</span>
        </h3>
        <p className="text-sm text-muted mt-2">{c.tagline}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-text-primary/80">
          {c.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className="mt-2 w-1 h-1 rounded-full accent-gradient" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-stroke flex items-center justify-between">
          <div>
            <div className="text-xs text-muted uppercase tracking-[0.2em]">Fee</div>
            <div className="font-display italic text-2xl text-text-primary">{c.price}</div>
          </div>
          <Link
            to="/contact"
            className="group/btn relative inline-flex rounded-full p-[2px]"
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity accent-gradient-animated" />
            <span className="relative inline-flex items-center gap-1 rounded-full bg-text-primary text-bg text-sm px-5 py-2.5">
              Enroll <span className="text-[10px]">↗</span>
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
