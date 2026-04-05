import { useState } from "react";

export default function GestionnaireGroupesPage() {
  const [showAssign, setShowAssign] = useState(false);

  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Affecter groupes</h2>
          <p>Affectez les stagiaires aux groupes.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowAssign((prev) => !prev)}
        >
          {showAssign ? "Fermer" : "Nouvelle affectation"}
        </button>
      </div>

      {showAssign && (
        <section className="content-card">
          <h3 className="section-title">Formulaire d'affectation</h3>

          <div className="profile-info-grid">
            <label>
              <span>Nom du stagiaire</span>
              <input type="text" placeholder="Nom du stagiaire" />
            </label>

            <label>
              <span>Code groupe</span>
              <input type="text" placeholder="DEV-201" />
            </label>
          </div>
        </section>
      )}

      <section className="content-card">
        <div className="empty-state">
          <strong>Aucune affectation disponible</strong>
          <p>Les affectations de groupes apparaîtront ici après liaison avec le backend.</p>
        </div>
      </section>
    </div>
  );
}