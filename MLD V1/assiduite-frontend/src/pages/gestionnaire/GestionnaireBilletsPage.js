import { useState } from "react";

export default function GestionnaireBilletsPage() {
  const [showForm, setShowForm] = useState(false);
  const billets = [];

  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Générer billets</h2>
          <p>Créez et consultez les billets.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Fermer le formulaire" : "Générer un billet"}
        </button>
      </div>

      {showForm && (
        <section className="content-card">
          <h3 className="section-title">Nouveau billet</h3>

          <div className="profile-info-grid">
            <label>
              <span>Type de billet</span>
              <select defaultValue="">
                <option value="" disabled>
                  Choisir le type
                </option>
                <option>Billet d’absence</option>
                <option>Billet de retard</option>
                <option>Billet d’entrée</option>
              </select>
            </label>

            <label>
              <span>Nom du stagiaire</span>
              <input type="text" placeholder="Nom du stagiaire" />
            </label>

            <label className="full">
              <span>Motif</span>
              <input type="text" placeholder="Motif du billet" />
            </label>
          </div>
        </section>
      )}

      <section className="content-card">
        <h3 className="section-title">Liste des billets</h3>

        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Stagiaire</th>
                <th>Date</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {billets.length === 0 ? (
                <tr>
                  <td colSpan="4">
                    <div className="empty-state">
                      <strong>Aucun billet pour le moment</strong>
                      <p>Les billets apparaîtront ici après liaison avec le backend.</p>
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