const solutionPoints = [
  'Clear intent',
  'Defined format',
  'No onboarding friction',
  'Structured workflow',
];

export function WhyMentorsAccept() {
  return (
    <section className="section">
      <h2>Why mentors accept</h2>
      <p className="muted">Most requests are vague. UstozLink changes that with a mentorship approach built for clarity and action.</p>
      <ul className="list">
        {solutionPoints.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="key-line">“Mentors don’t join a platform. They respond to a well-prepared person.”</p>
    </section>
  );
}
