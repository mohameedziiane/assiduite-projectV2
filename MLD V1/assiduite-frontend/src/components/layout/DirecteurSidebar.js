import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Tableau de bord", path: "/directeur/dashboard", icon: "◫" },
  { label: "Rapports globaux", path: "/directeur/rapports", icon: "◪" },
  { label: "Statistiques", path: "/directeur/statistiques", icon: "◧" },
];

export default function DirecteurSidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("session");
    navigate("/", { replace: true });
  }

  return (
    <aside className="student-sidebar directeur-sidebar">
      <div className="sidebar-brand directeur-brand">
        <div className="brand-square">📊</div>

        <div>
          <h2>Gestion</h2>
          <p>Assiduité</p>
        </div>
      </div>

      <nav className="sidebar-nav directeur-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link directeur-link active"
                : "sidebar-link directeur-link"
            }
          >
            <span className="directeur-link-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button className="directeur-logout" onClick={handleLogout}>
        <span>↩</span>
        <span>Se déconnecter</span>
      </button>
    </aside>
  );
}