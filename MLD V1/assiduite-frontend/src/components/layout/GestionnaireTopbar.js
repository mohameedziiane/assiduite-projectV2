import { useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const pageConfig = {
  "/gestionnaire/dashboard": {
    title: "Bienvenue",
    subtitle: "Suivez les stagiaires, justificatifs et billets.",
    placeholder: "Rechercher...",
  },
  "/gestionnaire/stagiaires": {
    title: "Gérer stagiaires",
    subtitle: "Consultez et gérez la liste des stagiaires.",
    placeholder: "Rechercher un stagiaire...",
  },
  "/gestionnaire/groupes": {
    title: "Affecter groupes",
    subtitle: "Affectez les stagiaires aux groupes.",
    placeholder: "Rechercher un groupe...",
  },
  "/gestionnaire/billets": {
    title: "Générer billets",
    subtitle: "Créez et consultez les billets.",
    placeholder: "Rechercher un billet...",
  },
  "/gestionnaire/justificatifs": {
    title: "Justificatifs",
    subtitle: "Consultez les justificatifs déposés.",
    placeholder: "Rechercher un justificatif...",
  },
  "/gestionnaire/statistiques": {
    title: "Statistiques",
    subtitle: "Consultez les indicateurs globaux.",
    placeholder: "Rechercher une statistique...",
  },
  "/gestionnaire/export": {
    title: "Export Excel",
    subtitle: "Téléchargez les exports disponibles.",
    placeholder: "Rechercher un export...",
  },
};

function getSession() {
  try {
    return JSON.parse(localStorage.getItem("session")) || null;
  } catch {
    return null;
  }
}

export default function GestionnaireTopbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const page = useMemo(() => {
    return (
      pageConfig[location.pathname] || {
        title: "Bienvenue",
        subtitle: "Espace gestionnaire",
        placeholder: "Rechercher...",
      }
    );
  }, [location.pathname]);

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const session = getSession();

  function handleSearch(e) {
    e.preventDefault();
    const trimmed = query.trim();

    if (!trimmed) {
      navigate(location.pathname);
      return;
    }

    navigate(`${location.pathname}?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <header className="student-topbar">
      <div className="topbar-left">
        <h3>{page.title}</h3>
        <p>{page.subtitle}</p>
      </div>

      <form className="topbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder={page.placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className="topbar-right">
        <div className="topbar-user">
          <strong>{session?.fullName || "Ismail Haji"}</strong>
          <span>{session?.group || "Gestionnaire"}</span>
        </div>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("session");
            navigate("/", { replace: true });
          }}
        >
          Déconnexion
        </button>
      </div>
    </header>
  );
}