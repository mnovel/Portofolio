import { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Security Blog",
  description:
    "Artikel teknis seputar Cyber Security, Hardening Linux, SOC, dan Cloud Infrastructure.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts("blog");

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <SectionTitle title="SECURITY BLOG" as="h1" />
      <p className="mb-10 max-w-2xl text-sm text-cyber-muted sm:text-base">
        Catatan teknis seputar keamanan infrastruktur, blue team defense,
        hardening server, dan pengalaman operasional keamanan siber.
      </p>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-cyber-cyan/20 bg-cyber-card/50 p-8 text-center font-mono text-sm text-cyber-muted">
          Belum ada artikel yang dipublikasikan. Tambahkan file{" "}
          <code>.mdx</code> di <code>content/blog/</code>.
        </div>
      ) : (
        <div className="space-y-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-white/10 bg-cyber-card/60 p-6 transition hover:border-cyber-cyan"
            >
              <div className="mb-2 flex items-center gap-2 font-mono text-xs text-cyber-green">
                <Calendar className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </div>
              <h2 className="mb-2 text-xl font-bold text-white group-hover:text-cyber-cyan">
                {post.title}
              </h2>
              <p className="mb-4 text-sm text-cyber-muted">{post.summary}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-cyber-cyan"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-cyber-cyan">
                  Baca <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
