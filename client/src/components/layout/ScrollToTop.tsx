import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: "auto" });
    } catch (e) {
      // ignore
    }
  }, [location]);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed z-50 bottom-6 right-6 p-2 rounded-full shadow-lg transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M10 18a1 1 0 01-1-1V5.414L5.707 8.707a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 01-1 1z" clipRule="evenodd" />
      </svg>
    </button>
  );
}
