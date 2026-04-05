const billets = [];

export default function StudentBilletsPage() {
  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Mes billets</h2>
          <p>Retrouvez les billets qui vous ont été attribués.</p>
        </div>
      </div>

      <section className="content-card">
        <h3 className="section-title">Liste des billets</h3>

        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Date</th>
                <th>Heure</th>
                <th>Code / QR</th>
                <th>Statut</th>
              </tr>
            </thead>

            <tbody>
              {billets.length === 0 ? (
                <tr>
                  <td colSpan="5">
                    <div className="empty-state">
                      <strong>Aucun billet pour le moment</strong>
                      <p>Les billets apparaîtront ici après liaison avec le backend.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                billets.map((billet, index) => (
                  <tr key={index}>
                    <td>{billet.type}</td>
                    <td>{billet.date}</td>
                    <td>{billet.heure}</td>
                    <td>{billet.code}</td>
                    <td>
                      <span
                        className={`status-badge ${
                          billet.status === "Actif" ? "success" : "warning"
                        }`}
                      >
                        {billet.status}
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