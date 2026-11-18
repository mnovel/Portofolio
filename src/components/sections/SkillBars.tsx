"use client";

import { useEffect, useRef, useState } from "react";
import { Server, Shield, Users, Wrench, Code2 } from "lucide-react";
import { SKILLS_DATA } from "@/data/portfolio";
import { SkillMetric } from "@/types";

function MetricGroup({
  title,
  icon,
  colorClass,
  items,
  isVisible,
}: {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  items: SkillMetric[];
  isVisible: boolean;
}) {
  return (
    <div>
      <h3
        className={`mb-6 flex items-center gap-2.5 text-lg font-semibold ${colorClass}`}
      >
        {icon}
        <span>{title}</span>
      </h3>
      <div className="space-y-5">
        {items.map((skill) => (
          <div key={skill.name}>
            <div className="mb-1.5 flex justify-between text-sm font-medium text-cyber-text">
              <span>{skill.name}</span>
              <span className="font-mono text-cyber-cyan">{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-green shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all duration-1000 ease-out"
                style={{ width: isVisible ? `${skill.level}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillBars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      {/* Kolom Kiri: Hard Skills */}
      <div className="space-y-10">
        <MetricGroup
          title="Infrastructure Engineering"
          icon={<Server className="h-5 w-5" />}
          colorClass="text-cyber-cyan"
          items={SKILLS_DATA.infrastructure}
          isVisible={isVisible}
        />
        <MetricGroup
          title="Security Operations"
          icon={<Shield className="h-5 w-5" />}
          colorClass="text-cyber-green"
          items={SKILLS_DATA.security}
          isVisible={isVisible}
        />
      </div>

      {/* Kolom Kanan: Soft Skills, Tools, Programming */}
      <div className="space-y-8">
        <div>
          <h3 className="mb-5 flex items-center gap-2.5 text-lg font-semibold text-white">
            <Users className="h-5 w-5 text-cyber-green" />
            <span>Soft Skills</span>
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {SKILLS_DATA.softSkills.map((item) => (
              <span
                key={item}
                className="cursor-default rounded-full border border-cyber-green/20 bg-cyber-green/5 px-4 py-1.5 text-xs font-medium text-cyber-text transition hover:-translate-y-0.5 hover:border-cyber-green hover:bg-cyber-green/15 hover:text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 flex items-center gap-2.5 text-lg font-semibold text-white">
            <Wrench className="h-5 w-5 text-cyber-cyan" />
            <span>Software / Tools</span>
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {SKILLS_DATA.tools.map((tool) => (
              <span
                key={tool}
                className="cursor-default rounded-lg border border-cyber-cyan/15 bg-cyber-cyan/5 px-4 py-2 font-mono text-xs text-cyber-muted transition hover:-translate-y-0.5 hover:border-cyber-cyan hover:bg-cyber-cyan/15 hover:text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 flex items-center gap-2.5 text-lg font-semibold text-white">
            <Code2 className="h-5 w-5 text-cyber-cyan" />
            <span>Programming</span>
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {SKILLS_DATA.programming.map((lang) => (
              <span
                key={lang}
                className="cursor-default rounded-lg border border-cyber-cyan/15 bg-cyber-cyan/5 px-4 py-2 font-mono text-xs text-cyber-muted transition hover:-translate-y-0.5 hover:border-cyber-cyan hover:bg-cyber-cyan/15 hover:text-white"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
