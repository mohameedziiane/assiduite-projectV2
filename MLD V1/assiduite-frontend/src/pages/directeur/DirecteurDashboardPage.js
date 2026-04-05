import { useState } from "react";

const months = [
  "Janvier 2024",
  "Février 2024",
  "Mars 2024",
  "Avril 2024",
  "Mai 2024",
  "Juin 2024",
  "Juillet 2024",
  "Août 2024",
  "Septembre 2024",
  "Octobre 2024",
  "Novembre 2024",
  "Décembre 2024",
];

export default function DirecteurDashboardPage() {
  const [selectedMonth, setSelectedMonth] = useState("Mars 2024");

  function handleDownloadMonthlyReport() {
    const content = `
RAPPORT MENSUEL - DIRECTEUR
Période : ${selectedMonth}

Résumé:
- Absentéisme global : 0%
- Stagiaires présents : 0%
- Justificatifs traités : 0%
- Alertes critiques : 0

Détails:
Aucune donnée disponible pour le moment.
    `.trim();

    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `rapport-mensuel-${selectedMonth.replace(/\s+/g, "-")}.txt`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Tableau de Bord Exécutif</h2>
          <p>Vue d’ensemble de l’assiduité à l’échelle de l’institution.</p>
        </div>

        <div className="directeur-actions">
          <select
            className="directeur-month-select"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>

          <button className="primary-btn" onClick={handleDownloadMonthlyReport}>
            Rapport Mensuel
          </button>
        </div>
      </div>

      <div className="directeur-stats-grid">
        <div className="directeur-stat-card">
          <div className="directeur-stat-icon blue">↗</div>
          <span>ABSENTÉISME GLOBAL</span>
          <strong>0%</strong>
        </div>

        <div className="directeur-stat-card">
          <div className="directeur-stat-icon green">👥</div>
          <span>STAGIAIRES PRÉSENTS</span>
          <strong>0%</strong>
        </div>

        <div className="directeur-stat-card">
          <div className="directeur-stat-icon purple">▥</div>
          <span>JUSTIFICATIFS TRAITÉS</span>
          <strong>0%</strong>
        </div>

        <div className="directeur-stat-card">
          <div className="directeur-stat-icon red">⚠</div>
          <span>ALERTES CRITIQUES</span>
          <strong>0</strong>
        </div>
      </div>

      <div className="directeur-dashboard-grid">
        <section className="content-card">
          <h3 className="section-title">Tendance de l'Absentéisme</h3>
          <p className="soft-text">
            Évolution hebdomadaire sur les 6 dernières semaines
          </p>

          <div className="empty-state chart-empty">
            <strong>Aucune donnée disponible</strong>
            <p>Le graphique apparaîtra ici après liaison avec le backend.</p>
          </div>
        </section>

        <section className="content-card">
          <h3 className="section-title">Top 5 Groupes (Assiduité)</h3>

          <div className="empty-state chart-empty">
            <strong>Aucun classement disponible</strong>
            <p>Le classement apparaîtra ici après liaison avec le backend.</p>
          </div>
        </section>
      </div>
    </div>
  );
}