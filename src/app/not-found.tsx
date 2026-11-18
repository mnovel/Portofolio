import Link from "next/link";
import { ShieldAlert, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[75vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 rounded-full border border-[#ff3366]/30 bg-[#ff3366]/10 p-5 text-[#ff3366]">
        <ShieldAlert className="h-12 w-12" />
      </div>

      <p className="mb-2 font-mono text-sm tracking-widest text-[#ff3366]">
        // ERROR 404 · ACCESS DENIED OR RESOURCE NOT FOUND
      </p>

      <h1 className="mb-4 text-5xl font-extrabold text-white sm:text-7xl">
        404
      </h1>

      <p className="mb-8 text-sm leading-relaxed text-cyber-muted sm:text-base">
        Endpoint atau halaman yang Anda tuju tidak ditemukan di server ini.
        Insiden navigasi telah dicatat.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-md bg-cyber-cyan px-6 py-3 text-sm font-semibold text-cyber-dark shadow-[0_0_20px_rgba(0,240,255,0.25)] transition hover:-translate-y-1"
      >
        <Home className="h-4 w-4" /> Kembali ke Home
      </Link>
    </div>
  );
}
