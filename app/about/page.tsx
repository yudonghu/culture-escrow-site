export default function AboutPage() {
  return (
    <section className="hero">
      <h1>About Culture Escrow</h1>
      <p>
        Culture Escrow is evolving its public site into a portal experience that still preserves
        the company-facing presentation layer while preparing a unified entry for internal tools.
      </p>

      <div className="card-grid">
        <div className="card">
          <h2>Company Positioning</h2>
          <p>
            The site remains a public-facing official website, while the internal portal layer will
            gradually support operational workflows for staff.
          </p>
        </div>
        <div className="card">
          <h2>Public + Internal Balance</h2>
          <p>
            Public content stays openly accessible. Internal functionality is centered around the
            protected <strong>/daily-tools</strong> entry.
          </p>
        </div>
        <div className="card">
          <h2>Portal Direction</h2>
          <p>
            This repository is the long-term home for the official website and the future unified
            navigation layer for Culture Escrow internal tools.
          </p>
        </div>
      </div>
    </section>
  )
}
