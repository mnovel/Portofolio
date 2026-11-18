import { Metadata } from "next";
import { FolderGit2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Studi kasus implementasi keamanan infrastruktur, SOC, penelitian deteksi DDoS, dan pengembangan sistem.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <SectionTitle title="PROJECTS & CASE STUDIES" />
      <p className="mb-10 max-w-2xl text-sm text-cyber-muted sm:text-base">
        Implementasi teknis di bidang keamanan infrastruktur, Security
        Operations Center (SOC), riset keamanan jaringan, dan pengembangan
        perangkat lunak.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between rounded-xl border border-cyber-cyan/20 bg-cyber-card/70 p-6 transition hover:-translate-y-1 hover:border-cyber-cyan"
          >
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded-full border border-cyber-green/30 bg-cyber-green/10 px-3 py-0.5 font-mono text-[11px] text-cyber-green">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-cyber-muted">
                  {project.period}
                </span>
              </div>

              <h2 className="mb-3 flex items-start gap-2.5 text-lg font-bold text-white sm:text-xl">
                <FolderGit2 className="mt-1 h-5 w-5 shrink-0 text-cyber-cyan" />
                <span>{project.title}</span>
              </h2>

              <p className="mb-4 text-sm leading-relaxed text-cyber-muted">
                {project.summary}
              </p>

              <ul className="mb-6 space-y-1.5">
                {project.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="relative pl-4 text-xs leading-relaxed text-cyber-text/90 before:absolute before:left-0 before:text-cyber-cyan before:content-['▹']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-cyber-cyan/10 px-2.5 py-1 font-mono text-[11px] text-cyber-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
