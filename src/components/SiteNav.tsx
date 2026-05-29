import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/powerbulls-logo.jpeg";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/trading", label: "Trading" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 py-2 transition-shadow ${scrolled ? "shadow-md shadow-black/40" : ""}`}
      >
        <Link
          to="/"
          aria-label="PowerBulls Academy"
          className="group relative w-9 h-9 rounded-full p-[1.5px] transition-transform hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full accent-gradient" />
          <span className="relative flex items-center justify-center w-full h-full rounded-full bg-bg overflow-hidden">
            <img src={logo} alt="PowerBulls" className="w-full h-full object-cover" />
          </span>
        </Link>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        <div className="hidden md:flex items-center">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-muted hover:text-text-primary hover:bg-stroke/50 transition-colors"
              activeProps={{ className: "text-text-primary bg-stroke/50" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-xs px-3 py-1.5 rounded-full text-muted hover:text-text-primary"
          aria-label="Menu"
        >
          ☰
        </button>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        <Link
          to="/contact"
          className="group relative text-xs sm:text-sm rounded-full p-[2px]"
        >
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity accent-gradient-animated" />
          <span className="relative inline-flex items-center gap-1 bg-surface rounded-full backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary">
            Enroll <span className="text-[10px]">↗</span>
          </span>
        </Link>
      </div>

      {open && (
        <div className="md:hidden absolute top-20 left-4 right-4 rounded-2xl border border-stroke bg-surface/95 backdrop-blur-md p-2 flex flex-col">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm text-muted hover:text-text-primary hover:bg-stroke/40 rounded-xl"
              activeProps={{ className: "text-text-primary bg-stroke/50" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
