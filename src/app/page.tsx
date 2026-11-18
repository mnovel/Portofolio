import Link from "next/link";
import {
  Shield,
  Lock,
  Send,
  Briefcase,
  Laptop,
  ArrowRight,
  MapPin,
  Circle,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import TypedRole from "@/components/sections/TypedRole";
import TimelineList from "@/components/sections/TimelineList";
import SkillBars from "@/components/sections/SkillBars";
import CertGallery from "@/components/certificates/CertGallery";
import ContactCards from "@/components/sections/ContactCards";
import {
  PROFILE,
  WORK_EXPERIENCE,
  EDUCATION,
  NONFORMAL_EDUCATION,
  ORGANIZATION,
  CERTIFICATES,
} from "@/data/portfolio";

export default function HomePage() {
  // Tampilkan 6 sertifikat profesional di Home, sisanya di /certifications
  const featuredCerts = CERTIFICATES.filter(
    (c) => c.category === "professional",
  );

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* ===== HERO ===== */}
      <section className="grid min-h-[85vh] grid-cols-1 items-center gap-10 border-b border-white/[0.04] py-12 md:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs tracking-widest text-cyber-cyan sm:text-sm">
            {PROFILE.tagline}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            Muhammad <span className="text-cyber-cyan">Novel</span>
          </h1>
          <TypedRole />
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-cyber-muted sm:text-base">
            <span className="glow-cyan font-semibold">Penetration Tester</span>{" "}
            & <span className="glow-green font-semibold">Security Analyst</span>{" "}
            dengan keahlian tambahan di bidang{" "}
            <strong className="text-white">Infrastructure Engineering</strong>.
            Saat ini mengelola server, database, & jaringan, sekaligus
            mengamankan sistem dari ancaman siber sebagai{" "}
            <strong className="text-white">Security Engineer</strong> di{" "}
            {PROFILE.company}.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-cyber-cyan px-7 py-3.5 text-sm font-semibold text-cyber-dark shadow-[0_0_20px_rgba(0,240,255,0.25)] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,240,255,0.45)]"
            >
              <Send className="h-4 w-4" /> Hubungi Saya
            </Link>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-md border border-cyber-cyan px-7 py-3.5 text-sm font-semibold text-cyber-cyan transition hover:-translate-y-1 hover:bg-cyber-cyan/10"
            >
              <Briefcase className="h-4 w-4" /> Lihat Karier
            </a>
          </div>
        </div>

        <div className="order-first flex items-center justify-center md:order-last">
          <div className="relative flex aspect-square w-60 items-center justify-center sm:w-96">
            <div className="animate-spin-slow absolute inset-0 rounded-full border border-cyber-cyan/15" />
            <div className="animate-spin-reverse absolute inset-8 rounded-full border border-cyber-green/15" />
            <div className="animate-spin-dashed absolute inset-16 rounded-full border border-dashed border-cyber-cyan/25" />

            <div className="animate-float relative z-10 flex items-center justify-center">
              <Shield className="h-28 w-28 text-cyber-cyan drop-shadow-[0_0_30px_rgba(0,240,255,0.3)] sm:h-36 sm:w-36" />
              <Lock className="absolute h-10 w-10 text-cyber-green drop-shadow-[0_0_20px_rgba(0,255,153,0.5)] sm:h-12 sm:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="border-b border-white/[0.04] py-16">
        <SectionTitle title="ABOUT ME" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-4 text-sm leading-relaxed text-cyber-muted sm:text-base lg:col-span-2">
            <p>
              Saya lulusan{" "}
              <strong className="glow-cyan">Teknik Informatika</strong> dari{" "}
              <strong className="glow-cyan">
                Universitas Muhammadiyah Malang
              </strong>{" "}
              dengan ketertarikan mendalam di bidang{" "}
              <strong className="glow-green">cyber security</strong>,{" "}
              <strong className="glow-cyan">cloud computing</strong>, dan
              pengembangan perangkat lunak. Telah menyelesaikan sertifikasi
              profesional termasuk <strong className="text-white">CND</strong>{" "}
              dan <strong className="text-white">ECIH</strong> dari EC-Council,
              serta <strong className="text-white">CCNA CyberOps</strong> dari
              Cisco.
            </p>
            <p>
              Saat ini menjabat sebagai{" "}
              <strong className="glow-green">Security Engineer</strong> di{" "}
              <strong className="glow-cyan">
                RSUD dr. R. Soedarsono Kota Pasuruan
              </strong>
              , bertanggung jawab atas keamanan sistem informasi rumah sakit,
              pengelolaan infrastruktur server, dan respons insiden keamanan
              siber.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-mono text-xs text-cyber-cyan hover:underline sm:text-sm"
              >
                Baca selengkapnya tentang latar belakang saya{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {PROFILE.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-xl border border-cyber-cyan/15 bg-white/[0.03] p-5 text-center backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyber-cyan"
              >
                <span className="text-2xl font-extrabold text-cyber-cyan sm:text-3xl">
                  {stat.num}
                </span>
                <span className="mt-1 text-[11px] uppercase tracking-wider text-cyber-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE & EDUCATION ===== */}
      <section id="experience" className="border-b border-white/[0.04] py-16">
        <SectionTitle title="EXPERIENCE & EDUCATION" />
        <TimelineList items={[...WORK_EXPERIENCE, ...EDUCATION]} />

        <div className="mt-12">
          <h3 className="mb-6 flex items-center gap-2.5 text-lg font-semibold text-cyber-cyan sm:text-xl">
            <Laptop className="h-5 w-5" /> Nonformal Education
          </h3>
          <TimelineList items={NONFORMAL_EDUCATION} />
        </div>
      </section>

      {/* ===== ORGANIZATION ===== */}
      <section id="organization" className="border-b border-white/[0.04] py-16">
        <SectionTitle title="ORGANIZATION" />
        <TimelineList items={ORGANIZATION} />
      </section>

      {/* ===== SKILLS & TOOLS ===== */}
      <section id="skills" className="border-b border-white/[0.04] py-16">
        <SectionTitle title="SKILLS & TOOLS" />
        <SkillBars />
      </section>

      {/* ===== FEATURED CERTIFICATIONS ===== */}
      <section id="certificates" className="border-b border-white/[0.04] py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-4 text-2xl font-bold text-white sm:text-3xl">
            <span className="glow-cyan font-mono">#</span>
            <span>CERTIFICATES GALLERY</span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-cyber-cyan/30 to-transparent" />
          </div>
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 font-mono text-xs text-cyber-green hover:underline sm:text-sm"
          >
            Buka Halaman Filter ({CERTIFICATES.length} Sertifikat){" "}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <CertGallery certificates={CERTIFICATES} />
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section id="contact" className="py-16 text-center">
        <SectionTitle title="CONTACT" />
        <p className="mx-auto mb-6 max-w-xl text-sm text-cyber-muted sm:text-base">
          Siap berkolaborasi atau berdiskusi seputar keamanan siber, cloud
          computing, dan incident response. Jangan ragu untuk menghubungi saya!
        </p>

        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-cyber-green/25 bg-cyber-green/10 px-6 py-2 text-xs font-semibold text-cyber-green">
          <Circle className="h-2.5 w-2.5 animate-pulse fill-cyber-green" />
          Tersedia untuk Diskusi & Kolaborasi
        </div>

        <ContactCards />

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-cyber-muted">
          <MapPin className="h-4 w-4 text-cyber-cyan" />
          <span>{PROFILE.location} (Siap Hybrid / On-site)</span>
        </div>
      </section>
    </div>
  );
}
