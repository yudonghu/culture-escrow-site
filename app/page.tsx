export default function HomePage() {
  return (
    <section className="hero">
      <h1>Culture Escrow Inc.</h1>
      <p>
        A multilingual portal upgrade is underway. This site continues to serve as the
        public-facing official website while also evolving into the unified internal tools portal.
      </p>

      <div className="card-grid">
        <div className="card">
          <h2>Company Background</h2>
          <p>
            Culture Escrow is being positioned here as both a public showcase site and the future
            unified portal entry for internal daily tools.
          </p>
        </div>
        <div className="card">
          <h2>Services</h2>
          <p>
            Public pages remain open for visitors, while internal staff workflows will gradually be
            organized through the protected <strong>/daily-tools</strong> entry.
          </p>
        </div>
        <div className="card">
          <h2>Portal Vision</h2>
          <p>
            All Culture Escrow-related tools will progressively be integrated into one portal
            experience instead of staying as scattered standalone links.
          </p>
        </div>
      </div>
    </section>
  )
}
