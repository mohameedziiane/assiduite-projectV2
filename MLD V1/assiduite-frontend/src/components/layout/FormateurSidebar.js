import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Tableau de bord", path: "/formateur/dashboard", icon: "◫" },
  { label: "Saisie des absences", path: "/formateur/absences", icon: "◪" },
  { label: "Billets actifs", path: "/formateur/billets", icon: "◩" },
  { label: "Statistiques groupe", path: "/formateur/statistiques", icon: "◧" },
  { label: "Commentaires", path: "/formateur/commentaires", icon: "▢" },
];

export default function FormateurSidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("session");
    navigate("/", { replace: true });
  }

  return (
    <aside className="student-sidebar formateur-sidebar">
      <div className="sidebar-brand formateur-brand">
        <div className="brand-square">📅</div>

        <div>
          <h2>Gestion</h2>
          <p>Assiduité</p>
        </div>
      </div>

      <nav className="sidebar-nav formateur-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link formateur-link active"
                : "sidebar-link formateur-link"
            }
          >
            <span className="formateur-link-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button className="formateur-logout" onClick={handleLogout}>
        <span>↩</span>
        <span>Se déconnecter</span>
      </button>
    </aside>
  );
}