import './App.css';

const howItWorks = [
  {
    title: 'Choose your mentor',
    text: 'Find a specialist whose real-world experience matches your goal.',
  },
  {
    title: 'Set your learning outcome',
    text: 'Define what result you want in 2, 4, and 8 weeks.',
  },
  {
    title: 'Generate invitation draft',
    text: 'AI builds a concise, respectful message with context and motivation.',
  },
  {
    title: 'Personalize your request',
    text: 'Add your portfolio, background, and why this mentor is a match.',
  },
  {
    title: 'Send with one click',
    text: 'No complex onboarding or extra platform setup for the mentor.',
  },
  {
    title: 'Confirm mentorship format',
    text: 'Agree on call cadence, feedback style, and expected deliverables.',
  },
  {
    title: 'Break goal into milestones',
    text: 'Turn a big objective into measurable weekly progress checkpoints.',
  },
  {
    title: 'Track tasks in ledger',
    text: 'Capture completed work, feedback, and iteration history automatically.',
  },
  {
    title: 'Reflect and adjust',
    text: 'After each session, update priorities and next action plan.',
  },
  {
    title: 'Export proof of growth',
    text: 'Package outcomes for university, internship, or employer review.',
  },
];

const mentorReasons = [
  'Request is specific and time-bounded, not generic “please mentor me”.',
  'Student shows preparation before first contact, which signals commitment.',
  'Clear agenda reduces back-and-forth and makes mentorship easier to start.',
  'No long registration process for mentors — quick response path.',
  'Defined milestones help mentors give targeted, high-impact advice.',
  'Progress tracking means mentors see results, not promises.',
  'Built-in reflection improves session quality week by week.',
  'Artifacts and deliverables make feedback concrete and actionable.',
  'Mentors can contribute in structured format even with limited time.',
  'Professional tone and context increase trust from the first message.',
];

const whatYouGet = ['Real mentorship', 'Structured progress', 'Continuous feedback', 'Portfolio outputs'];

const ledgerItems = [
  'Hours worked',
  'Tasks completed',
  'Feedback received',
  'Skills developed',
  'Milestones achieved',
  'Portfolio artifacts',
];

const reports = ['University', 'Internships', 'Employers', 'Grants', 'Accelerators'];

const moreFeatures = ['Structured mentorship', 'Real outcomes', 'No chaos', 'Mentor-first experience'];

function Header() {
  return (
    <header className="top-nav wrap">
      <div className="logo">UstozLink</div>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#">Platform</a>
        <a href="#">Mentorship</a>
        <a href="#">Ledger</a>
        <a href="#">Reports</a>
      </nav>
      <button className="btn btn-small btn-light" type="button">Get Started</button>
    </header>
  );
}

function MarqueeRow({ items, reverse = false, variant = 'card' }) {
  return (
    <div className="marquee-track-wrap" aria-hidden="true">
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {[...items, ...items].map((item, index) => (
          <article className={`ticker-item ${variant}`} key={`${item.title ?? item}-${index}`}>
            {typeof item === 'string' ? (
              <p>{item}</p>
            ) : (
              <>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="site">
      <Header />

      <section className="hero">
        <div className="particles" aria-hidden="true" />
        <div className="hero-content wrap">
          <p className="eyebrow">UstozLink</p>
          <h1>Invite your ideal mentor.<br />Turn mentorship into proof.</h1>
          <p className="subtext">You don’t wait to be chosen. You invite the right professional — and turn mentorship into a structured, verifiable Growth Ledger.</p>
          <div className="actions">
            <button className="btn btn-outline" type="button">Get Mentor Invitation</button>
            <button className="btn btn-light" type="button">Learn more</button>
          </div>
        </div>
      </section>

      <section className="marquee-page">
        <div className="marquee-group">
          <div className="marquee-heading wrap">
            <h2>How it works</h2>
            <p className="section-sub">A clear path from invitation to measurable mentorship progress.</p>
          </div>
          <MarqueeRow items={howItWorks} variant="card" />
        </div>

        <div className="marquee-group">
          <div className="marquee-heading wrap">
            <h2>Why mentors accept</h2>
            <p className="section-sub emphasis">Mentors don’t join a platform. They respond to a well-prepared person.</p>
          </div>
          <MarqueeRow items={mentorReasons} reverse variant="mini" />
        </div>
      </section>

      <section className="section wrap showcase">
        <div className="showcase-card">
          <h2>What you actually get</h2>
          <ul>
            {whatYouGet.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section wrap ledger-section">
        <h2>Growth Ledger</h2>
        <div className="grid three ledger-grid">
          {ledgerItems.map((item) => <article className="media-card" key={item}>{item}</article>)}
        </div>
        <p className="section-sub strong">This is not a diary. This is proof of growth.</p>
      </section>

      <section className="section wrap split">
        <div>
          <h2>Institutional Reporting</h2>
          <p className="section-sub">Export your Growth Ledger for:</p>
          <ul className="report-list">{reports.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
        <div className="mock-panel" aria-hidden="true" />
      </section>

      <section className="section wrap more-features">
        <h2>More features</h2>
        <div className="grid four text-grid">
          {moreFeatures.map((item) => (
            <article key={item}>
              <h3>{item}</h3>
              <p>Designed to keep mentorship focused, measurable, and outcome-driven.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap final-cta">
        <h2>Start your first mentor invitation</h2>
        <button className="btn btn-light" type="button">Get started</button>
      </section>

      <footer className="footer wrap">
        <div className="logo">UstozLink</div>
        <div className="footer-links">
          <a href="#">Product</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
