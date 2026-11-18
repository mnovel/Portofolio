import Link from "next/link";
import { PROFILE } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 pt-12 pb-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-mono text-2xl font-semibold text-white"
            >
              &lt;<span className="text-cyber-cyan">Novel</span>/&gt;
            </Link>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#495670] md:mx-0">
              Penetration Tester &amp; Security Analyst. Berpengalaman di Cyber
              Security, Cloud Computing, dan Incident Response. Menggabungkan
              keahlian Infrastructure &amp; Security.
            </p>
            <p className="mt-3 font-mono text-xs text-cyber-cyan">
              {PROFILE.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-cyber-text">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm text-[#495670]">
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-cyber-cyan"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="transition hover:text-cyber-cyan"
                >
                  Projects &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="transition hover:text-cyber-cyan"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-cyber-cyan">
                  Security Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/ctf-writeups"
                  className="transition hover:text-cyber-cyan"
                >
                  CTF Writeups
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="transition hover:text-cyber-cyan"
                >
                  Cheat Sheets &amp; Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-cyber-text">
              Terhubung
            </h4>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {PROFILE.socials.map((soc) => (
                <a
                  key={soc.key}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-cyber-muted transition hover:-translate-y-1 hover:border-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark"
                >
                  {soc.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-xs text-[#233554] sm:flex-row">
          <span>
            © 2026 Muhammad Novel · Built with{" "}
            <span className="text-[#ff4d6d]">❤</span> for Cyber Security &amp;
            Cloud Computing
          </span>
          <span className="font-mono">
            &lt; secure /&gt; · #PenetrationTester #SecurityAnalyst
            #Infrastructure
          </span>
        </div>
      </div>
    </footer>
  );
}
