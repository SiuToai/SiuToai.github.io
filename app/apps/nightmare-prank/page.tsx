import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { nightmarePrankProduct } from '../../site-content';

export const metadata: Metadata = {
  title: 'Nightmare Prank — SmallTap Studio',
  description: nightmarePrankProduct.shortDescription,
  openGraph: {
    title: 'Nightmare Prank — SmallTap Studio',
    description: nightmarePrankProduct.shortDescription,
    images: [
      {
        url: nightmarePrankProduct.screenshots[0].src,
        width: 591,
        height: 1280,
        alt: nightmarePrankProduct.screenshots[0].alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nightmare Prank — SmallTap Studio',
    description: nightmarePrankProduct.shortDescription,
    images: [nightmarePrankProduct.screenshots[0].src],
  },
};

export default function NightmarePrankPage() {
  return (
    <main className="nightmare-page">
      <SiteHeader compact />
      <section className="app-hero section-shell">
        <div className="app-hero-copy">
          <Link className="back-link" href="/">← Back to SmallTap Studio</Link>
          <div className="product-icon large nightmare" aria-hidden="true"><span>NP</span><i /><i /><i /></div>
          <p className="eyebrow">{nightmarePrankProduct.category} · {nightmarePrankProduct.platform}</p>
          <h1>{nightmarePrankProduct.name}</h1>
          <p className="app-tagline">{nightmarePrankProduct.tagline}</p>
          <p className="app-summary">{nightmarePrankProduct.longDescription}</p>
          <div className="hero-actions">
            <span className="button button-primary button-status">Google Play release in preparation</span>
            <Link className="button button-ghost" href={nightmarePrankProduct.privacyPath}>Privacy Policy</Link>
          </div>
          <p className="package-name">Package: {nightmarePrankProduct.packageName}</p>
        </div>
        <div className="app-hero-device">
          <div className="app-glow" />
          <div className="phone detail-phone"><Image src={nightmarePrankProduct.screenshots[0].src} alt={nightmarePrankProduct.screenshots[0].alt} fill priority sizes="320px" /></div>
        </div>
      </section>

      <section className="app-facts">
        <div className="section-shell fact-row">
          <div><strong>{nightmarePrankProduct.effectCount}</strong><span>prank effects</span></div>
          <div><strong>3</strong><span>effect collections</span></div>
          <div><strong>2</strong><span>display modes</span></div>
          <div><strong>User</strong><span>always in control</span></div>
        </div>
      </section>

      <section className="section-shell section-pad feature-section">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Inside the scare</p><h2>Set the scene.<br />Choose the moment.</h2></div>
          <p>Pick a horror face, screen simulation, or moving crawler. Then tune exactly when it appears, how long it stays, and how intense the surprise should feel.</p>
        </div>
        <div className="feature-list">
          {nightmarePrankProduct.features.map((feature, index) => (
            <div key={feature}><span>{String(index + 1).padStart(2, '0')}</span><p>{feature}</p></div>
          ))}
        </div>
      </section>

      <section className="gallery-section section-pad">
        <div className="section-shell">
          <div className="section-heading"><p className="eyebrow">App screenshots</p><h2>Horror, screen chaos,<br />and moving crawlers.</h2></div>
          <div className="full-gallery nightmare-gallery">
            {nightmarePrankProduct.screenshots.map((screenshot) => (
              <figure key={screenshot.src}><Image src={screenshot.src} alt={screenshot.alt} fill sizes="(max-width: 700px) 80vw, 270px" /></figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad transparency-section">
        <div className="transparency-panel">
          <div><p className="eyebrow">Safety and transparency</p><h2>A strong scare.<br />Clear control.</h2></div>
          <div className="safety-list">
            {nightmarePrankProduct.safetyNotes.map((note) => <p key={note}><span>✓</span>{note}</p>)}
          </div>
        </div>
      </section>

      <section className="privacy-callout section-shell">
        <div>
          <p className="eyebrow">Your privacy</p>
          <h2>Know what the app uses — and what it does not.</h2>
          <p>Nightmare Prank has no account system and does not request camera, microphone, precise location, contacts, or photo access. Read the app-specific policy for details about local settings, permissions, and advertising.</p>
        </div>
        <Link className="button button-ghost" href={nightmarePrankProduct.privacyPath}>Read Privacy Policy</Link>
      </section>

      <section className="download-cta section-shell">
        <p className="eyebrow">Coming to Google Play</p>
        <h2>Build the scare.<br />Keep the control.</h2>
        <Link className="button button-primary" href="/support">Contact support</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
