const stats = [];

export default function StudentStatisticsPage() {
  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Statistiques</h2>
          <p>Suivez votre évolution et comparez votre assiduité.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Taux d’absentéisme</span>
          <strong>0%</strong>
          <p>Aucune donnée</p>
        </div>

        <div className="stat-card">
          <span>Moyenne du groupe</span>
          <strong>0%</strong>
          <p>Aucune donnée</p>
        </div>

        <div className="stat-card">
          <span>Alertes</span>
          <strong>00</strong>
          <p>Aucune donnée</p>
        </div>

        <div className="stat-card">
          <span>Retards autorisés</span>
          <strong>00</strong>
          <p>Aucune donnée</p>
        </div>
      </div>

      <section className="content-card">
        <h3 className="section-title">Évolution de l’absentéisme</h3>

        {stats.length === 0 ? (
          <div className="empty-state">
            <strong>Aucune statistique pour le moment</strong>
            <p>Le graphique apparaîtra ici après liaison avec le backend.</p>
          </div>
        ) : (
          <div className="chart-box">
            {stats.map((item) => (
              <div className="chart-bar-item" key={item.month}>
                <div className="chart-bar" style={{ height: `${item.value}%` }} />
                <span className="chart-label">{item.month}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}