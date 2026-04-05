import { Navigate, Outlet } from "react-router-dom";
import StudentSidebar from "../components/layout/StudentSidebar";
import StudentTopbar from "../components/layout/StudentTopbar";
import "./StudentLayout.css";

export default function StudentLayout() {
  let session = null;

  try {
    session = JSON.parse(localStorage.getItem("session"));
  } catch {
    session = null;
  }

  if (!session || session.role !== "stagiaire") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="student-shell">
      <StudentSidebar />

      <div className="student-main">
        <StudentTopbar />

        <main className="student-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}