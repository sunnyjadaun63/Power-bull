import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CourseCard } from "@/components/CourseCard";
import { TECH_COURSES } from "@/data/courses";

export const Route = createFileRoute("/courses")({
  component: CoursesPage,
  head: () => ({
    meta: [
      { title: "Courses — PowerBulls Academy" },
      {
        name: "description",
        content:
          "Computer basics, CCC, web development, AI & machine learning, prompt mastery and AI workflows — taught one-on-one at PowerBulls Academy.",
      },
      { property: "og:title", content: "Courses — PowerBulls Academy" },
      { property: "og:description", content: "Tech courses from absolute basics to advanced AI workflows." },
    ],
  }),
});

const PLANS = [
  {
    name: "Starter",
    price: "₹1,499",
    period: "per course",
    desc: "Perfect to test the waters — single short course with mentor access.",
    features: ["1 short course", "Group classes", "WhatsApp support", "Completion certificate"],
    cta: "Start Learning",
    featured: false,
  },
  {
    name: "Pro Learner",
    price: "₹14,999",
    period: "6 months",
    desc: "Most popular — bundle of dev + AI courses with 1-on-1 mentorship.",
    features: ["Any 3 courses", "1-on-1 mentor sessions", "Live project reviews", "Internship letter"],
    cta: "Choose Pro",
    featured: true,
  },
  {
    name: "Career Track",
    price: "₹29,999",
    period: "12 months",
    desc: "Complete career path — every tech course + placement guidance.",
    features: ["All tech courses", "Weekly 1-on-1 mentor", "Portfolio + GitHub setup", "Placement support"],
    cta: "Go All-In",
    featured: false,
  },
];

function CoursesPage() {
  return (
    <PageShell
      eyebrow="Tech Curriculum"
      title="Learn the future"
      italicWord="future"
      intro="From the very first click on a computer to building AI workflows that save real hours — every course is taught with personal mentorship at PowerBulls Academy."
    >
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_COURSES.map((c, i) => (
              <CourseCard key={c.title} c={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-stroke">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs text-muted uppercase tracking-[0.3em] mb-3">Pricing Plans</div>
            <h2 className="text-4xl md:text-5xl text-text-primary">
              Plans that <span className="font-display italic">scale with you</span>
            </h2>
            <p className="text-muted mt-4">
              Pay per course, bundle, or go all-in. Every plan includes mentor access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((p) => (
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
                <Link
                  to="/contact"
                  className="mt-8 inline-flex w-full justify-center rounded-full bg-text-primary text-bg text-sm px-5 py-3 hover:opacity-90"
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
