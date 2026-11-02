import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '../../../components/site-footer';
import { SiteHeader } from '../../../components/site-header';
import { nightmarePrankProduct, siteContent } from '../../../site-content';

export const metadata: Metadata = {
  title: 'Nightmare Prank Privacy Policy — SmallTap Studio',
  description:
    'Privacy Policy for the Nightmare Prank Android app, package com.stdev.nightmareprank.',
};

export default function NightmarePrankPrivacyPage() {
  return (
    <main className="nightmare-page">
      <SiteHeader compact />
      <article className="legal-page section-shell">
        <header>
          <p className="eyebrow">Nightmare Prank · Legal</p>
          <h1>Privacy Policy</h1>
          <p>Last updated: {siteContent.brand.lastUpdated}</p>
        </header>

        <section>
          <h2>1. App and developer</h2>
          <p>This Privacy Policy applies specifically to the Nightmare Prank Android application (“Nightmare Prank” or “the App”), package <strong>{nightmarePrankProduct.packageName}</strong>, published by {siteContent.brand.name} / {siteContent.developer.name}. The App provides user-controlled Halloween, screen simulation, and overlay prank effects. It does not require an account.</p>
        </section>

        <section>
          <h2>2. Information stored on your device</h2>
          <p>The App stores your selected effect, unlocked effect identifiers, duration, surprise delay, intensity, sound and vibration choices, overlay timing, and advertising frequency state locally on your device. This information is used to remember your settings, run the effect you selected, keep rewarded unlocks available, and avoid showing full-screen ads too frequently.</p>
          <p>SmallTap Studio does not operate a server that receives these local preferences. You can remove them by clearing the App’s storage or uninstalling the App.</p>
        </section>

        <section>
          <h2>3. Information the App does not request</h2>
          <p>Nightmare Prank does not request access to your camera, microphone, precise location, contacts, call logs, messages, photos, videos, or files. It does not read, record, or capture the content displayed beneath an overlay.</p>
        </section>

        <section>
          <h2>4. Advertising and consent</h2>
          <p>The App contains banner, native, interstitial, app-open, and optional rewarded advertising provided through Google AdMob. Google and advertising partners made available through Google may process information such as the App name, IP address, general location derived from IP, device and operating-system information, advertising or other device identifiers, language, ad interactions, diagnostic information, and consent choices.</p>
          <p>This information may be used to deliver and measure ads, limit ad frequency, prevent fraud and abuse, comply with legal obligations, and — where permitted by your choices and applicable law — personalize advertising. Nightmare Prank uses Google’s consent tools before requesting ads where required. A privacy-options control is provided in the App when Google reports that it is required.</p>
          <p>Rewarded ads are optional. If you choose to watch one and complete the reward requirement, the eligible effect is marked as unlocked locally on your device.</p>
          <p>Learn more about <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">how Google uses information from apps that use its services</a> and manage advertising preferences through <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Google Ad Settings</a>.</p>
        </section>

        <section>
          <h2>5. Android permissions</h2>
          <p><strong>Display over other apps:</strong> used only when you choose Overlay mode, so the selected transparent effect can appear above another app. The App does not use this permission to inspect or capture the app underneath.</p>
          <p><strong>Notifications and foreground service:</strong> used while an overlay is scheduled or active so Android can keep it running, disclose its status, and provide a persistent stop action.</p>
          <p><strong>Wake lock:</strong> used only as needed to keep a user-started, time-limited effect operating as expected.</p>
          <p><strong>Vibration:</strong> used for impact feedback when vibration is enabled.</p>
          <p><strong>Internet and network state:</strong> used to request advertising, consent information, and related ad services.</p>
        </section>

        <section>
          <h2>6. Sharing and sale of data</h2>
          <p>SmallTap Studio does not sell personal information. Device and advertising information may be shared with or processed by Google and advertising partners through the Google Mobile Ads SDK for the purposes described above. Their handling of information is governed by their own policies and the consent choices available to you.</p>
        </section>

        <section>
          <h2>7. Retention and deletion</h2>
          <p>Local App preferences and unlock states remain on your device until you clear the App’s storage or uninstall it. Advertising providers determine retention periods for information they process under their own policies. The App has no user account, so there is no account profile for SmallTap Studio to delete.</p>
        </section>

        <section>
          <h2>8. Security</h2>
          <p>The App relies on Android application storage for local preferences and uses Google’s mobile advertising services over network connections protected by the platform and service provider. No transmission or storage method is guaranteed to be completely secure, but we limit the App’s access to the permissions and information required for the features described in this policy.</p>
        </section>

        <section>
          <h2>9. Children and sensitive users</h2>
          <p>Nightmare Prank is not directed to children under 13 or the applicable minimum digital-consent age. The App contains startling horror imagery, sudden sound, vibration, and optional flashing or glitch effects. It should not be used around children or people with heart conditions, epilepsy, severe anxiety, or sensitivity to sudden or flashing content.</p>
        </section>

        <section>
          <h2>10. Your choices</h2>
          <p>You can deny or revoke Overlay and Notification permissions in Android settings, disable sound or vibration in the App, use available privacy options for advertising, clear local App storage, or uninstall the App. Some features may not work without the related permission.</p>
        </section>

        <section>
          <h2>11. Changes to this policy</h2>
          <p>We may update this policy when the App, advertising providers, legal requirements, or data practices change. The date at the top identifies the latest version.</p>
        </section>

        <section>
          <h2>12. Contact</h2>
          <p>Questions or privacy requests can be sent to <a href={`mailto:${siteContent.brand.supportEmail}`}>{siteContent.brand.supportEmail}</a>. You can also visit the <Link href="/support">SmallTap Studio support page</Link>.</p>
        </section>

        <section className="legal-app-link">
          <Link className="button button-ghost" href={nightmarePrankProduct.detailPath}>Back to Nightmare Prank</Link>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
