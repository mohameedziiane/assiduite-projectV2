import { useState } from "react";

export default function StudentAbsencesPage() {
  const [showReport, setShowReport] = useState(false);

  const absences = [];

  function handleExploreReport() {
    setShowReport((prev) => !prev);
  }

  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Mes absences</h2>
          <p>Consultez la liste chronologique de vos absences.</p>
        </div>

        <button className="secondary-btn" onClick={handleExploreReport}>
          {showReport ? "Fermer le rapport" : "Explorer le rapport"}
        </button>
      </div>

      {showReport && (
        <section className="content-card">
          <h3 className="section-title">Rapport des absences</h3>
          <div className="empty-state">
            <strong>Aucune donnée disponible</strong>
            <p>Le rapport est vide pour le moment.</p>
          </div>
        </section>
      )}

      <section className="content-card">
        <h3 className="section-title">Historique des absences</h3>

        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Module</th>
                <th>Formateur</th>
                <th>Durée</th>
                <th>Statut</th>
              </tr>
            </thead>

            <tbody>
              {absences.length === 0 ? (
                <tr>
                  <td colSpan="5">
                    <div className="empty-state">
                      <strong>Aucune absence pour le moment</strong>
                      <p>Les données seront affichées ici après liaison avec le backend.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                absences.map((absence, index) => (
                  <tr key={index}>
                    <td>{absence.date}</td>
                    <td>{absence.module}</td>
                    <td>{absence.formateur}</td>
                    <td>{absence.duree}</td>
                    <td>
                      <span
                        className={`status-badge ${
                          absence.status === "Justifiée"
                            ? "success"
                            : absence.status === "En attente"
                            ? "warning"
                            : "danger"
                        }`}
                      >
                        {absence.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}