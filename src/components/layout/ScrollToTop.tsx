"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-7 right-7 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-cyber-cyan text-cyber-dark shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white",
        visible
          ? "translate-y-0 opacity-100 visible"
          : "translate-y-5 opacity-0 invisible",
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
