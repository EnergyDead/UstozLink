const outcomes = [
  'Real mentorship',
  'Structured progress',
  'Continuous feedback',
  'Portfolio outputs',
];

export function WhatYouGet() {
  return (
    <section className="section">
      <h2>What you get</h2>
      <div className="cards-grid compact">
        {outcomes.map((outcome) => (
          <article className="card" key={outcome}>
            <h3>{outcome}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
