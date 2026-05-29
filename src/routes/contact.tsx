import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { PageShell } from "@/components/PageShell";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  interest: z.string().trim().min(2).max(60),
  message: z.string().trim().min(5, "Tell us a little more").max(1000),
});

type FormState = z.infer<typeof contactSchema>;

const INTERESTS = [
  "Computer Basics",
  "CCC Certification",
  "Web Development",
  "AI & Machine Learning",
  "Prompt Mastery",
  "AI Workflows",
  "Stock Market",
  "Options Trading",
  "Crypto Trading",
  "Algo Trading",
];

export function ContactPage() {
  const [data, setData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    interest: INTERESTS[0],
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrs: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrs[key]) fieldErrs[key] = issue.message;
      }
      setErrors(fieldErrs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Enrollment enquiry — ${parsed.data.interest}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\nInterested in: ${parsed.data.interest}\n\n${parsed.data.message}`,
    );
    window.location.href = `mailto:powerbulls11@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageShell
      eyebrow="Get in touch"
      title="Let's talk learning"
      italicWord="learning"
      intro="Visit our academy in Bulandshahr, call us, or drop a message — we usually reply within a few hours."
    >
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { t: "Academy Location", v: "Bulandshahr, Uttar Pradesh", href: "https://www.google.com/maps/search/?api=1&query=Bulandshahr%2C+Uttar+Pradesh", cta: "Open in Maps" },
            { t: "Call Us", v: "+91 8650-222288", href: "tel:+918650222288", cta: "Tap to Call" },
            { t: "Email Us", v: "powerbulls11@gmail.com", href: "mailto:powerbulls11@gmail.com", cta: "Send Email" },
          ].map((c, i) => (
            <motion.a
              key={c.t}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-stroke bg-surface/40 p-7 hover:border-text-primary/30 transition-colors block"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-muted">{c.t}</div>
              <div className="font-display italic text-2xl text-text-primary mt-3">{c.v}</div>
              <div className="text-sm text-muted mt-4 inline-flex items-center gap-1">
                {c.cta} <span className="text-[10px]">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-stroke">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-3">Contact form</div>
            <h2 className="text-3xl md:text-5xl text-text-primary">
              Tell us what you want to <span className="font-display italic">learn</span>
            </h2>
            <p className="text-muted mt-4 text-sm">
              Share your details and a mentor will reach out with the right course path and fee
              structure for you.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-3xl border border-stroke bg-surface/40 p-6 md:p-8 space-y-5"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Full name" error={errors.name}>
                <input
                  value={data.name}
                  onChange={(e) => set("name", e.target.value)}
                  maxLength={80}
                  className="w-full bg-bg border border-stroke rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-text-primary/40"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input
                  value={data.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  maxLength={20}
                  className="w-full bg-bg border border-stroke rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-text-primary/40"
                  placeholder="+91 ..."
                />
              </Field>
            </div>

            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={data.email}
                onChange={(e) => set("email", e.target.value)}
                maxLength={160}
                className="w-full bg-bg border border-stroke rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-text-primary/40"
                placeholder="you@example.com"
              />
            </Field>

            <Field label="Course you're interested in" error={errors.interest}>
              <select
                value={data.interest}
                onChange={(e) => set("interest", e.target.value)}
                className="w-full bg-bg border border-stroke rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-text-primary/40"
              >
                {INTERESTS.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </Field>

            <Field label="Message" error={errors.message}>
              <textarea
                value={data.message}
                onChange={(e) => set("message", e.target.value)}
                maxLength={1000}
                rows={4}
                className="w-full bg-bg border border-stroke rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-text-primary/40 resize-none"
                placeholder="Tell us about your goals, current level, preferred timings..."
              />
            </Field>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-muted">
                By submitting you agree to be contacted by PowerBulls Academy.
              </p>
              <button
                type="submit"
                className="group relative inline-flex rounded-full p-[2px] self-start sm:self-auto"
              >
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity accent-gradient-animated" />
                <span className="relative inline-flex items-center gap-2 rounded-full bg-text-primary text-bg text-sm px-6 py-3">
                  Send enquiry <span className="text-[10px]">↗</span>
                </span>
              </button>
            </div>

            {sent && (
              <div className="text-sm text-green-400">
                Thanks! Your email app should open with your enquiry — or write directly to powerbulls11@gmail.com.
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-stroke">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs uppercase tracking-[0.3em] text-muted mb-3">Find us</div>
          <h2 className="text-3xl md:text-5xl text-text-primary mb-8">
            On the <span className="font-display italic">map</span>
          </h2>
          <div className="rounded-3xl overflow-hidden border border-stroke bg-surface/40 aspect-[16/9]">
            <iframe
              title="PowerBulls Academy location"
              src="https://www.google.com/maps?q=Bulandshahr%2C+Uttar+Pradesh&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.4) contrast(1.1) brightness(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="text-xs text-red-400 mt-1 inline-block">{error}</span>}
    </label>
  );
}
