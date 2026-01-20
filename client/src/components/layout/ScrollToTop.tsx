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
        <path fillRule="evenodd" d="M3.293 9.293a1 1 0 011.414 0L9 13.586V3a1 1 0 112 0v10.586l4.293-4.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  );
}
