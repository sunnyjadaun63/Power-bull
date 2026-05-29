import logo from "@/assets/powerbulls-logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="relative bg-bg border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="PowerBulls" className="w-10 h-10 rounded-full object-cover border border-stroke" />
              <span className="font-display italic text-2xl text-text-primary">PowerBulls</span>
            </div>
            <p className="text-sm text-muted mt-4 max-w-sm">
              Personal coaching for computer fundamentals, development, AI and
              live trading — from absolute basics to advanced workflows.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted mt-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse-dot" />
              </span>
              Enrolling new students
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/courses", label: "Courses" },
                { to: "/trading", label: "Trading" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <a href={l.to} className="text-muted hover:text-text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Reach Us</div>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <div className="text-text-primary/80">Academy</div>
                Bulandshahr, Uttar Pradesh
              </li>
              <li>
                <div className="text-text-primary/80">Call</div>
                <a href="tel:+918650222288" className="hover:text-text-primary">+91 8650-222288</a>
              </li>
              <li>
                <div className="text-text-primary/80">Email</div>
                <a href="mailto:powerbulls11@gmail.com" className="hover:text-text-primary">powerbulls11@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stroke flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted">
          <div>© {new Date().getFullYear()} PowerBulls Academy. All rights reserved.</div>
          <div className="flex gap-5">
            {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
              <a key={s} href="#" className="hover:text-text-primary transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
