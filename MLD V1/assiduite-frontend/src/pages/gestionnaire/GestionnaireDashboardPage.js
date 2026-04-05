import { useNavigate } from "react-router-dom";

export default function GestionnaireDashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="page-stack">
      <div className="gestionnaire-stats-grid">
        <div className="gestionnaire-stat-card blue">
          <span>Nombre de stagiaires</span>
          <strong>0</strong>
        </div>

        <div className="gestionnaire-stat-card orange">
          <span>Justificatifs en attente</span>
          <strong>0</strong>
        </div>

        <div className="gestionnaire-stat-card green">
          <span>Billets générés</span>
          <strong>0</strong>
        </div>

        <div className="gestionnaire-stat-card red">
          <span>Taux d'absentéisme</span>
          <strong>0%</strong>
        </div>
      </div>

      <div className="gestionnaire-dashboard-grid">
        <section className="content-card">
          <div className="gestionnaire-card-head">
            <div>
              <h3 className="section-title">Absentéisme par Groupe</h3>
              <p className="soft-text">
                Comparaison du taux d’absence entre les groupes
              </p>
            </div>

            <button
              className="secondary-btn"
              onClick={() => navigate("/gestionnaire/statistiques")}
            >
              Détails par filière
            </button>
          </div>

          <div className="empty-state chart-empty">
            <strong>Aucune statistique disponible</strong>
            <p>Le graphique apparaîtra ici après liaison avec le backend.</p>
          </div>
        </section>

        <section className="content-card">
          <h3 className="section-title">Actions Récentes</h3>

          <div className="empty-state">
            <strong>Aucune action récente</strong>
            <p>L’historique apparaîtra ici après liaison avec le backend.</p>
          </div>

          <div style={{ marginTop: "16px" }}>
            <button
              className="secondary-btn"
              onClick={() => navigate("/gestionnaire/justificatifs")}
            >
              Voir tout l'historique
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}