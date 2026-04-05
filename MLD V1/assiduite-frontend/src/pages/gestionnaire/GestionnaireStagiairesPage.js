import { useState } from "react";

export default function GestionnaireStagiairesPage() {
  const [showForm, setShowForm] = useState(false);
  const stagiaires = [];

  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Gérer stagiaires</h2>
          <p>Ajout, consultation et gestion des stagiaires.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Fermer le formulaire" : "Ajouter un stagiaire"}
        </button>
      </div>

      {showForm && (
        <section className="content-card">
          <h3 className="section-title">Nouveau stagiaire</h3>

          <div className="profile-info-grid">
            <label>
              <span>Nom complet</span>
              <input type="text" placeholder="Nom du stagiaire" />
            </label>

            <label>
              <span>Email</span>
              <input type="email" placeholder="email@institution.ma" />
            </label>

            <label>
              <span>Groupe</span>
              <input type="text" placeholder="DEV-201" />
            </label>

            <label>
              <span>Filière</span>
              <input type="text" placeholder="Développement Digital" />
            </label>
          </div>
        </section>
      )}

      <section className="content-card">
        <h3 className="section-title">Liste des stagiaires</h3>

        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Groupe</th>
                <th>Email</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {stagiaires.length === 0 ? (
                <tr>
                  <td colSpan="4">
                    <div className="empty-state">
                      <strong>Aucun stagiaire pour le moment</strong>
                      <p>Les stagiaires apparaîtront ici après liaison avec le backend.</p>
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