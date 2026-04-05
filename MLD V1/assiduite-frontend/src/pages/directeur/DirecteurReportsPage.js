import { useState } from "react";

export default function DirecteurReportsPage() {
  const [reportType, setReportType] = useState("global");

  function handleDownloadGlobalReport() {
    const content = `
RAPPORT GLOBAL - DIRECTEUR
Type : ${reportType}

Résumé :
Aucune donnée disponible pour le moment.
    `.trim();

    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `rapport-global-${reportType}.txt`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Rapports globaux</h2>
          <p>Consultez et téléchargez les rapports globaux.</p>
        </div>

        <button className="primary-btn" onClick={handleDownloadGlobalReport}>
          Télécharger rapport global
        </button>
      </div>

      <section className="content-card">
        <div className="profile-info-grid">
          <label>
            <span>Type de rapport</span>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="global">Rapport global</option>
              <option value="mensuel">Rapport mensuel</option>
              <option value="groupes">Rapport par groupe</option>
            </select>
          </label>

          <label>
            <span>Période</span>
            <input type="text" value="2024" readOnly />
          </label>
        </div>
      </section>

      <section className="content-card">
        <div className="empty-state">
          <strong>Aucun rapport disponible</strong>
          <p>Les rapports apparaîtront ici après liaison avec le backend.</p>
        </div>
      </section>
    </div>
  );
}