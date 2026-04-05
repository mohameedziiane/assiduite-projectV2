import { Navigate, Outlet } from "react-router-dom";
import GestionnaireSidebar from "../components/layout/GestionnaireSidebar";
import GestionnaireTopbar from "../components/layout/GestionnaireTopbar";
import "./StudentLayout.css";

export default function GestionnaireLayout() {
  let session = null;

  try {
    session = JSON.parse(localStorage.getItem("session"));
  } catch {
    session = null;
  }

  if (!session || session.role !== "gestionnaire") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="student-shell">
      <GestionnaireSidebar />
      <div className="student-main">
        <GestionnaireTopbar />
        <main className="student-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}