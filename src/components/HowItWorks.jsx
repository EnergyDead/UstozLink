const steps = [
  'Choose your mentor',
  'Generate a strong invitation (AI-assisted)',
  'Start structured mentorship (tasks, sessions, milestones)',
];

export function HowItWorks() {
  return (
    <section className="section">
      <h2>How it works</h2>
      <div className="cards-grid">
        {steps.map((step, index) => (
          <article className="card" key={step}>
            <p className="step-number">0{index + 1}</p>
            <h3>{step}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
