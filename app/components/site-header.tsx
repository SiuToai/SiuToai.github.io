import Link from 'next/link';
import { siteContent } from '../site-content';

type SiteHeaderProps = {
  compact?: boolean;
};

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  return (
    <header className={compact ? 'site-header compact' : 'site-header'}>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="SmallTap Studio home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>{siteContent.brand.name}</span>
        </Link>
        <div className="nav-links">
          <Link href="/#about">About</Link>
          <Link href="/#developer">Developer</Link>
          <Link href="/#products">Products</Link>
          <Link href="/support">Support</Link>
          <a className="nav-cta" href={`mailto:${siteContent.brand.supportEmail}`}>Get in touch</a>
        </div>
      </nav>
    </header>
  );
}
