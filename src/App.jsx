import './App.css';

const howItWorks = [
  {
    title: 'Choose your mentor',
    text: 'Pick any professional you want to learn from.',
  },
  {
    title: 'Generate a strong invitation',
    text: 'AI helps you write a clear, respectful request.',
  },
  {
    title: 'Start structured mentorship',
    text: 'Tasks, sessions, milestones tracked.',
  },
];

const mentorReasons = [
  'Clear intent, not “help me”',
  'Defined format',
  'No onboarding friction',
  'Structured workflow',
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

function App() {
  return (
    <div className="site">
      <Header />

      <section className="hero wrap">
        <div className="particles" aria-hidden="true" />
        <p className="eyebrow">UstozLink</p>
        <h1>Invite your ideal mentor.<br />Turn mentorship into proof.</h1>
        <p className="subtext">You don’t wait to be chosen. You invite the right professional — and turn mentorship into a structured, verifiable Growth Ledger.</p>
        <div className="actions">
          <button className="btn btn-outline" type="button">Get Mentor Invitation</button>
          <button className="btn btn-light" type="button">Learn more</button>
        </div>
      </section>

      <section className="section wrap">
        <h2>How it works</h2>
        <p className="section-sub">A clear path from invitation to measurable mentorship progress.</p>
        <div className="grid three">
          {howItWorks.map((item) => (
            <article className="card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <h2>Why mentors accept</h2>
        <p className="section-sub emphasis">Mentors don’t join a platform. They respond to a well-prepared person.</p>
        <div className="grid four compact-cards">
          {mentorReasons.map((reason) => (
            <article className="mini-card" key={reason}>{reason}</article>
          ))}
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
