import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { primaryProduct } from '../../site-content';

export const metadata: Metadata = {
  title: 'Prank Studio — SmallTap Studio',
  description: primaryProduct.shortDescription,
  openGraph: {
    title: 'Prank Studio — SmallTap Studio',
    description: primaryProduct.shortDescription,
    images: [
      {
        url: primaryProduct.screenshots[0].src,
        width: 591,
        height: 1280,
        alt: primaryProduct.screenshots[0].alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prank Studio — SmallTap Studio',
    description: primaryProduct.shortDescription,
    images: [primaryProduct.screenshots[0].src],
  },
};

export default function PrankStudioPage() {
  return (
    <main>
      <SiteHeader compact />
      <section className="app-hero section-shell">
        <div className="app-hero-copy">
          <Link className="back-link" href="/">← Back to SmallTap Studio</Link>
          <div className="product-icon large" aria-hidden="true"><span>PS</span><i /><i /><i /></div>
          <p className="eyebrow">{primaryProduct.category} · {primaryProduct.platform}</p>
          <h1>{primaryProduct.name}</h1>
          <p className="app-tagline">{primaryProduct.tagline}</p>
          <p className="app-summary">{primaryProduct.longDescription}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={primaryProduct.playStoreUrl} target="_blank" rel="noreferrer">View on Google Play</a>
            <Link className="button button-ghost" href="/support">Get support</Link>
          </div>
          <p className="package-name">Package: {primaryProduct.packageName}</p>
        </div>
        <div className="app-hero-device">
          <div className="app-glow" />
          <div className="phone detail-phone"><Image src={primaryProduct.screenshots[0].src} alt={primaryProduct.screenshots[0].alt} fill priority sizes="320px" /></div>
        </div>
      </section>

      <section className="app-facts">
        <div className="section-shell fact-row">
          <div><strong>{primaryProduct.effectCount}</strong><span>visual effects</span></div>
          <div><strong>2</strong><span>display modes</span></div>
          <div><strong>5s–5m</strong><span>flexible timing</span></div>
          <div><strong>User</strong><span>always in control</span></div>
        </div>
      </section>

      <section className="section-shell section-pad feature-section">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">What it can do</p><h2>Set the scene.<br />Choose the moment.</h2></div>
          <p>Browse a visual library, adjust the timing, and choose how the simulation appears. Everything stays easy to start and easy to stop.</p>
        </div>
        <div className="feature-list">
          {primaryProduct.features.map((feature, index) => (
            <div key={feature}><span>{String(index + 1).padStart(2, '0')}</span><p>{feature}</p></div>
          ))}
        </div>
      </section>

      <section className="gallery-section section-pad">
        <div className="section-shell">
          <div className="section-heading"><p className="eyebrow">Inside the app</p><h2>Dark, direct, and built around the effect.</h2></div>
          <div className="full-gallery">
            {primaryProduct.screenshots.map((screenshot) => (
              <figure key={screenshot.src}><Image src={screenshot.src} alt={screenshot.alt} fill sizes="(max-width: 700px) 80vw, 270px" /></figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad transparency-section">
        <div className="transparency-panel">
          <div><p className="eyebrow">Permission transparency</p><h2>Fun should never be confusing.</h2></div>
          <div className="safety-list">
            {primaryProduct.safetyNotes.map((note) => <p key={note}><span>✓</span>{note}</p>)}
          </div>
        </div>
      </section>

      <section className="download-cta section-shell">
        <p className="eyebrow">Ready to try it?</p>
        <h2>Choose an effect.<br />Plan the surprise.</h2>
        <a className="button button-primary" href={primaryProduct.playStoreUrl} target="_blank" rel="noreferrer">Open Google Play</a>
      </section>
      <SiteFooter />
    </main>
  );
}
