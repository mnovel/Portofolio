"use client";

import { useState, useEffect } from "react";
import { PROFILE } from "@/data/portfolio";

export default function TypedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PROFILE.typedRoles[roleIndex];
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) speed = 2000;
    else if (isDeleting && charIndex === 0) speed = 500;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PROFILE.typedRoles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="my-5 min-h-[44px] text-lg font-semibold text-cyber-text sm:text-2xl">
      <span className="animate-pulse border-r-2 border-cyber-cyan pr-2 text-cyber-green">
        {PROFILE.typedRoles[roleIndex].substring(0, charIndex)}
      </span>
    </div>
  );
}
