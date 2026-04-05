import { Navigate, Outlet } from "react-router-dom";
import DirecteurSidebar from "../components/layout/DirecteurSidebar";
import DirecteurTopbar from "../components/layout/DirecteurTopbar";
import "./StudentLayout.css";

export default function DirecteurLayout() {
  let session = null;

  try {
    session = JSON.parse(localStorage.getItem("session"));
  } catch {
    session = null;
  }

  if (!session || session.role !== "directeur") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="student-shell">
      <DirecteurSidebar />

      <div className="student-main">
        <DirecteurTopbar />

        <main className="student-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}