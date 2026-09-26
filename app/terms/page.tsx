import type { Metadata } from 'next';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import { siteContent } from '../site-content';

export const metadata: Metadata = {
  title: 'Terms of Use — SmallTap Studio',
  description: 'Terms for using the SmallTap Studio website and Prank Studio app.',
};

export default function TermsPage() {
  return (
    <main>
      <SiteHeader compact />
      <article className="legal-page section-shell">
        <header><p className="eyebrow">Legal</p><h1>Terms of Use</h1><p>Last updated: {siteContent.brand.lastUpdated}</p></header>
        <section><h2>1. Acceptance</h2><p>By downloading or using Prank Studio, or by using this website, you agree to these Terms. If you do not agree, do not use the App or website.</p></section>
        <section><h2>2. Entertainment purpose</h2><p>Prank Studio provides visual simulations for entertainment. Effects do not represent actual screen damage and must not be used to misrepresent a device’s condition in a sale, repair, insurance claim, or other transaction.</p></section>
        <section><h2>3. Responsible use</h2><p>Use the App safely, lawfully, and with consideration for others. Do not use effects in situations where surprise, distraction, or device obstruction could create risk, including while driving, operating equipment, or responding to an emergency.</p></section>
        <section><h2>4. Permissions and control</h2><p>Overlay features require Android permission and are activated only by the user. You are responsible for granting, managing, and revoking device permissions. Clear stop controls and timers are provided inside the App and through its notification where applicable.</p></section>
        <section><h2>5. Advertising</h2><p>The App contains advertising. Optional rewarded ads may unlock eligible effects. Availability of advertising, rewards, or specific effects can vary by device, region, and App version.</p></section>
        <section><h2>6. Intellectual property</h2><p>The App, website, original design, text, and branding are owned by SmallTap Studio or used with permission. You may not copy, resell, reverse engineer, or redistribute them except where applicable law expressly permits.</p></section>
        <section><h2>7. Availability and warranties</h2><p>The App and website are provided “as is” and “as available.” We work to keep them useful and reliable but do not guarantee uninterrupted operation, compatibility with every device, or permanent availability of any feature.</p></section>
        <section><h2>8. Limitation of liability</h2><p>To the extent permitted by law, SmallTap Studio is not responsible for indirect, incidental, or consequential loss arising from use or inability to use the App or website. Nothing in these Terms excludes rights that cannot legally be excluded.</p></section>
        <section><h2>9. Changes</h2><p>These Terms may be updated as the App or applicable requirements change. Continued use after an update means you accept the revised Terms.</p></section>
        <section><h2>10. Contact</h2><p>Questions about these Terms can be sent to <a href={`mailto:${siteContent.brand.supportEmail}`}>{siteContent.brand.supportEmail}</a>.</p></section>
      </article>
      <SiteFooter />
    </main>
  );
}
