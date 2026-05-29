import { PageShell } from "@/components/PageShell";
import { CourseCard } from "@/components/CourseCard";
import { TRADING_COURSES } from "@/data/courses";

const TRADING_PLANS = [
  {
    name: "Foundation",
    price: "₹3,499",
    period: "one-time",
    desc: "Start right — markets, charts and risk basics.",
    features: ["Stock Market Foundation", "Live Q&A weekly", "Telegram group", "Certificate"],
    cta: "Start Trading",
    featured: false,
  },
  {
    name: "Trader Pro",
    price: "₹18,999",
    period: "6 months",
    desc: "Most popular — TA, intraday, swing & options with live mentorship.",
    features: ["4 trading courses", "Live market sessions", "Trade journal reviews", "Strategy backtests"],
    cta: "Become Pro",
    featured: true,
  },
  {
    name: "Full Stack Trader",
    price: "₹39,999",
    period: "12 months",
    desc: "Everything — equity, options, crypto and algo trading with Python.",
    features: ["All trading courses", "1-on-1 mentor calls", "Algo code templates", "Lifetime community"],
    cta: "Go All-In",
    featured: false,
  },
];

export function TradingPage() {
  return (
    <PageShell
      eyebrow="Trading Curriculum"
      title="Trade with edge"
      italicWord="edge"
      intro="From your first demat account to deploying automated trading strategies — structured mentorship for serious traders, by PowerBulls."
    >
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRADING_COURSES.map((c, i) => (
              <CourseCard key={c.title} c={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-stroke">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs text-muted uppercase tracking-[0.3em] mb-3">Trading Plans</div>
            <h2 className="text-4xl md:text-5xl text-text-primary">
              Pick your <span className="font-display italic">trading path</span>
            </h2>
            <p className="text-muted mt-4">
              Every plan includes live market sessions and mentor reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRADING_PLANS.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-8 border ${p.featured ? "border-transparent bg-surface" : "border-stroke bg-surface/40"}`}
              >
                {p.featured && (
                  <>
                    <span className="absolute inset-0 -z-10 rounded-3xl accent-gradient-animated opacity-80" />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] bg-text-primary text-bg px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </>
                )}
                <div className="text-xs uppercase tracking-[0.3em] text-muted">{p.name}</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display italic text-5xl text-text-primary">{p.price}</span>
                  <span className="text-sm text-muted">{p.period}</span>
                </div>
                <p className="text-sm text-muted mt-3">{p.desc}</p>
                <ul className="mt-6 space-y-2 text-sm text-text-primary/90">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full accent-gradient" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="mt-8 inline-flex w-full justify-center rounded-full bg-text-primary text-bg text-sm px-5 py-3 hover:opacity-90"
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
