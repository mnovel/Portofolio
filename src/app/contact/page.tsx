import { Metadata } from "next";
import { Circle, MapPin } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactCards from "@/components/sections/ContactCards";
import { PROFILE } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hubungi Muhammad Novel untuk diskusi keamanan siber, infrastruktur, atau kolaborasi.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 text-center">
      <SectionTitle title="CONTACT" />
      <p className="mx-auto mb-6 max-w-xl text-sm text-cyber-muted sm:text-base">
        Siap berkolaborasi atau berdiskusi seputar keamanan siber, cloud
        computing, dan incident response. Jangan ragu untuk menghubungi saya
        melalui kanal di bawah ini!
      </p>

      <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-cyber-green/25 bg-cyber-green/10 px-6 py-2 text-xs font-semibold text-cyber-green">
        <Circle className="h-2.5 w-2.5 animate-pulse fill-cyber-green" />
        Tersedia untuk Diskusi & Kolaborasi
      </div>

      <ContactCards />

      <div className="mt-10 flex items-center justify-center gap-2 text-sm text-cyber-muted">
        <MapPin className="h-4 w-4 text-cyber-cyan" />
        <span>{PROFILE.location} · Siap Hybrid / On-site</span>
      </div>
    </div>
  );
}
