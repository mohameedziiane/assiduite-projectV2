export default function FormateurCommentsPage() {
  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Commentaires</h2>
          <p>Ajoutez ou consultez vos remarques.</p>
        </div>
      </div>

      <section className="content-card">
        <div className="empty-state">
          <strong>Aucun commentaire pour le moment</strong>
          <p>Les commentaires du formateur apparaîtront ici.</p>
        </div>
      </section>
    </div>
  );
}