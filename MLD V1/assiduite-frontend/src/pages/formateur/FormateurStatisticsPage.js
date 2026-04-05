export default function FormateurStatisticsPage() {
  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Statistiques groupe</h2>
          <p>Consultez les indicateurs et statistiques du groupe.</p>
        </div>
      </div>

      <section className="content-card">
        <div className="empty-state">
          <strong>Aucune statistique disponible</strong>
          <p>Les statistiques du groupe apparaîtront ici après liaison avec le backend.</p>
        </div>
      </section>
    </div>
  );
}