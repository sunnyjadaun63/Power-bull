import { useEffect, useState } from "react";

import { AboutPage } from "./routes/about";
import { ContactPage } from "./routes/contact";
import { CoursesPage } from "./routes/courses";
import { Index } from "./routes";
import { TradingPage } from "./routes/trading";

const ROUTES = {
  "/": {
    title: "PowerBulls Academy - Computer, Development, AI & Trading Coaching",
    component: Index,
  },
  "/about": {
    title: "About - PowerBulls Academy",
    component: AboutPage,
  },
  "/contact": {
    title: "Contact - PowerBulls Academy",
    component: ContactPage,
  },
  "/courses": {
    title: "Courses - PowerBulls Academy",
    component: CoursesPage,
  },
  "/trading": {
    title: "Trading Courses - PowerBulls Academy",
    component: TradingPage,
  },
} as const;

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4 text-text-primary">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-text-primary px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export function App() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/$/, "") || "/");
  const route = ROUTES[path as keyof typeof ROUTES];
  const Page = route?.component ?? NotFound;

  useEffect(() => {
    document.title = route?.title ?? "Page not found - PowerBulls Academy";
  }, [route?.title]);

  useEffect(() => {
    const updatePath = () => {
      setPath(window.location.pathname.replace(/\/$/, "") || "/");
    };

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = (event.target as Element | null)?.closest("a");
      if (!link || link.target || link.hasAttribute("download")) return;

      const url = new URL(link.href);
      if (url.origin !== window.location.origin) return;

      const nextPath = url.pathname.replace(/\/$/, "") || "/";
      if (!(nextPath in ROUTES)) return;

      event.preventDefault();
      window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
      updatePath();
      if (url.hash) {
        document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("popstate", updatePath);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", updatePath);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return <Page />;
}
