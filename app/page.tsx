import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';
import { primaryProduct, siteContent } from './site-content';

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{siteContent.brand.descriptor}</p>
          <h1>Small ideas.<br /><span>Delightful taps.</span></h1>
          <p className="hero-lede">{siteContent.brand.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">Explore our apps</a>
            <a className="button button-ghost" href="#about">Meet the studio</a>
          </div>
          <div className="hero-note"><span className="status-dot" />Thoughtfully built for Android</div>
        </div>

        <div className="hero-visual hero-nightmare" aria-label={`${primaryProduct.name} app preview`}>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="phone phone-back">
            <Image src={primaryProduct.screenshots[1].src} alt={primaryProduct.screenshots[1].alt} fill sizes="260px" priority />
          </div>
          <div className="phone phone-front">
            <Image src={primaryProduct.screenshots[0].src} alt={primaryProduct.screenshots[0].alt} fill sizes="300px" priority />
          </div>
          <div className="floating-chip chip-effects"><strong>{primaryProduct.effectCount}</strong><span>visual effects</span></div>
          <div className="floating-chip chip-safe"><span className="tiny-dot" />User-controlled scares</div>
        </div>
      </section>

      <section className="intro-strip" aria-label="Studio values">
        <p>PLAYFUL BY DESIGN</p><p>SMALL &amp; FOCUSED</p><p>MADE WITH CARE</p>
      </section>

      <section className="about section-shell section-pad" id="about">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">About the studio</p><h2>Independent in size.<br />Intentional in every detail.</h2></div>
          <p>{siteContent.brand.about}</p>
        </div>
        <div className="principles-grid">
          {siteContent.principles.map((principle) => (
            <article className="principle-card" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="developer section-shell" id="developer">
        <div className="developer-card">
          <div className="developer-monogram" aria-hidden="true">ST</div>
          <div className="developer-copy">
            <p className="eyebrow">Behind the studio</p>
            <h2>{siteContent.developer.name}</h2>
            <p className="developer-role">{siteContent.developer.role}</p>
            <p>{siteContent.developer.bio}</p>
            <div className="developer-focus">
              {siteContent.developer.focus.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="developer-links">
            <a className="button button-primary" href={`mailto:${siteContent.brand.supportEmail}`}>Email me</a>
            <a className="button button-ghost" href={siteContent.brand.telegramUrl} target="_blank" rel="noreferrer">Telegram {siteContent.brand.telegramHandle}</a>
          </div>
        </div>
      </section>

      <section className="products section-pad" id="products">
        <div className="section-shell">
          <div className="section-heading product-heading">
            <div><p className="eyebrow">Our products</p><h2>Made to earn<br />a place on your screen.</h2></div>
            <p>From sudden Halloween scares to realistic screen mishaps, every effect is designed to be adjustable, transparent, and easy to stop.</p>
          </div>

          <div className="products-stack">
            {siteContent.products.map((product) => (
              <article className={`featured-product product-${product.slug}`} key={product.slug}>
                <div className="product-copy">
                  <div className="product-labels"><span>{product.badge}</span><span>{product.platform}</span></div>
                  <div className={`product-icon ${product.slug === 'nightmare-prank' ? 'nightmare' : ''}`} aria-hidden="true"><span>{product.initials}</span><i /><i /><i /></div>
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                  <p className="product-description">{product.longDescription}</p>
                  <div className="product-actions">
                    <a className="button button-primary" href={product.playStoreUrl} target="_blank" rel="noreferrer">Get it on Google Play</a>
                    <Link className="text-link" href={product.detailPath}>Explore the app <span>→</span></Link>
                  </div>
                </div>
                <div className="screenshot-rack" aria-label={`${product.name} screenshots`}>
                  {product.screenshots.slice(0, 3).map((screenshot, index) => (
                    <div className={`screenshot-card shot-${index + 1}`} key={screenshot.src}>
                      <Image src={screenshot.src} alt={screenshot.alt} fill sizes="(max-width: 700px) 55vw, 230px" />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="coming-soon">
            <div><span className="pulse-ring" /><p className="eyebrow">What’s next</p></div>
            <h3>Nightmare Prank is ready for its Google Play release.</h3>
            <p>Its store link, public app information, support details, and dedicated privacy policy are available now.</p>
          </div>
        </div>
      </section>

      <section className="contact section-shell section-pad">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Questions or feedback?</p>
            <h2>Let’s make the next tap better.</h2>
            <p>Found a bug, have a suggestion, or need help with one of our apps? We would like to hear from you.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${siteContent.brand.supportEmail}`}>Email {siteContent.developer.name}</a>
            <a className="button button-ghost" href={siteContent.brand.telegramUrl} target="_blank" rel="noreferrer">Telegram {siteContent.brand.telegramHandle}</a>
            <Link className="text-link" href="/support">Visit support <span>→</span></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
