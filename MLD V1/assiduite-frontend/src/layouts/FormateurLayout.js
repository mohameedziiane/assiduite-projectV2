import { Navigate, Outlet } from "react-router-dom";
import FormateurSidebar from "../components/layout/FormateurSidebar";
import FormateurTopbar from "../components/layout/FormateurTopbar";
import "./StudentLayout.css";

export default function FormateurLayout() {
  let session = null;

  try {
    session = JSON.parse(localStorage.getItem("session"));
  } catch {
    session = null;
  }

  if (!session || session.role !== "formateur") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="student-shell">
      <FormateurSidebar />

      <div className="student-main">
        <FormateurTopbar />

        <main className="student-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}