export default function GestionnaireJustificatifsPage() {
  const justificatifs = [];

  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Justificatifs</h2>
          <p>Consultez les justificatifs déposés.</p>
        </div>

        <button className="secondary-btn">Filtrer</button>
      </div>

      <section className="content-card">
        <h3 className="section-title">Liste des justificatifs</h3>

        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Stagiaire</th>
                <th>Date</th>
                <th>Type</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {justificatifs.length === 0 ? (
                <tr>
                  <td colSpan="4">
                    <div className="empty-state">
                      <strong>Aucun justificatif pour le moment</strong>
                      <p>Les justificatifs apparaîtront ici après liaison avec le backend.</p>
                    </div>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}