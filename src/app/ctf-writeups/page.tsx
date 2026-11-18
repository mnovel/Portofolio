import { Metadata } from "next";
import Link from "next/link";
import { Flag, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "CTF Writeups",
  description:
    "Dokumentasi penyelesaian tantangan Capture The Flag (Web Exploitation, Forensics, Network).",
};

export default function CtfWriteupsPage() {
  const writeups = getAllPosts("ctf-writeups");

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <SectionTitle title="CTF WRITEUPS" />
      <p className="mb-10 max-w-2xl text-sm text-cyber-muted sm:text-base">
        Dokumentasi metodologi enumerasi, eksploitasi, hingga privilege
        escalation dari berbagai platform CTF.
      </p>

      {writeups.length === 0 ? (
        <div className="rounded-xl border border-cyber-cyan/20 bg-cyber-card/50 p-8 text-center font-mono text-sm text-cyber-muted">
          Belum ada CTF writeup. Tambahkan file <code>.mdx</code> di{" "}
          <code>content/ctf-writeups/</code>.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {writeups.map((item) => (
            <Link
              key={item.slug}
              href={`/ctf-writeups/${item.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-white/10 bg-cyber-card/60 p-6 transition hover:border-cyber-green"
            >
              <div>
                <div className="mb-3 flex items-center justify-between font-mono text-xs">
                  <span className="inline-flex items-center gap-1.5 text-cyber-cyan">
                    <Flag className="h-3.5 w-3.5" /> {item.platform || "CTF"}
                  </span>
                  {item.difficulty && (
                    <span className="rounded bg-cyber-green/10 px-2.5 py-0.5 text-cyber-green">
                      {item.difficulty}
                    </span>
                  )}
                </div>
                <h2 className="mb-2 text-lg font-bold text-white group-hover:text-cyber-green">
                  {item.title}
                </h2>
                <p className="mb-4 text-xs leading-relaxed text-cyber-muted">
                  {item.summary}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-xs text-cyber-green">
                Lihat Writeup <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
