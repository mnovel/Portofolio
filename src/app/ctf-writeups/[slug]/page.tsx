import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Flag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { PROFILE } from "@/data/portfolio";

export async function generateStaticParams() {
  return getAllPosts("ctf-writeups").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug("ctf-writeups", slug);
  if (!post) return { title: "Writeup Tidak Ditemukan" };

  const url = `${PROFILE.url}/ctf-writeups/${slug}`;

  return {
    title: `${post.meta.title} | CTF Writeup`,
    description: post.meta.summary,
    keywords: [...post.meta.tags, post.meta.platform || "CTF", "Writeup"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: `${post.meta.title} | CTF Writeup`,
      description: post.meta.summary,
      url,
      publishedTime: post.meta.date,
      authors: [PROFILE.name],
      tags: post.meta.tags,
      images: [
        {
          url: `${PROFILE.url}/icon-512.png`,
          width: 512,
          height: 512,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.meta.title} | CTF Writeup`,
      description: post.meta.summary,
      images: [`${PROFILE.url}/icon-512.png`],
    },
  };
}

export default async function CtfDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug("ctf-writeups", slug);

  if (!post) notFound();

  const writeupJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.meta.title,
    description: post.meta.summary,
    datePublished: post.meta.date,
    dateModified: post.meta.date,
    author: {
      "@type": "Person",
      name: PROFILE.name,
      url: PROFILE.url,
    },
    publisher: {
      "@type": "Person",
      name: PROFILE.name,
      url: PROFILE.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${PROFILE.url}/ctf-writeups/${slug}`,
    },
    keywords: post.meta.tags.join(", "),
  };

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(writeupJsonLd) }}
      />
      <Link
        href="/ctf-writeups"
        className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-cyber-green hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Kembali ke CTF Writeups
      </Link>

      <header className="mb-10 border-b border-white/10 pb-6">
        <div className="mb-3 flex items-center gap-3 font-mono text-xs text-cyber-cyan">
          <span className="inline-flex items-center gap-1">
            <Flag className="h-3.5 w-3.5" /> {post.meta.platform || "CTF"}
          </span>
          <span>·</span>
          <span>{post.meta.date}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          {post.meta.title}
        </h1>
      </header>

      <div className="space-y-5 text-sm leading-relaxed text-cyber-text sm:text-base [&_code]:rounded [&_code]:bg-cyber-card [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-cyber-green [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-cyber-cyan [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-cyber-cyan/20 [&_pre]:bg-cyber-card [&_pre]:p-4">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
