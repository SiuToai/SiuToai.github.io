import Link from 'next/link';
import { siteContent } from '../site-content';

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>{siteContent.brand.name}</span>
        </Link>
        <p>{siteContent.brand.tagline}</p>
        <div className="footer-links">
          <Link href="/#developer">Developer</Link>
          <Link href="/apps/prank-studio">Prank Studio</Link>
          <Link href="/support">Support</Link>
          <a href={siteContent.brand.telegramUrl} target="_blank" rel="noreferrer">Telegram</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} SmallTap Studio</span>
        <span>Built by {siteContent.developer.name} · Independent Android developer</span>
      </div>
    </footer>
  );
}
