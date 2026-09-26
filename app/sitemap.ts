import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://siutoai.github.io';
  return ['', '/apps/prank-studio', '/support', '/privacy', '/terms'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date('2026-09-25'),
    changeFrequency: path === '' ? 'monthly' as const : 'yearly' as const,
    priority: path === '' ? 1 : 0.7,
  }));
}
