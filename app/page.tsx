import { JoinAiaButton } from "./JoinAiaButton";

const platformCompanies = [
  {
    eyebrow: "AIA Talent Twins",
    title: "Create the Asset",
    mark: "T",
    className: "twins",
    description:
      "Create authorized digital versions of real people for film, advertising, gaming, music, sports, education, and more.",
    href: "https://ronvigil-design.github.io/aia-talent-twins/",
    cta: "Visit Talent Twins",
  },
  {
    eyebrow: "AIA Talent Vault",
    title: "Protect the Asset",
    mark: "V",
    className: "vault",
    description:
      "Protect digital assets, consent, permissions, and identity records with secure, talent-first controls.",
    href: "https://ronvigil-design.github.io/aia-talent-vault/",
    cta: "Visit Talent Vault",
  },
  {
    eyebrow: "AIA Talent Exchange",
    title: "Monetize the Asset",
    mark: "X",
    className: "exchange",
    description:
      "Connect approved digital talent with qualified global opportunities and clear commercial terms.",
    href: "https://aia-talent-exchange.turner-globa-6193.chatgpt.site/",
    cta: "Visit Talent Exchange",
  },
];

const reasons = [
  {
    number: "01",
    title: "Be represented before replicated",
    text: "Establish the official version of your identity before unauthorized copies define it for you.",
  },
  {
    number: "02",
    title: "Stay in control",
    text: "Decide who may use your identity, where it appears, and under what conditions.",
  },
  {
    number: "03",
    title: "Create new income",
    text: "Build value through approved licensing, royalties, appearances, and partnerships.",
  },
  {
    number: "04",
    title: "Reach global audiences",
    text: "Participate in projects across countries, languages, and media platforms.",
  },
  {
    number: "05",
    title: "Preserve your legacy",
    text: "Protect your career, story, knowledge, and contributions for future generations.",
  },
];

const opportunities = [
  ["Entertainment", "Film, television, streaming, dubbing, and digital performance."],
  ["Advertising", "Campaigns, social media, product launches, and brand ambassadors."],
  ["Gaming", "Playable characters, voices, virtual hosts, and interactive stories."],
  ["Music", "Virtual concerts, music videos, holograms, and fan experiences."],
  ["Sports", "Appearances, training, commentary, endorsements, and fan engagement."],
  ["Education", "Expert instruction, professional training, and interactive learning."],
  ["Business Media", "Presenters, demonstrations, employee training, and events."],
  ["Legacy", "Documentaries, museums, archives, and approved historical experiences."],
];

const navItems = [
  ["Home", "#top"],
  ["Talent Twins", "https://ronvigil-design.github.io/aia-talent-twins/"],
  ["Talent Vault", "https://ronvigil-design.github.io/aia-talent-vault/"],
  ["Talent Exchange", "https://aia-talent-exchange.turner-globa-6193.chatgpt.site/"],
  ["For Talent", "#talent"],
  ["For Agencies", "#agencies"],
  ["Legacy", "#legacy"],
  ["About AIA", "#about"],
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="AIA Talent home">
      <span className="brand-main">AIA</span>
      <span className="brand-sub">Talent</span>
    </a>
  );
}

function HeaderBrand() {
  return (
    <a className="header-wordmark" href="#top" aria-label="AIA Talent home">
      <span>AiA</span>
      <strong>Talent</strong>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <HeaderBrand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={index === 0 ? "active" : ""}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <JoinAiaButton
          className="button button-gold nav-cta"
          source="Header navigation"
        >
          Join AIA
        </JoinAiaButton>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                {label}
              </a>
            ))}
            <JoinAiaButton
              className="mobile-join-link"
              source="Mobile navigation"
            >
              Join AIA
            </JoinAiaButton>
          </nav>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content page-shell">
        <p className="eyebrow">Human identity, professionally represented</p>
        <h1>The AI Agency for the Future of Talent</h1>
        <p className="hero-lede">
          AIA Talent helps people create, protect, manage, and monetize their
          digital identity.
        </p>
        <p className="hero-proof">
          Create your digital future. Protect your identity. Expand your
          opportunities.
        </p>
        <div className="hero-actions">
          <JoinAiaButton className="button button-gold" source="Hero">
            Join AIA <span aria-hidden="true">↗</span>
          </JoinAiaButton>
          <a className="button button-ghost" href="#platform">
            Explore the AIA Platform
          </a>
        </div>
        <div className="hero-pillars" aria-label="AIA capabilities">
          {[
            ["Create", "Digital Twins"],
            ["Protect", "Your Identity"],
            ["License", "With Approval"],
            ["Monetize", "Opportunities"],
          ].map(([title, subtitle], index) => (
            <div className="hero-pillar" key={title}>
              <span className="pillar-icon">{["◎", "◇", "□", "⊕"][index]}</span>
              <span>
                <strong>{title}</strong>
                <small>{subtitle}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
      <a className="scroll-cue" href="#future" aria-label="Scroll to the future of talent section">
        <span>Discover</span>
        <i aria-hidden="true">↓</i>
      </a>
    </section>
  );
}

function PlatformCard({
  company,
}: {
  company: (typeof platformCompanies)[number];
}) {
  return (
    <article className={`platform-card ${company.className}`}>
      <div
        className="card-visual"
        role="img"
        aria-label={`${company.eyebrow} brand artwork`}
      />
      <div className="card-copy">
        <div className="card-icon" aria-hidden="true">
          {company.mark}
        </div>
        <div>
          <p className="micro-label">{company.eyebrow}</p>
          <h3>{company.title}</h3>
          <p>{company.description}</p>
        </div>
      </div>
      <a
        href={company.href}
        className="card-link"
        target="_blank"
        rel="noreferrer"
      >
        {company.cta} <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="intro-section section" id="future">
          <div className="narrow-copy center">
            <p className="section-kicker">The new talent economy</p>
            <h2>The Future of Talent Is Here</h2>
            <p className="section-lede">
              A person’s face, voice, likeness, movement, personality, and
              knowledge can now become valuable digital assets.
            </p>
            <p>
              This creates extraordinary opportunity—and meaningful risk. AIA
              helps talent establish the official, approved version of their
              identity, protect it with clear permissions, and unlock new
              opportunities across the global marketplace.
            </p>
          </div>

          <div className="value-cycle page-shell" aria-label="The AIA value cycle">
            {[
              "Identity",
              "Creation",
              "Protection",
              "Approval",
              "Licensing",
              "Opportunity",
              "Revenue",
              "Long-term value",
            ].map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="platform-section section" id="platform">
          <div className="page-shell">
            <div className="section-heading center">
              <p className="section-kicker">Three companies. One complete platform.</p>
              <h2>The AIA Platform</h2>
              <p>One connected system for authorized digital talent.</p>
            </div>
            <div className="platform-grid">
              {platformCompanies.map((company) => (
                <PlatformCard key={company.title} company={company} />
              ))}
            </div>
          </div>
        </section>

        <section className="principle-section section" id="about">
          <div className="page-shell principle-grid">
            <div className="principle-copy">
              <p className="section-kicker light">The AIA Principle</p>
              <h2>The Talent Owns the Identity</h2>
              <p>
                Every person should control how their identity is created,
                protected, licensed, and used. Technology should expand human
                opportunity—not take the human out of the decision.
              </p>
              <a className="text-link" href="#join">
                Build your identity strategy <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="control-list">
              {[
                "What is created",
                "How it looks and sounds",
                "Who may use it",
                "Where it may appear",
                "Which uses are prohibited",
                "How the talent is paid",
              ].map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reasons-section section">
          <div className="page-shell">
            <div className="section-heading center">
              <p className="section-kicker">Why AIA matters</p>
              <h2>Be Represented Before You Are Replicated</h2>
            </div>
            <div className="reasons-grid">
              {reasons.map((reason) => (
                <article key={reason.number}>
                  <span>{reason.number}</span>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="opportunities-section section">
          <div className="page-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">New ways to work</p>
                <h2>Opportunities Across Every Industry</h2>
              </div>
              <p>
                Approved digital talent can participate in new experiences
                while clear permissions stay at the center.
              </p>
            </div>
            <div className="opportunity-grid">
              {opportunities.map(([title, description], index) => (
                <article key={title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="audience-section">
          <article className="audience-panel talent-panel" id="talent">
            <p className="section-kicker light">For talent</p>
            <h2>Your Identity. Your Rules. Your Future.</h2>
            <p>
              Create official digital assets, define your permissions, and
              participate in approved opportunities on your terms.
            </p>
            <a className="button button-light" href="#join">
              Apply as Talent
            </a>
          </article>
          <article className="audience-panel agency-panel" id="agencies">
            <p className="section-kicker light">For agencies</p>
            <h2>Give Your Clients the AI Services They Need</h2>
            <p>
              Add digital twin creation, asset protection, rights management,
              and licensing without building the platform yourself.
            </p>
            <a className="button button-outline-light" href="mailto:hello@aiatalent.com?subject=AIA%20Agency%20Partnership">
              Partner With AIA
            </a>
          </article>
        </section>

        <section className="legacy-section section" id="legacy">
          <div className="page-shell legacy-grid">
            <div className="legacy-emblem" aria-hidden="true">
              <span>AIA</span>
              <strong>Legacy</strong>
            </div>
            <div>
              <p className="section-kicker">Legacy services</p>
              <h2>Protect a Career for Future Generations</h2>
              <p>
                AIA helps talent, families, estates, trusts, and rights holders
                preserve identity assets, creative intent, career history, and
                long-term value with care.
              </p>
              <div className="legacy-tags">
                {["Rights review", "Asset organization", "Family approvals", "Licensing strategy"].map(
                  (tag) => (
                    <span key={tag}>{tag}</span>
                  ),
                )}
              </div>
              <a className="button button-dark" href="mailto:hello@aiatalent.com?subject=AIA%20Legacy%20Services">
                Explore Legacy Services
              </a>
            </div>
          </div>
        </section>

        <section className="closing-cta" id="join">
          <div className="closing-glow" aria-hidden="true" />
          <div className="page-shell closing-inner">
            <p className="section-kicker light">Private applications are open</p>
            <h2>Own Your Identity.<br />Expand Your Future.</h2>
            <p>
              Join AIA and build your digital future with the protection,
              control, and opportunities you deserve.
            </p>
            <div className="hero-actions">
              <JoinAiaButton
                className="button button-gold"
                source="Closing call to action"
              >
                Join AIA Today <span aria-hidden="true">↗</span>
              </JoinAiaButton>
              <a
                className="button button-ghost"
                href="mailto:hello@aiatalent.com?subject=AIA%20Consultation"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              The AI Agency for the Future of Talent—helping people create,
              protect, manage, and monetize authorized digital identity.
            </p>
            <a href="mailto:hello@aiatalent.com">hello@aiatalent.com</a>
          </div>
          <div>
            <h3>AIA Platform</h3>
            <a href="https://ronvigil-design.github.io/aia-talent-twins/" target="_blank" rel="noreferrer">Talent Twins ↗</a>
            <a href="https://ronvigil-design.github.io/aia-talent-vault/" target="_blank" rel="noreferrer">Talent Vault ↗</a>
            <a href="https://aia-talent-exchange.turner-globa-6193.chatgpt.site/" target="_blank" rel="noreferrer">Talent Exchange ↗</a>
          </div>
          <div>
            <h3>Solutions</h3>
            <a href="#talent">For Talent</a>
            <a href="#agencies">For Agencies</a>
            <a href="#legacy">Legacy Services</a>
            <JoinAiaButton
              className="footer-text-button"
              source="Footer navigation"
            >
              Join AIA
            </JoinAiaButton>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#about">About AIA</a>
            <a href="mailto:hello@aiatalent.com">Contact</a>
            <a href="#top">News</a>
            <a href="#top">Careers</a>
          </div>
          <div>
            <h3>Legal</h3>
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms of Use</a>
            <a href="#top">Responsible AI</a>
            <a href="#top">Accessibility</a>
          </div>
        </div>
        <div className="page-shell footer-bottom">
          <p>
            AIA Talent services and commercial terms may vary by person,
            project, agreement, platform, market, and location. Participation
            does not guarantee projects or income.
          </p>
          <span>© 2026 AIA Talent. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
