import { useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const pageConfig = {
  "/formateur/dashboard": {
    title: "Bienvenue",
    subtitle: "Suivez vos groupes et la saisie des absences.",
    placeholder: "Rechercher dans le tableau de bord...",
  },
  "/formateur/absences": {
    title: "Saisie des absences",
    subtitle: "Marquez les absences de votre groupe.",
    placeholder: "Rechercher un stagiaire...",
  },
  "/formateur/billets": {
    title: "Billets actifs",
    subtitle: "Consultez les billets actifs des stagiaires.",
    placeholder: "Rechercher un billet...",
  },
  "/formateur/statistiques": {
    title: "Statistiques groupe",
    subtitle: "Consultez les statistiques du groupe.",
    placeholder: "Rechercher une statistique...",
  },
  "/formateur/commentaires": {
    title: "Commentaires",
    subtitle: "Ajoutez ou consultez les remarques.",
    placeholder: "Rechercher un commentaire...",
  },
};

function getSession() {
  try {
    return JSON.parse(localStorage.getItem("session")) || null;
  } catch {
    return null;
  }
}

export default function FormateurTopbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const page = useMemo(() => {
    return (
      pageConfig[location.pathname] || {
        title: "Bienvenue",
        subtitle: "Espace formateur",
        placeholder: "Rechercher...",
      }
    );
  }, [location.pathname]);

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const session = getSession();

  function handleLogout() {
    localStorage.removeItem("session");
    navigate("/", { replace: true });
  }

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
          <strong>{session?.fullName || "M. Adil Tais"}</strong>
          <span>{session?.group || "DEV-201"}</span>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </header>
  );
}