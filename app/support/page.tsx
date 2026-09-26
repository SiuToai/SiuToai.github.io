import type { Metadata } from 'next';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import { siteContent } from '../site-content';

export const metadata: Metadata = {
  title: 'Support — SmallTap Studio',
  description: 'Help, frequently asked questions, and contact information for SmallTap Studio apps.',
};

export default function SupportPage() {
  return (
    <main>
      <SiteHeader compact />
      <section className="simple-hero section-shell">
        <p className="eyebrow">SmallTap support</p>
        <h1>How can we help?</h1>
        <p>Quick answers for Prank Studio, plus a direct way to reach the developer.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${siteContent.brand.supportEmail}`}>Email support</a>
          <a className="button button-ghost" href={siteContent.brand.telegramUrl} target="_blank" rel="noreferrer">Telegram {siteContent.brand.telegramHandle}</a>
        </div>
      </section>
      <section className="faq-section section-shell section-pad">
        <div className="section-heading"><p className="eyebrow">Frequently asked</p><h2>Prank Studio help</h2></div>
        <div className="faq-list">
          {siteContent.faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<span>+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="support-card">
          <div><p className="eyebrow">Still need help?</p><h3>Send us the details.</h3></div>
          <div>
            <p>Include your device model, Android version, and what you expected to happen. Please do not send passwords or other sensitive information.</p>
            <a href={`mailto:${siteContent.brand.supportEmail}`}>{siteContent.brand.supportEmail}</a><br />
            <a href={siteContent.brand.telegramUrl} target="_blank" rel="noreferrer">Telegram {siteContent.brand.telegramHandle}</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
