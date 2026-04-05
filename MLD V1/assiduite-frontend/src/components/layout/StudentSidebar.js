import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Tableau de bord", path: "/stagiaire/dashboard" },
  { label: "Mes absences", path: "/stagiaire/absences" },
  { label: "Justificatif", path: "/stagiaire/justificatif" },
  { label: "Mes billets", path: "/stagiaire/billets" },
  { label: "Statistiques", path: "/stagiaire/statistiques" },
  { label: "Profil", path: "/stagiaire/profil" },
];

export default function StudentSidebar() {
  return (
    <aside className="student-sidebar">
      <div className="sidebar-brand">
        <h2>Assiduité</h2>
        <p>Espace stagiaire</p>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}