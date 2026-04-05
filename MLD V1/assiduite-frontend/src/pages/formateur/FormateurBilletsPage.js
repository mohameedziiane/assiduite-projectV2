export default function FormateurBilletsPage() {
  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Billets actifs</h2>
          <p>Consultez les billets actifs des stagiaires.</p>
        </div>
      </div>

      <section className="content-card">
        <div className="empty-state">
          <strong>Aucun billet actif pour le moment</strong>
          <p>Les billets actifs apparaîtront ici après liaison avec le backend.</p>
        </div>
      </section>
    </div>
  );
}