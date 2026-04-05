import { useState } from "react";

export default function StudentJustificatifPage() {
  const [comment, setComment] = useState("");
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!fileName) {
      setMessage("Veuillez sélectionner un fichier.");
      return;
    }

    setMessage("Justificatif envoyé avec succès.");
    setComment("");
  }

  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Déposer un justificatif</h2>
          <p>Ajoutez un fichier et un commentaire pour régulariser votre absence.</p>
        </div>
      </div>

      <section className="content-card">
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="upload-box">
            <strong>Choisir un justificatif</strong>
            <p>Formats acceptés: PDF, JPG, PNG</p>
            <input type="file" onChange={handleFileChange} />
            {fileName ? <p>Fichier sélectionné: {fileName}</p> : null}
          </div>

          <label>
            <span>Commentaire</span>
            <textarea
              placeholder="Expliquez brièvement le motif..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>

          {message ? (
            <div className="status-badge info" style={{ width: "fit-content" }}>
              {message}
            </div>
          ) : null}

          <button type="submit" className="primary-btn">
            Envoyer le justificatif
          </button>
        </form>
      </section>
    </div>
  );
}