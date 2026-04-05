import { useState } from "react";


export default function FormateurAbsencesPage() {
  const [selectedGroup, setSelectedGroup] = useState("");

  const groups = ["DEV-201", "DEV-202", "DD-101", "DD-102"];
  const stagiaires = [];

  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Saisie des absences</h2>
          <p>Marquez les absences des stagiaires.</p>
        </div>
      </div>

      <section className="content-card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "18px",
          }}
        >
          <h3 className="section-title" style={{ margin: 0 }}>
            Liste des stagiaires
          </h3>

          <div style={{ minWidth: "240px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "13px",
                fontWeight: "700",
                color: "#374151",
              }}
            >
              Choisir un groupe
            </label>

            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              style={{
                width: "100%",
                height: "42px",
                border: "1px solid #e7eaf2",
                background: "#fafbfe",
                borderRadius: "12px",
                padding: "0 12px",
                outline: "none",
                fontSize: "14px",
                color: "#334155",
              }}
            >
              <option value="">-- Sélectionner un groupe --</option>
              {groups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Groupe</th>
                <th>Présence</th>
                <th>Commentaire</th>
              </tr>
            </thead>

            <tbody>
              {selectedGroup === "" ? (
                <tr>
                  <td colSpan="4">
                    <div className="empty-state">
                      <strong>Sélectionnez d’abord un groupe</strong>
                      <p>Choisissez un groupe pour afficher les stagiaires.</p>
                    </div>
                  </td>
                </tr>
              ) : stagiaires.length === 0 ? (
                <tr>
                  <td colSpan="4">
                    <div className="empty-state">
                      <strong>Aucun stagiaire pour le moment</strong>
                      <p>
                        Les stagiaires du groupe <strong>{selectedGroup}</strong>{" "}
                        apparaîtront ici après liaison avec le backend.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                stagiaires.map((stagiaire, index) => (
                  <tr key={index}>
                    <td>{stagiaire.nom}</td>
                    <td>{stagiaire.groupe}</td>
                    <td>{stagiaire.presence}</td>
                    <td>{stagiaire.commentaire}</td>
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