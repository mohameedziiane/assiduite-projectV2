export default function StudentDashboardPage() {
  function handleDownloadReport() {
    const reportContent = `
RAPPORT D'ASSIDUITÉ

Stagiaire : Aucune donnée
Date : ${new Date().toLocaleDateString("fr-FR")}

Résumé :
- Total absences : 0
- Heures d’absence : 0h
- Billets actifs : 0
- Note de discipline : 0/20

Détail :
Aucune donnée disponible pour le moment.
    `.trim();

    const blob = new Blob([reportContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "rapport-assiduite.txt";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Tableau de bord</h2>
          <p>Vue globale de votre assiduité.</p>
        </div>

        <button className="primary-btn" onClick={handleDownloadReport}>
          Télécharger mon rapport
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total absences</span>
          <strong>00</strong>
          <p>Aucune donnée</p>
        </div>

        <div className="stat-card">
          <span>Heures d’absence</span>
          <strong>0h</strong>
          <p>Aucune donnée</p>
        </div>

        <div className="stat-card">
          <span>Billets actifs</span>
          <strong>00</strong>
          <p>Aucun billet</p>
        </div>

        <div className="stat-card">
          <span>Note de discipline</span>
          <strong>0/20</strong>
          <p>En attente de données</p>
        </div>
      </div>

      <div className="content-grid-2">
        <section className="content-card">
          <h3 className="section-title">Évolution mensuelle</h3>
          <div className="empty-state">
            <strong>Aucune donnée disponible</strong>
            <p>Le graphique sera affiché ici après liaison avec le backend.</p>
          </div>
        </section>

        <section className="content-card">
          <h3 className="section-title">Dernières absences</h3>
          <div className="empty-state">
            <strong>Aucune absence pour le moment</strong>
            <p>Les dernières absences apparaîtront ici.</p>
          </div>
        </section>
      </div>
    </div>
  );
}