export default function FormateurDashboardPage() {
  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Tableau de bord</h2>
          <p>Vue globale de votre espace formateur.</p>
        </div>
      </div>

      <div className="formateur-stats-grid">
        <div className="formateur-stat-card blue">
          <div className="formateur-stat-icon">🕘</div>
          <div className="formateur-stat-label">Séances du jour</div>
          <div className="formateur-stat-value">0</div>
        </div>

        <div className="formateur-stat-card red">
          <div className="formateur-stat-icon">👥</div>
          <div className="formateur-stat-label">Stagiaires absents</div>
          <div className="formateur-stat-value">0</div>
        </div>

        <div className="formateur-stat-card green">
          <div className="formateur-stat-icon">🎫</div>
          <div className="formateur-stat-label">Billets actifs</div>
          <div className="formateur-stat-value">0</div>
        </div>

        <div className="formateur-stat-card orange">
          <div className="formateur-stat-icon">⚠️</div>
          <div className="formateur-stat-label">Alertes</div>
          <div className="formateur-stat-value">0</div>
        </div>
      </div>

      <div className="formateur-dashboard-grid">
        <section className="content-card">
          <div className="formateur-card-head">
            <h3 className="section-title">Séances d'aujourd'hui</h3>
            <button className="link-btn" type="button">
              Voir tout le planning
            </button>
          </div>

          <div className="empty-state">
            <strong>Aucune séance pour le moment</strong>
            <p>Les séances du jour apparaîtront ici après liaison avec le backend.</p>
          </div>
        </section>

        <section className="formateur-dark-card">
          <h3>Statistiques Groupe</h3>

          <div className="formateur-progress-block">
            <div className="formateur-progress-head">
              <span>Taux de présence</span>
              <strong>0%</strong>
            </div>
            <div className="formateur-progress-bar">
              <div
                className="formateur-progress-fill blue-fill"
                style={{ width: "0%" }}
              />
            </div>
          </div>

          <div className="formateur-progress-block">
            <div className="formateur-progress-head">
              <span>Justificatifs validés</span>
              <strong>0%</strong>
            </div>
            <div className="formateur-progress-bar">
              <div
                className="formateur-progress-fill green-fill"
                style={{ width: "0%" }}
              />
            </div>
          </div>

          <div className="formateur-dark-empty">
            Aucune statistique disponible pour le moment.
          </div>
        </section>
      </div>
    </div>
  );
}