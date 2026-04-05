import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";

// Stagiaire
import StudentLayout from "./layouts/StudentLayout";
import StudentDashboardPage from "./pages/stagiaire/StudentDashboardPage";
import StudentAbsencesPage from "./pages/stagiaire/StudentAbsencesPage";
import StudentJustificatifPage from "./pages/stagiaire/StudentJustificatifPage";
import StudentBilletsPage from "./pages/stagiaire/StudentBilletsPage";
import StudentStatisticsPage from "./pages/stagiaire/StudentStatisticsPage";
import StudentProfilePage from "./pages/stagiaire/StudentProfilePage";

// Formateur
import FormateurLayout from "./layouts/FormateurLayout";
import FormateurDashboardPage from "./pages/formateur/FormateurDashboardPage";
import FormateurAbsencesPage from "./pages/formateur/FormateurAbsencesPage";
import FormateurBilletsPage from "./pages/formateur/FormateurBilletsPage";
import FormateurStatisticsPage from "./pages/formateur/FormateurStatisticsPage";
import FormateurCommentsPage from "./pages/formateur/FormateurCommentsPage";

// Gestionnaire
import GestionnaireLayout from "./layouts/GestionnaireLayout";
import GestionnaireDashboardPage from "./pages/gestionnaire/GestionnaireDashboardPage";
import GestionnaireStagiairesPage from "./pages/gestionnaire/GestionnaireStagiairesPage";
import GestionnaireGroupesPage from "./pages/gestionnaire/GestionnaireGroupesPage";
import GestionnaireBilletsPage from "./pages/gestionnaire/GestionnaireBilletsPage";
import GestionnaireJustificatifsPage from "./pages/gestionnaire/GestionnaireJustificatifsPage";
import GestionnaireStatisticsPage from "./pages/gestionnaire/GestionnaireStatisticsPage";
import GestionnaireExportPage from "./pages/gestionnaire/GestionnaireExportPage";

// Directeur
import DirecteurLayout from "./layouts/DirecteurLayout";
import DirecteurDashboardPage from "./pages/directeur/DirecteurDashboardPage";
import DirecteurReportsPage from "./pages/directeur/DirecteurReportsPage";
import DirecteurStatisticsPage from "./pages/directeur/DirecteurStatisticsPage";

function getSession() {
  try {
    return JSON.parse(localStorage.getItem("session")) || null;
  } catch {
    return null;
  }
}

function RequireRole({ role, children }) {
  const session = getSession();

  if (!session) {
    return <Navigate to="/" replace />;
  }

  if (session.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/stagiaire"
          element={
            <RequireRole role="stagiaire">
              <StudentLayout />
            </RequireRole>
          }
        >
          <Route index element={<Navigate to="/stagiaire/dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboardPage />} />
          <Route path="absences" element={<StudentAbsencesPage />} />
          <Route path="justificatif" element={<StudentJustificatifPage />} />
          <Route path="billets" element={<StudentBilletsPage />} />
          <Route path="statistiques" element={<StudentStatisticsPage />} />
          <Route path="profil" element={<StudentProfilePage />} />
        </Route>

        <Route
          path="/formateur"
          element={
            <RequireRole role="formateur">
              <FormateurLayout />
            </RequireRole>
          }
        >
          <Route index element={<Navigate to="/formateur/dashboard" replace />} />
          <Route path="dashboard" element={<FormateurDashboardPage />} />
          <Route path="absences" element={<FormateurAbsencesPage />} />
          <Route path="billets" element={<FormateurBilletsPage />} />
          <Route path="statistiques" element={<FormateurStatisticsPage />} />
          <Route path="commentaires" element={<FormateurCommentsPage />} />
        </Route>

        <Route
          path="/gestionnaire"
          element={
            <RequireRole role="gestionnaire">
              <GestionnaireLayout />
            </RequireRole>
          }
        >
          <Route index element={<Navigate to="/gestionnaire/dashboard" replace />} />
          <Route path="dashboard" element={<GestionnaireDashboardPage />} />
          <Route path="stagiaires" element={<GestionnaireStagiairesPage />} />
          <Route path="groupes" element={<GestionnaireGroupesPage />} />
          <Route path="billets" element={<GestionnaireBilletsPage />} />
          <Route path="justificatifs" element={<GestionnaireJustificatifsPage />} />
          <Route path="statistiques" element={<GestionnaireStatisticsPage />} />
          <Route path="export" element={<GestionnaireExportPage />} />
        </Route>

        <Route
          path="/directeur"
          element={
            <RequireRole role="directeur">
              <DirecteurLayout />
            </RequireRole>
          }
        >
          <Route index element={<Navigate to="/directeur/dashboard" replace />} />
          <Route path="dashboard" element={<DirecteurDashboardPage />} />
          <Route path="rapports" element={<DirecteurReportsPage />} />
          <Route path="statistiques" element={<DirecteurStatisticsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}