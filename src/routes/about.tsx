import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell } from "@/components/PageShell";
import logo from "@/assets/powerbulls-logo.jpeg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — PowerBulls Academy" },
      {
        name: "description",
        content:
          "PowerBulls Academy in Bulandshahr, UP — personal coaching for computers, development, AI and trading.",
      },
      { property: "og:title", content: "About — PowerBulls Academy" },
      { property: "og:description", content: "Our story, mission and why students choose PowerBulls." },
    ],
  }),
});

const VALUES = [
  { t: "Personal Mentorship", d: "Small batches and 1-on-1 reviews so no question goes unanswered." },
  { t: "Practical First", d: "Every concept is taught with real projects — not just slides and theory." },
  { t: "Lifetime Community", d: "Telegram & WhatsApp groups for alumni — keep growing after the course." },
  { t: "Built for India", d: "Hindi + English instruction, Indian markets, fees that respect your budget." },
];

const STATS = [
  { v: "1.2K+", l: "Students Trained" },
  { v: "10+", l: "Years Mentoring" },
  { v: "98%", l: "Completion Rate" },
  { v: "12+", l: "Courses Offered" },
];

function AboutPage() {
  return (
    <PageShell
      eyebrow="About PowerBulls"
      title="Built for ambitious learners"
      italicWord="ambitious"
      intro="PowerBulls Academy is a Bulandshahr-based coaching institute helping students master computers, development, AI and live trading — through personal mentorship and project-first learning."
    >
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-3">Our Story</div>
            <h2 className="text-3xl md:text-5xl text-text-primary">
              From a small classroom to <span className="font-display italic">a learning movement</span>
            </h2>
            <p className="text-muted mt-5">
              PowerBulls started as a single-room coaching center teaching computer basics
              to local students in Bulandshahr. Over the years it grew into a complete academy
              that now covers everything from CCC certification and full-stack development
              to AI, prompt engineering and live trading strategies.
            </p>
            <p className="text-muted mt-3">
              We believe great teaching is personal. That's why every course at PowerBulls
              is taught in small groups with direct mentor access — not pre-recorded lectures
              you watch alone.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/courses" className="rounded-full bg-text-primary text-bg text-sm px-5 py-3 hover:opacity-90">Explore Courses</Link>
              <Link to="/contact" className="rounded-full border border-stroke text-text-primary text-sm px-5 py-3 hover:bg-surface">Visit Us</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-[40%] accent-gradient-animated opacity-20 blur-3xl" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-stroke bg-surface flex items-center justify-center">
              <img src={logo} alt="PowerBulls logo" className="w-3/4 h-3/4 object-contain" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-stroke">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.l} className="rounded-2xl border border-stroke bg-surface/40 p-6 text-center">
                <div className="font-display italic text-4xl md:text-5xl text-text-primary">{s.v}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-stroke">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs uppercase tracking-[0.3em] text-muted mb-3">What we stand for</div>
          <h2 className="text-3xl md:text-5xl text-text-primary mb-10">
            Our <span className="font-display italic">values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-3xl border border-stroke bg-surface/40 p-7 hover:border-text-primary/30 transition-colors"
              >
                <div className="font-display italic text-2xl text-text-primary">{v.t}</div>
                <p className="text-muted mt-3 text-sm">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
