function exportStatsCsv() {
  const csvContent = "Indicateur,Valeur\nAbsentéisme global,0%\n";

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "statistiques-directeur.csv";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function DirecteurStatisticsPage() {
  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Statistiques</h2>
          <p>Consultez les indicateurs et tendances globales.</p>
        </div>

        <button className="primary-btn" onClick={exportStatsCsv}>
          Exporter statistiques
        </button>
      </div>

      <div className="directeur-stats-grid">
        <div className="directeur-stat-card">
          <div className="directeur-stat-icon blue">↗</div>
          <span>ABSENTÉISME GLOBAL</span>
          <strong>0%</strong>
        </div>

        <div className="directeur-stat-card">
          <div className="directeur-stat-icon green">👥</div>
          <span>PRÉSENCE MOYENNE</span>
          <strong>0%</strong>
        </div>

        <div className="directeur-stat-card">
          <div className="directeur-stat-icon purple">▥</div>
          <span>JUSTIFICATIFS VALIDÉS</span>
          <strong>0%</strong>
        </div>

        <div className="directeur-stat-card">
          <div className="directeur-stat-icon red">⚠</div>
          <span>ALERTES</span>
          <strong>0</strong>
        </div>
      </div>

      <section className="content-card">
        <h3 className="section-title">Vue statistique globale</h3>

        <div className="empty-state chart-empty">
          <strong>Aucune statistique disponible</strong>
          <p>Les graphiques et tendances apparaîtront ici après liaison avec le backend.</p>
        </div>
      </section>
    </div>
  );
}