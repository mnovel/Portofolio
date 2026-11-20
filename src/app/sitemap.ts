import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://novelwardah.com';
  const buildDate = new Date('2026-11-20T00:00:00.000Z');

  const staticRoutes = [
    '',
    '/about',
    '/certifications',
    '/projects',
    '/blog',
    '/ctf-writeups',
    '/resources',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: buildDate,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogRoutes = getAllPosts('blog').map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const ctfRoutes = getAllPosts('ctf-writeups').map((post) => ({
    url: `${baseUrl}/ctf-writeups/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const resourceRoutes = getAllPosts('resources').map((post) => ({
    url: `${baseUrl}/resources/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...ctfRoutes, ...resourceRoutes];
}
