import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Terminal, Calendar } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  return getAllPosts("resources").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug("resources", slug);
  if (!post) return { title: "Resource Tidak Ditemukan" };

  return {
    title: post.meta.title,
    description: post.meta.summary,
    keywords: post.meta.tags,
  };
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug("resources", slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <Link
        href="/resources"
        className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-cyber-cyan hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Kembali ke Resources
      </Link>

      <header className="mb-10 border-b border-white/10 pb-6">
        <div className="mb-3 flex items-center gap-3 font-mono text-xs text-cyber-green">
          <span className="inline-flex items-center gap-1.5 text-cyber-cyan">
            <Terminal className="h-3.5 w-3.5" />{" "}
            {post.meta.category || "Cheat Sheet"}
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> {post.meta.date}
          </span>
        </div>

        <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
          {post.meta.title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {post.meta.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-cyber-cyan/10 px-2.5 py-1 font-mono text-xs text-cyber-cyan"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-5 text-sm leading-relaxed text-cyber-text sm:text-base [&_code]:rounded [&_code]:bg-cyber-card [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-cyber-green [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-cyber-cyan [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-cyber-cyan/20 [&_pre]:bg-cyber-card [&_pre]:p-4 [&_ul]:list-disc [&_ul]:pl-5">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
