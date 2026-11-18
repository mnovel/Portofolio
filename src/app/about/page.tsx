import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Server,
  Terminal,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineList from "@/components/sections/TimelineList";
import {
  PROFILE,
  WORK_EXPERIENCE,
  EDUCATION,
  NONFORMAL_EDUCATION,
  ORGANIZATION,
  CERTIFICATES,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Latar belakang pendidikan, pengalaman karier, dan fokus keahlian Muhammad Novel di bidang Cyber Security & Infrastructure Engineering.",
};

const PILLARS = [
  {
    title: "Offensive Security & Pentest",
    icon: Terminal,
    accent: "text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/10",
    description:
      "Pengujian penetrasi aplikasi web (OWASP Top 10), analisis kerentanan, serta validasi kontrol akses untuk menutup celah sebelum dieksploitasi.",
    tags: ["Web Pentest", "Burp Suite", "OWASP", "Vulnerability Assessment"],
  },
  {
    title: "Blue Team, SOC & Forensics",
    icon: ShieldCheck,
    accent: "text-cyber-green border-cyber-green/30 bg-cyber-green/10",
    description:
      "Pemantauan ancaman 24/7 menggunakan SIEM/IDS/IPS, investigasi forensik digital, manajemen honeypot, dan penanganan insiden terstruktur.",
    tags: ["Wazuh SIEM", "Suricata IDS", "ECIH", "Digital Forensics"],
  },
  {
    title: "Infrastructure & Cloud Ops",
    icon: Server,
    accent: "text-cyber-amber border-cyber-amber/30 bg-cyber-amber/10",
    description:
      "Arsitektur server ketersediaan tinggi, virtualisasi, segmentasi jaringan VLAN, database hardening, dan observability sistem kritis.",
    tags: ["Linux Hardening", "VMware", "Docker", "Grafana", "CCNA"],
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <SectionTitle title="ABOUT ME" />

      {/* ===== 1. TERMINAL DOSSIER & QUICK STATS ===== */}
      <div className="mb-14 overflow-hidden rounded-2xl border border-cyber-cyan/25 bg-cyber-card/80 shadow-[0_0_40px_rgba(0,240,255,0.06)]">
        {/* Window Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-cyber-muted">
              novel@secops:~$ whoami --profile
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyber-green/30 bg-cyber-green/10 px-3 py-0.5 font-mono text-[11px] text-cyber-green">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyber-green" />
            ACTIVE / VERIFIED
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-12">
          {/* Narrative Bio */}
          <div className="space-y-4 text-sm leading-relaxed text-cyber-muted sm:text-base lg:col-span-8">
            <p>
              Saya <strong className="text-white">{PROFILE.name}</strong>,
              lulusan <strong className="glow-cyan">Teknik Informatika</strong>{" "}
              dari{" "}
              <strong className="glow-cyan">
                Universitas Muhammadiyah Malang
              </strong>{" "}
              dengan spesialisasi di bidang{" "}
              <strong className="glow-green">Cyber Security</strong>,{" "}
              <strong className="glow-cyan">Cloud Computing</strong>, dan{" "}
              <strong className="text-white">Infrastructure Engineering</strong>
              .
            </p>
            <p>
              Dalam peran saat ini sebagai{" "}
              <strong className="glow-green">Security Engineer</strong> di{" "}
              <strong className="text-white">
                RSUD dr. R. Soedarsono Kota Pasuruan
              </strong>
              , saya menjembatani dua dunia yang sering terpisah: keandalan
              operasional infrastruktur (server, virtualisasi, database,
              jaringan 24/7) dan pertahanan keamanan ofensif/defensif
              (penetration testing, SIEM/IDS/IPS, dan incident response).
            </p>
            <p>
              Sebelumnya, saya mengasah kemampuan investigasi forensik digital,
              pengujian penetrasi web, serta manajemen honeypot selama lebih
              dari dua tahun di{" "}
              <strong className="text-white">CSIRT UMM</strong>, serta memimpin
              divisi riset dan pengembangan aplikasi di{" "}
              <strong className="text-white">LSO Kaliber</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-cyber-text">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5">
                <MapPin className="h-3.5 w-3.5 text-cyber-cyan" />{" "}
                {PROFILE.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5">
                <Cpu className="h-3.5 w-3.5 text-cyber-green" /> Hybrid Infra &
                Security
              </span>
            </div>
          </div>

          {/* Highlight Metrics */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
            <div className="rounded-xl border border-cyber-cyan/20 bg-cyber-dark/70 p-4">
              <div className="font-mono text-2xl font-extrabold text-cyber-cyan">
                CND · ECIH
              </div>
              <div className="mt-1 text-xs text-cyber-muted">
                EC-Council ANSI/ISO 17024 Certified
              </div>
            </div>

            <div className="rounded-xl border border-cyber-green/20 bg-cyber-dark/70 p-4">
              <div className="font-mono text-2xl font-extrabold text-cyber-green">
                {CERTIFICATES.length}+
              </div>
              <div className="mt-1 text-xs text-cyber-muted">
                Sertifikasi & Kredensial Teknis
              </div>
            </div>

            <div className="col-span-2 rounded-xl border border-white/10 bg-cyber-dark/70 p-4 sm:col-span-1">
              <div className="font-mono text-2xl font-extrabold text-white">
                24/7
              </div>
              <div className="mt-1 text-xs text-cyber-muted">
                Critical Healthcare Infra & SOC Ops
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 2. CORE COMPETENCY PILLARS ===== */}
      <div className="mb-16">
        <h2 className="mb-6 flex items-center gap-2 font-mono text-lg font-semibold text-cyber-cyan">
          <span>// CORE COMPETENCIES</span>
          <span className="h-[1px] flex-1 bg-gradient-to-r from-cyber-cyan/30 to-transparent" />
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-cyber-card/60 p-6 transition hover:-translate-y-1 hover:border-cyber-cyan/40"
              >
                <div>
                  <div
                    className={`mb-4 inline-flex rounded-lg border p-2.5 ${pillar.accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mb-5 text-xs leading-relaxed text-cyber-muted sm:text-sm">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-cyber-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== 3. TIMELINE SECTIONS (FULL WIDTH & CLEAN) ===== */}
      <div className="mx-auto max-w-4xl space-y-12">
        <div>
          <h2 className="mb-5 flex items-center gap-2.5 font-mono text-lg font-semibold text-cyber-cyan">
            <Briefcase className="h-5 w-5" />
            <span>// Work Experience</span>
          </h2>
          <TimelineList items={WORK_EXPERIENCE} />
        </div>

        <div>
          <h2 className="mb-5 flex items-center gap-2.5 font-mono text-lg font-semibold text-cyber-cyan">
            <GraduationCap className="h-5 w-5" />
            <span>// Education</span>
          </h2>
          <TimelineList items={EDUCATION} />
        </div>

        <div>
          <h2 className="mb-5 flex items-center gap-2.5 font-mono text-lg font-semibold text-cyber-green">
            <Award className="h-5 w-5" />
            <span>// Nonformal Education & Bootcamps</span>
          </h2>
          <TimelineList items={NONFORMAL_EDUCATION} />
        </div>

        <div>
          <h2 className="mb-5 flex items-center gap-2.5 font-mono text-lg font-semibold text-cyber-amber">
            <Users className="h-5 w-5" />
            <span>// Organization</span>
          </h2>
          <TimelineList items={ORGANIZATION} />
        </div>

        {/* Quick Navigation Card */}
        <div className="flex flex-col justify-between gap-5 rounded-xl border border-cyber-cyan/25 bg-gradient-to-r from-cyber-cyan/10 via-cyber-card to-cyber-green/5 p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="mb-1 text-base font-bold text-white">
              Eksplorasi Bukti Teknis & Kredensial
            </h3>
            <p className="text-xs leading-relaxed text-cyber-muted sm:text-sm">
              Lihat detail studi kasus arsitektur keamanan infrastruktur maupun
              dokumen sertifikasi resmi.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-md bg-cyber-cyan px-4 py-2.5 font-mono text-xs font-semibold text-cyber-dark transition hover:opacity-90"
            >
              Projects <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-1.5 rounded-md border border-cyber-green px-4 py-2.5 font-mono text-xs font-semibold text-cyber-green transition hover:bg-cyber-green hover:text-cyber-dark"
            >
              Certifications <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
