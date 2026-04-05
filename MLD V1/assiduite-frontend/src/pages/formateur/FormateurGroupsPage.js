export default function FormateurGroupsPage() {
  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Mes groupes</h2>
          <p>Consultez les groupes qui vous sont affectés.</p>
        </div>
      </div>

      <section className="content-card">
        <div className="empty-state">
          <strong>Aucun groupe disponible</strong>
          <p>Les groupes du formateur seront affichés ici.</p>
        </div>
      </section>
    </div>
  );
}