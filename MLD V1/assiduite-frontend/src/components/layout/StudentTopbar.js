import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const pageConfig = {
  "/stagiaire/dashboard": {
    title: "Bienvenue",
    subtitle: "Suivez vos absences, billets et statistiques.",
    placeholder: "Rechercher dans le tableau de bord...",
  },
  "/stagiaire/absences": {
    title: "Mes absences",
    subtitle: "Consultez l’historique complet de vos absences.",
    placeholder: "Rechercher par module ou formateur...",
  },
  "/stagiaire/justificatif": {
    title: "Déposer un justificatif",
    subtitle: "Ajoutez un document pour régulariser votre absence.",
    placeholder: "Rechercher un justificatif...",
  },
  "/stagiaire/billets": {
    title: "Mes billets",
    subtitle: "Retrouvez vos billets et autorisations.",
    placeholder: "Rechercher un billet...",
  },
  "/stagiaire/statistiques": {
    title: "Statistiques",
    subtitle: "Suivez votre évolution et vos indicateurs.",
    placeholder: "Rechercher une statistique...",
  },
  "/stagiaire/profil": {
    title: "Profil",
    subtitle: "Consultez vos informations personnelles et académiques.",
    placeholder: "Rechercher une information du profil...",
  },
};

function getSession() {
  try {
    return JSON.parse(localStorage.getItem("session")) || null;
  } catch {
    return null;
  }
}

export default function StudentTopbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const page = useMemo(() => {
    return (
      pageConfig[location.pathname] || {
        title: "Bienvenue",
        subtitle: "Suivez vos absences, billets et statistiques.",
        placeholder: "Rechercher...",
      }
    );
  }, [location.pathname]);

  const [session, setSession] = useState(getSession());
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams, location.pathname]);

  useEffect(() => {
    function syncSession() {
      setSession(getSession());
    }

    window.addEventListener("profile-updated", syncSession);
    return () => window.removeEventListener("profile-updated", syncSession);
  }, []);

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
          <strong>{session?.fullName || "Taha Alaoui"}</strong>
          <span>{session?.group || "DD101"}</span>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </header>
  );
}