import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Hls from "hls.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

gsap.registerPlugin(ScrollTrigger);

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

/* -------------------------------------------------------------------------- */
/*                              Loading screen                                */
/* -------------------------------------------------------------------------- */

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const words = ["Learn", "Build", "Earn"];

  useEffect(() => {
    const start = performance.now();
    const dur = 2700;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setCount(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onComplete, 400);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-6 left-6 text-xs text-muted uppercase tracking-[0.3em]"
      >
        PowerBulls Academy
      </motion.div>

      <div className="text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="font-display italic text-4xl md:text-6xl lg:text-7xl text-text-primary/80"
          >
            {words[wordIdx]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 right-6 font-display text-6xl md:text-8xl lg:text-9xl text-text-primary tabular-nums">
        {String(count).padStart(3, "0")}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137,170,204,0.35)",
          }}
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Navbar                                     */
/* -------------------------------------------------------------------------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "courses", label: "Courses" },
    { id: "journal", label: "Journal" },
  ];

  const handleNav = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 py-2 transition-shadow ${scrolled ? "shadow-md shadow-black/30" : ""}`}
      >
        <button
          aria-label="Logo"
          className="group relative w-9 h-9 rounded-full p-[1.5px] transition-transform hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full accent-gradient group-hover:[background:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]" />
          <span className="relative flex items-center justify-center w-full h-full rounded-full bg-bg font-display italic text-[13px]">
            CM
          </span>
        </button>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => handleNav(l.id)}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
              active === l.id
                ? "text-text-primary bg-stroke/50"
                : "text-muted hover:text-text-primary hover:bg-stroke/50"
            }`}
          >
            {l.label}
          </button>
        ))}

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNav("contact");
          }}
          className="group relative text-xs sm:text-sm rounded-full p-[2px]"
        >
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity accent-gradient-animated" />
          <span className="relative inline-flex items-center gap-1 bg-surface rounded-full backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary">
            Enroll <span className="text-[10px]">↗</span>
          </span>
        </a>
      </div>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Hero                                     */
/* -------------------------------------------------------------------------- */

function HlsVideo({
  className,
  flipped = false,
}: {
  className?: string;
  flipped?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    }
  }, []);
  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      className={`absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 ${flipped ? "scale-y-[-1]" : ""} ${className ?? ""}`}
    />
  );
}

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const roles = ["Mentor", "Coach", "Builder", "Trader"];

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".name-reveal", { opacity: 0, y: 50, duration: 1.2, delay: 0.1 });
      tl.from(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20, duration: 1, stagger: 0.1 },
        0.3,
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <HlsVideo />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          BATCH 2026 · ENROLLING NOW
        </div>
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          PowerBulls Academy
        </h1>
        <p className="blur-in text-lg md:text-2xl text-text-primary/90 mb-4">
          A&nbsp;
          <span
            key={roleIdx}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {roles[roleIdx]}
          </span>
          &nbsp;guiding you from first click to AI workflows.
        </p>
        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12">
          Personal coaching in computer basics, CCC, full-stack development,
          AI & machine learning, prompt mastery and trading — all in one place.
        </p>
        <div className="blur-in inline-flex flex-wrap justify-center gap-4">
          <a
            href="/courses"
            className="group relative rounded-full p-[2px] transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity accent-gradient-animated" />
            <span className="relative block rounded-full bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary transition-colors text-sm px-7 py-3.5">
              See Courses
            </span>
          </a>
          <a
            href="/trading"
            className="group relative rounded-full p-[2px] transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity accent-gradient-animated" />
            <span className="relative block rounded-full border-2 border-stroke bg-bg text-text-primary group-hover:border-transparent text-sm px-7 py-3.5">
              Trading Courses
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute inset-0 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Section header                              */
/* -------------------------------------------------------------------------- */

function SectionHeader({
  eyebrow,
  title,
  italicWord,
  subtext,
  cta,
}: {
  eyebrow: string;
  title: string;
  italicWord: string;
  subtext: string;
  cta?: string;
}) {
  const parts = title.split(italicWord);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
    >
      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">
            {eyebrow}
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl text-text-primary leading-[1]">
          {parts[0]}
          <span className="font-display italic">{italicWord}</span>
          {parts[1]}
        </h2>
        <p className="text-sm md:text-base text-muted mt-4">{subtext}</p>
      </div>
      {cta && (
        <a
          href="#contact"
          className="group relative hidden md:inline-flex rounded-full p-[2px] self-end"
        >
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity accent-gradient-animated" />
          <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-surface text-sm text-text-primary px-5 py-2.5">
            {cta} <span className="text-[10px]">→</span>
          </span>
        </a>
      )}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Courses                                   */
/* -------------------------------------------------------------------------- */

type Course = {
  title: string;
  tagline: string;
  span: string;
  aspect: string;
  img: string;
};

const COURSES: Course[] = [
  {
    title: "Computer Basics & CCC",
    tagline: "Intro to computers, parts, OS, MS Office & CCC certification.",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1400&q=80",
  },
  {
    title: "Full-Stack Development",
    tagline: "HTML, CSS, JS, React, Node — build real products end-to-end.",
    span: "md:col-span-5",
    aspect: "aspect-[16/10]",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=80",
  },
  {
    title: "AI & Machine Learning",
    tagline: "Python, data, models — build intelligent systems from scratch.",
    span: "md:col-span-5",
    aspect: "aspect-[16/10]",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80",
  },
  {
    title: "Prompt Mastery & AI Workflows",
    tagline: "Advanced prompting, agents and automation that save real hours.",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=80",
  },
];

function Courses() {
  return (
    <section id="courses" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Featured Courses"
          title="Featured courses"
          italicWord="courses"
          subtext="A learning path from first boot to AI workflows — taught one-on-one with mentor support."
          cta="View all courses"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {COURSES.map((c) => (
            <div
              key={c.title}
              className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl ${c.span} ${c.aspect}`}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 halftone opacity-20 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 z-10">
                <h3 className="text-2xl md:text-3xl text-text-primary">
                  <span className="font-display italic">{c.title}</span>
                </h3>
                <p className="text-sm text-muted mt-1 max-w-md">{c.tagline}</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="relative inline-flex rounded-full p-[2px]">
                  <span className="absolute inset-0 rounded-full accent-gradient-animated" />
                  <span className="relative inline-flex items-center gap-1 rounded-full bg-text-primary text-bg text-sm px-5 py-2.5">
                    Enroll — <span className="font-display italic">{c.title}</span>
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Journal                                   */
/* -------------------------------------------------------------------------- */

const JOURNAL = [
  {
    title: "Stock & Crypto Trading Masterclass",
    img: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&q=80",
    read: "12 modules",
    date: "Live cohort",
  },
  {
    title: "From Zero to ChatGPT Power User",
    img: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&q=80",
    read: "8 modules",
    date: "Self-paced",
  },
  {
    title: "Build Your First React App",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    read: "10 modules",
    date: "Project-based",
  },
  {
    title: "Computer Fundamentals in Hindi",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
    read: "6 modules",
    date: "Beginner",
  },
];

function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Latest Modules"
          title="Recent drops"
          italicWord="drops"
          subtext="New cohorts, recorded modules and free guides — fresh every month."
          cta="View all"
        />

        <div className="flex flex-col gap-4">
          {JOURNAL.map((j, i) => (
            <motion.a
              key={j.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="flex items-center gap-4 sm:gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors"
            >
              <img
                src={j.img}
                alt={j.title}
                loading="lazy"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-xl text-text-primary truncate">
                  <span className="font-display italic">{j.title}</span>
                </h3>
                <div className="text-xs text-muted mt-1 flex items-center gap-3">
                  <span>{j.read}</span>
                  <span className="w-1 h-1 rounded-full bg-muted" />
                  <span>{j.date}</span>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-stroke text-text-primary">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Explorations                                */
/* -------------------------------------------------------------------------- */

const EXPLORATIONS = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&q=80",
];

function Explorations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const colARef = useRef<HTMLDivElement>(null);
  const colBRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!contentRef.current || !sectionRef.current) return;
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });
      gsap.to(colARef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(colBRef.current, {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const colA = EXPLORATIONS.slice(0, 3);
  const colB = EXPLORATIONS.slice(3);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg min-h-[300vh] overflow-hidden"
    >
      <div
        ref={contentRef}
        className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">
            Explorations
          </span>
          <span className="w-8 h-px bg-stroke" />
        </div>
        <h2 className="text-5xl md:text-7xl text-text-primary leading-[1]">
          Visual <span className="font-display italic">playground</span>
        </h2>
        <p className="text-sm md:text-base text-muted mt-4 max-w-md">
          Student projects, dashboards, AI experiments and trading setups —
          built inside the cohorts.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-flex rounded-full border border-stroke bg-surface text-text-primary text-sm px-5 py-2.5 hover:bg-stroke/40 transition-colors"
        >
          See on Dribbble →
        </a>
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto h-full px-6 md:px-12">
          <div className="grid grid-cols-2 gap-12 md:gap-40 h-full items-center">
            <div ref={colARef} className="flex flex-col gap-12 md:gap-24 pt-32">
              {colA.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setLightbox(src)}
                  className="pointer-events-auto block w-full max-w-[320px] aspect-square overflow-hidden rounded-2xl border border-stroke"
                  style={{ transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)` }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div
              ref={colBRef}
              className="flex flex-col gap-12 md:gap-24 pb-32 items-end"
            >
              {colB.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setLightbox(src)}
                  className="pointer-events-auto block w-full max-w-[320px] aspect-square overflow-hidden rounded-2xl border border-stroke"
                  style={{ transform: `rotate(${i % 2 === 0 ? 3 : -3}deg)` }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt=""
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Stats                                    */
/* -------------------------------------------------------------------------- */

function Stats() {
  const stats = [
    { value: "10+", label: "Years Mentoring" },
    { value: "1.2K+", label: "Students Trained" },
    { value: "98%", label: "Completion Rate" },
  ];
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-stroke pt-12">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <div className="text-6xl md:text-8xl font-display italic text-text-primary">
                {s.value}
              </div>
              <div className="text-xs text-muted uppercase tracking-[0.3em] mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Contact                                   */
/* -------------------------------------------------------------------------- */

function Contact() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="relative bg-bg pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden"
    >
      <HlsVideo flipped />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="overflow-hidden mb-16 md:mb-24">
          <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-5xl md:text-8xl lg:text-9xl font-display italic text-text-primary/90 px-6"
              >
                LEARN · BUILD · EARN ·
              </span>
            ))}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs text-muted uppercase tracking-[0.3em] mb-4">
            Get in touch
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-text-primary leading-[1] mb-8">
            Ready to <span className="font-display italic">level up?</span>
          </h2>
          <a
            href="mailto:powerbulls11@gmail.com"
            className="group relative inline-flex rounded-full p-[2px]"
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity accent-gradient-animated" />
            <span className="relative inline-flex items-center gap-2 rounded-full bg-text-primary text-bg text-sm md:text-base px-7 py-4">
              powerbulls11@gmail.com <span className="text-[10px]">↗</span>
            </span>
          </a>
        </div>

        <div className="mt-20 md:mt-32 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-stroke">
          <div className="flex items-center gap-4 text-sm text-muted">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse-dot" />
            </span>
            Enrolling new students
          </div>
          <div className="flex items-center gap-5 text-sm text-muted">
            {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
              <a key={s} href="#" className="hover:text-text-primary transition-colors">
                {s}
              </a>
            ))}
          </div>
          <div className="text-xs text-muted">
            © {new Date().getFullYear()} PowerBulls Academy
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export function Index() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="bg-bg text-text-primary font-body min-h-screen">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <SiteNav />
      <Hero />
      <Courses />
      <Journal />
      <Explorations />
      <Stats />
      <Contact />
      <SiteFooter />
    </div>
  );
}
