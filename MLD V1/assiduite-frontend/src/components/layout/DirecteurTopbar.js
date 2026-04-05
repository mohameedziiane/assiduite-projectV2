import { useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const pageConfig = {
  "/directeur/dashboard": {
    title: "Tableau de Bord Exécutif",
    subtitle: "Vue d’ensemble de l’assiduité à l’échelle de l’institution.",
    placeholder: "Rechercher...",
  },
  "/directeur/rapports": {
    title: "Rapports globaux",
    subtitle: "Consultez et téléchargez les rapports globaux.",
    placeholder: "Rechercher un rapport...",
  },
  "/directeur/statistiques": {
    title: "Statistiques",
    subtitle: "Consultez les indicateurs et tendances globales.",
    placeholder: "Rechercher une statistique...",
  },
};

function getSession() {
  try {
    return JSON.parse(localStorage.getItem("session")) || null;
  } catch {
    return null;
  }
}

export default function DirecteurTopbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const page = useMemo(() => {
    return (
      pageConfig[location.pathname] || {
        title: "Bienvenue",
        subtitle: "Espace directeur",
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
          <strong>{session?.fullName || "Mohamed Mahi"}</strong>
          <span>{session?.group || "Directeur"}</span>
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