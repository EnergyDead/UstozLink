const ledgerItems = [
  'Hours worked',
  'Tasks completed',
  'Feedback received',
  'Skills developed',
  'Milestones achieved',
  'Portfolio artifacts',
];

export function GrowthLedger() {
  return (
    <section className="section growth-ledger">
      <h2>Growth Ledger</h2>
      <p className="growth-lead">
        Every mentorship interaction becomes trackable evidence that can be reviewed and shared when opportunities matter.
      </p>
      <div className="ledger-grid">
        {ledgerItems.map((item) => (
          <article className="ledger-item" key={item}>
            <p>{item}</p>
          </article>
        ))}
      </div>
      <p className="key-line growth-key">This is not a diary. This is proof of growth.</p>
    </section>
  );
}
