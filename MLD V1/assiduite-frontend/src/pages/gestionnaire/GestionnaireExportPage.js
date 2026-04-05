export default function GestionnaireExportPage() {
  function handleExport() {
    const csvContent = "Nom,Groupe,Absences\n";
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "export-gestionnaire.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Export Excel</h2>
          <p>Téléchargez les exports disponibles.</p>
        </div>

        <button className="primary-btn" onClick={handleExport}>
          Exporter CSV
        </button>
      </div>

      <section className="content-card">
        <div className="empty-state">
          <strong>Aucun export disponible</strong>
          <p>Le téléchargement génère un fichier vide tant que le backend n’est pas branché.</p>
        </div>
      </section>
    </div>
  );
}