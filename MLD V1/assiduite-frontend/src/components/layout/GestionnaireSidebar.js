import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Tableau de bord", path: "/gestionnaire/dashboard", icon: "◫" },
  { label: "Gérer stagiaires", path: "/gestionnaire/stagiaires", icon: "◪" },
  { label: "Affecter groupes", path: "/gestionnaire/groupes", icon: "◎" },
  { label: "Générer billets", path: "/gestionnaire/billets", icon: "◩" },
  { label: "Justificatifs", path: "/gestionnaire/justificatifs", icon: "▣" },
  { label: "Statistiques", path: "/gestionnaire/statistiques", icon: "◧" },
  { label: "Export Excel", path: "/gestionnaire/export", icon: "▢" },
];

export default function GestionnaireSidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("session");
    navigate("/", { replace: true });
  }

  return (
    <aside className="student-sidebar gestionnaire-sidebar">
      <div className="sidebar-brand gestionnaire-brand">
        <div className="brand-square">📁</div>
        <div>
          <h2>Gestion</h2>
          <p>Assiduité</p>
        </div>
      </div>

      <nav className="sidebar-nav gestionnaire-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link gestionnaire-link active"
                : "sidebar-link gestionnaire-link"
            }
          >
            <span className="gestionnaire-link-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button className="gestionnaire-logout" onClick={handleLogout}>
        <span>↩</span>
        <span>Se déconnecter</span>
      </button>
    </aside>
  );
}