"use client";

import { useState, useEffect } from "react";
import {
  Award,
  Network,
  Shield,
  Database,
  Code2,
  Cloud,
  Search,
  Server,
  Terminal,
  Eye,
  X,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { CertificateItem } from "@/types";

const ICON_MAP = {
  award: Award,
  network: Network,
  shield: Shield,
  database: Database,
  code: Code2,
  cloud: Cloud,
  search: Search,
  server: Server,
  terminal: Terminal,
};

interface CertGalleryProps {
  certificates: CertificateItem[];
  enableFilter?: boolean;
}

export default function CertGallery({
  certificates,
  enableFilter = false,
}: CertGalleryProps) {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(
    null,
  );
  const [filter, setFilter] = useState<"all" | "professional" | "training">(
    "all",
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert]);

  const profCerts = certificates.filter((c) => c.category === "professional");
  const trainCerts = certificates.filter((c) => c.category === "training");

  const renderCard = (cert: CertificateItem) => {
    const IconComponent = ICON_MAP[cert.iconType] || Award;
    return (
      <div
        key={cert.id}
        className="flex flex-col items-center justify-between rounded-xl border border-cyber-cyan/20 bg-cyber-card/80 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-cyber-cyan hover:shadow-[0_5px_20px_rgba(0,240,255,0.15)]"
      >
        <div className="flex flex-col items-center">
          <IconComponent className="mb-4 h-10 w-10 text-cyber-cyan" />
          <h4 className="mb-2 text-base font-bold text-[#e6f1ff]">
            {cert.title}
          </h4>
          <p className="mb-1 text-xs text-cyber-muted">
            {cert.issuer}
            {cert.issuedDate ? ` · ${cert.issuedDate}` : ""}
          </p>
          {cert.credentialId && (
            <span className="mt-1 rounded bg-cyber-green/10 px-2.5 py-0.5 font-mono text-[11px] text-cyber-green">
              ID: {cert.credentialId}
            </span>
          )}
        </div>

        <button
          onClick={() => setSelectedCert(cert)}
          className="mt-5 inline-flex items-center gap-2 rounded-md border border-cyber-green px-4 py-2 font-mono text-xs text-cyber-green transition hover:bg-cyber-green hover:text-cyber-dark hover:shadow-[0_0_12px_rgba(0,255,153,0.4)]"
        >
          <Eye className="h-3.5 w-3.5" /> Lihat Sertifikat
        </button>
      </div>
    );
  };

  return (
    <div>
      {enableFilter && (
        <div className="mb-8 flex flex-wrap gap-3">
          {(["all", "professional", "training"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`rounded-full border px-5 py-1.5 font-mono text-xs capitalize transition ${
                filter === tab
                  ? "border-cyber-cyan bg-cyber-cyan font-semibold text-cyber-dark"
                  : "border-white/10 bg-white/[0.03] text-cyber-muted hover:border-cyber-cyan/50 hover:text-white"
              }`}
            >
              {tab === "all"
                ? `Semua (${certificates.length})`
                : tab === "professional"
                  ? `Professional (${profCerts.length})`
                  : `Training & Course (${trainCerts.length})`}
            </button>
          ))}
        </div>
      )}

      {(filter === "all" || filter === "professional") &&
        profCerts.length > 0 && (
          <div className="mb-12">
            <h3 className="mb-6 inline-flex items-center gap-2 border-b border-cyber-cyan/20 pb-2 text-xl font-semibold text-cyber-cyan">
              <Award className="h-5 w-5" /> Professional Certifications
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {profCerts.map(renderCard)}
            </div>
          </div>
        )}

      {(filter === "all" || filter === "training") && trainCerts.length > 0 && (
        <div>
          <h3 className="mb-6 inline-flex items-center gap-2 border-b border-cyber-cyan/20 pb-2 text-xl font-semibold text-cyber-cyan">
            <BookOpen className="h-5 w-5" /> Training & Course Certificates
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trainCerts.map(renderCard)}
          </div>
        </div>
      )}

      {/* Modal Lightbox */}
      {selectedCert && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedCert(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <div className="relative flex h-[88vh] w-full max-w-4xl flex-col rounded-xl border border-cyber-cyan bg-cyber-dark shadow-[0_0_30px_rgba(0,240,255,0.2)]">
            <div className="flex items-center justify-between border-b border-cyber-cyan/20 px-5 py-4">
              <div className="pr-4">
                <h3 className="truncate text-base font-semibold text-cyber-cyan sm:text-lg">
                  {selectedCert.title}
                </h3>
                {selectedCert.credentialId && (
                  <p className="font-mono text-xs text-cyber-muted">
                    Credential ID: {selectedCert.credentialId}
                    {selectedCert.validUntil
                      ? ` · Valid until ${selectedCert.validUntil}`
                      : ""}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded border border-cyber-cyan/40 bg-cyber-cyan/10 px-3 py-1.5 font-mono text-xs text-cyber-cyan transition hover:bg-cyber-cyan hover:text-cyber-dark"
                  >
                    Verifikasi <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close Modal"
                  className="rounded p-1 text-[#ff3366] transition hover:bg-white/10 hover:text-red-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden p-3">
              {selectedCert.type === "pdf" ? (
                <iframe
                  src={selectedCert.file}
                  title={selectedCert.title}
                  className="h-full w-full rounded border-0"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedCert.file}
                  alt={selectedCert.title}
                  className="h-full w-full rounded object-contain"
                />
              )}

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-cyber-green bg-cyber-dark/95 px-5 py-2 text-center shadow-lg">
                <a
                  href={selectedCert.file}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="text-xs text-cyber-green hover:underline sm:text-sm"
                >
                  Jika pratinjau gagal dimuat, klik di sini untuk mengunduh
                  file.
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
