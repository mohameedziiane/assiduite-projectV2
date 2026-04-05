import React from "react";

function getStatusClass(status) {
  if (status === "Justifiée") return "status-badge success";
  if (status === "Non justifiée") return "status-badge danger";
  return "status-badge warning";
}

function AbsenceTable({ rows }) {
  return (
    <div className="table-card">
      <div className="table-wrapper">
        <table className="absence-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>MODULE</th>
              <th>FORMATEUR</th>
              <th>DURÉE</th>
              <th>STATUT</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {rows.length > 0 ? (
              rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.date}</td>
                  <td>{row.module}</td>
                  <td>{row.trainer}</td>
                  <td>{row.duration}</td>
                  <td>
                    <span className={getStatusClass(row.status)}>
                      {row.status}
                    </span>
                  </td>
                  <td>
                    <button className="table-action-btn" type="button">
                      Explorer
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="empty-cell">
                  Aucune donnée trouvée
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AbsenceTable;