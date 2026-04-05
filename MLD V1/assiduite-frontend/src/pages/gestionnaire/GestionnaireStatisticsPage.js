export default function GestionnaireStatisticsPage() {
  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Statistiques</h2>
          <p>Consultez les indicateurs globaux.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Absences globales</span>
          <strong>0%</strong>
          <p>Aucune donnée</p>
        </div>

        <div className="stat-card">
          <span>Justificatifs validés</span>
          <strong>0%</strong>
          <p>Aucune donnée</p>
        </div>

        <div className="stat-card">
          <span>Billets actifs</span>
          <strong>0</strong>
          <p>Aucune donnée</p>
        </div>

        <div className="stat-card">
          <span>Groupes surveillés</span>
          <strong>0</strong>
          <p>Aucune donnée</p>
        </div>
      </div>

      <section className="content-card">
        <h3 className="section-title">Vue globale</h3>
        <div className="empty-state">
          <strong>Aucune statistique disponible</strong>
          <p>Les statistiques apparaîtront ici après liaison avec le backend.</p>
        </div>
      </section>
    </div>
  );
}