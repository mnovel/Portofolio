"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, ArrowRight, Search, Tag } from "lucide-react";
import { PostMeta } from "@/lib/mdx";

export default function ResourceList({ posts }: { posts: PostMeta[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Ambil daftar kategori unik secara otomatis dari frontmatter file .mdx
  const dynamicCategories = Array.from(
    new Set(
      posts.map((p) => p.category).filter((c): c is string => Boolean(c)),
    ),
  );
  const categories = ["All", ...dynamicCategories];

  const filteredPosts = posts.filter((post) => {
    const matchCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchQuery =
      post.title.toLowerCase().includes(query) ||
      post.summary.toLowerCase().includes(query) ||
      post.tags.some((t) => t.toLowerCase().includes(query));
    return matchCategory && matchQuery;
  });

  return (
    <div>
      {/* Filter & Search Bar */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${
                selectedCategory === cat
                  ? "border-cyber-cyan bg-cyber-cyan font-semibold text-cyber-dark"
                  : "border-white/10 bg-white/[0.03] text-cyber-muted hover:border-cyber-cyan/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-cyber-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari cheat sheet / tag..."
            className="w-full rounded-lg border border-white/10 bg-cyber-card/80 py-2 pr-4 pl-10 font-mono text-xs text-white placeholder-cyber-muted focus:border-cyber-cyan focus:outline-none"
          />
        </div>
      </div>

      {/* Grid Kartu Resources */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-xl border border-cyber-cyan/20 bg-cyber-card/50 p-8 text-center font-mono text-sm text-cyber-muted">
          Belum ada resource yang cocok. Tambahkan file <code>.mdx</code> di{" "}
          <code>content/resources/</code>.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-white/10 bg-cyber-card/70 p-6 transition hover:-translate-y-1 hover:border-cyber-cyan"
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-2 font-mono text-xs">
                  <span className="inline-flex items-center gap-1.5 text-cyber-cyan">
                    <Terminal className="h-3.5 w-3.5" />
                    {post.category || "Cheat Sheet"}
                  </span>
                  <span className="text-cyber-muted">{post.date}</span>
                </div>

                <h2 className="mb-2 text-lg font-bold text-white group-hover:text-cyber-cyan">
                  {post.title}
                </h2>

                <p className="mb-4 text-xs leading-relaxed text-cyber-muted sm:text-sm">
                  {post.summary}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded bg-white/5 px-2 py-0.5 font-mono text-[11px] text-cyber-green"
                    >
                      <Tag className="h-2.5 w-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-cyber-cyan">
                  Buka <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
