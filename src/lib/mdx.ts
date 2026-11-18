import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_ROOT = path.join(process.cwd(), 'content');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  category?: string; // Untuk Resources (misal: Pentest & Recon, Blue Team & IR)
  difficulty?: 'Easy' | 'Medium' | 'Hard' | 'Insane'; // Khusus CTF Writeups
  platform?: string; // Misal: HackTheBox, TryHackMe, PicoCTF
}

export function getAllPosts(category: 'blog' | 'ctf-writeups' | 'resources'): PostMeta[] {
  const dir = path.join(CONTENT_ROOT, category);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    const fullPath = path.join(dir, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || '2026-11-18',
      summary: data.summary || '',
      tags: data.tags || [],
      category: data.category,
      difficulty: data.difficulty,
      platform: data.platform,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(category: 'blog' | 'ctf-writeups' | 'resources', slug: string) {
  const mdxPath = path.join(CONTENT_ROOT, category, `${slug}.mdx`);
  const mdPath = path.join(CONTENT_ROOT, category, `${slug}.md`);
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

  if (!fullPath) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || '2026-11-18',
      summary: data.summary || '',
      tags: data.tags || [],
      category: data.category,
      difficulty: data.difficulty,
      platform: data.platform,
    } as PostMeta,
    content,
  };
}