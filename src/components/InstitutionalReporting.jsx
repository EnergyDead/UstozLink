const reportingUses = ['University', 'Internships', 'Employers', 'Grants', 'Accelerators'];

export function InstitutionalReporting() {
  return (
    <section className="section">
      <h2>Institutional Reporting</h2>
      <p className="muted">
        Export your verified Growth Ledger into reporting formats stakeholders already understand and evaluate.
      </p>
      <ul className="pill-list">
        {reportingUses.map((useCase) => (
          <li key={useCase}>{useCase}</li>
        ))}
      </ul>
    </section>
  );
}
