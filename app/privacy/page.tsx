import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import { siteContent } from '../site-content';

export const metadata: Metadata = {
  title: 'Privacy Policy — SmallTap Studio',
  description: 'Privacy information for the SmallTap Studio website and Android apps, including Prank Studio and Nightmare Prank.',
};

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader compact />
      <article className="legal-page section-shell">
        <header><p className="eyebrow">Legal</p><h1>Privacy Policy</h1><p>Last updated: {siteContent.brand.lastUpdated}</p></header>
        <section>
          <h2>1. Overview</h2>
          <p>This Privacy Policy explains how SmallTap Studio handles information in connection with this website and its Android applications, including Prank Studio and Nightmare Prank (“the Apps”). The Apps provide visual entertainment and do not require you to create an account.</p>
          <p>Nightmare Prank also has a <Link href="/apps/nightmare-prank/privacy">dedicated app-specific Privacy Policy</Link> that identifies package <strong>com.stdev.nightmareprank</strong> and its exact permissions, local settings, and advertising practices.</p>
        </section>
        <section>
          <h2>2. Information handled by the App</h2>
          <p>The Apps do not ask you to provide a name, email address, password, contact list, photos, or the content displayed beneath an overlay. Effect selections, timing settings, and locally unlocked effects are used on your device to provide the Apps’ features.</p>
          <p>The Apps contain advertising. Advertising services may automatically process device or other identifiers, IP address, general device information, diagnostic information, consent choices, and interactions with ads. This information may be used to deliver, measure, secure, personalize where permitted, and limit advertising.</p>
        </section>
        <section>
          <h2>3. Advertising partners</h2>
          <p>Prank Studio and Nightmare Prank use Google advertising services, including AdMob. Google may process information under its own privacy terms. You can learn how Google uses information from sites and apps that use its services at <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">Google’s partner technologies page</a>.</p>
          <p>Rewarded advertisements are optional. Choosing to watch one may unlock an eligible effect on the device.</p>
        </section>
        <section>
          <h2>4. Permissions</h2>
          <p><strong>Display over other apps:</strong> used only when you choose Overlay mode. It allows the selected visual effect to appear above other apps. The Apps do not use this permission to read or capture the content underneath.</p>
          <p><strong>Notifications and foreground service:</strong> may be used to keep an active overlay visible and controllable, show its status, and provide a way to stop it.</p>
          <p><strong>Vibration:</strong> used only when vibration feedback is enabled.</p>
        </section>
        <section>
          <h2>5. Data sharing and retention</h2>
          <p>SmallTap Studio does not sell personal information. Information processed by third-party advertising services is governed by those providers’ policies and retention practices. Locally stored preferences or unlock states remain on your device until you clear the App’s data or uninstall it.</p>
        </section>
        <section>
          <h2>6. Children’s privacy</h2>
          <p>The Apps are not directed to children under 13 or the applicable minimum digital-consent age. Nightmare Prank contains startling horror imagery and should not be used around children or people who are sensitive to sudden, flashing, or frightening content. SmallTap Studio does not knowingly ask children to submit personal information directly through the Apps.</p>
        </section>
        <section>
          <h2>7. This website</h2>
          <p>This website does not provide user accounts or payment forms. Standard hosting infrastructure may process basic request data such as IP address, browser type, and security logs to deliver and protect the site.</p>
        </section>
        <section>
          <h2>8. Your choices</h2>
          <p>You can disable overlay or notification permission in Android settings, turn off sound or vibration in an App, reset local App data, use available advertising privacy options, or uninstall an App. Android and Google settings may also provide controls for advertising personalization and identifiers.</p>
        </section>
        <section>
          <h2>9. Changes</h2>
          <p>We may update this policy when the App, the website, or applicable requirements change. The “Last updated” date above shows the latest revision.</p>
        </section>
        <section>
          <h2>10. Contact</h2>
          <p>Questions about this policy can be sent to <a href={`mailto:${siteContent.brand.supportEmail}`}>{siteContent.brand.supportEmail}</a>.</p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
