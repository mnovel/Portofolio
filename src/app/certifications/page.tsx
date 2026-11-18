import { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import CertGallery from "@/components/certificates/CertGallery";
import { CERTIFICATES } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Certifications & Credentials",
  description:
    "Daftar sertifikasi profesional dan pelatihan keamanan siber Muhammad Novel (CND, ECIH, CCNA, CyberOps).",
};

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <SectionTitle title="CERTIFICATIONS GALLERY" />
      <p className="mb-8 max-w-2xl text-sm text-cyber-muted sm:text-base">
        Koleksi sertifikasi profesional terakreditasi (EC-Council, Cisco,
        Oracle) serta sertifikat kelulusan pelatihan intensif di bidang Cyber
        Security, Cloud Computing, dan System Administration. Klik tombol{" "}
        <strong className="text-cyber-green">Lihat Sertifikat</strong> untuk
        pratinjau dokumen.
      </p>
      <CertGallery certificates={CERTIFICATES} enableFilter />
    </div>
  );
}
