import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://siutoai.github.io',
  ),
  title: 'SmallTap Studio — Playful apps, thoughtfully made',
  description:
    'SmallTap Studio is an independent mobile app studio creating playful, focused, and thoughtfully crafted Android experiences.',
  openGraph: {
    title: 'SmallTap Studio — Small ideas. Delightful taps.',
    description: 'An independent mobile app studio creating playful, focused Android experiences.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'SmallTap Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmallTap Studio — Small ideas. Delightful taps.',
    description: 'An independent mobile app studio creating playful, focused Android experiences.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
