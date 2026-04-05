import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const roles = [
  {
    id: "stagiaire",
    title: "Stagiaire",
    subtitle: "ABSENCES • BILLETS • JUSTIFICATIFS",
    buttonLabel: "SE CONNECTER EN TANT QUE STAGIAIRE",
    icon: "graduation",
  },
  {
    id: "formateur",
    title: "Formateur",
    subtitle: "SAISIE • GROUPES • COMMENTAIRES",
    buttonLabel: "SE CONNECTER EN TANT QUE FORMATEUR",
    icon: "briefcase",
  },
  {
    id: "gestionnaire",
    title: "Gestionnaire",
    subtitle: "ADMINISTRATION • VALIDATION • BILLETS",
    buttonLabel: "SE CONNECTER EN TANT QUE GESTIONNAIRE",
    icon: "shield",
  },
  {
    id: "directeur",
    title: "Directeur",
    subtitle: "RAPPORTS • KPIS • STRATÉGIE",
    buttonLabel: "SE CONNECTER EN TANT QUE DIRECTEUR",
    icon: "chart",
  },
];

function getDefaultPath(role) {
  switch (role) {
    case "stagiaire":
      return "/stagiaire/dashboard";
    case "formateur":
      return "/formateur/dashboard";
    case "gestionnaire":
      return "/gestionnaire/dashboard";
    case "directeur":
      return "/directeur/dashboard";
    default:
      return "/";
  }
}

function RoleIcon({ type, active }) {
  const color = active ? "#ffffff" : "#9aa4b5";
  const bgClass = active ? "active" : "";

  return (
    <div className={`role-icon-box ${bgClass}`}>
      {type === "graduation" && (
        <svg viewBox="0 0 24 24" className="role-svg" aria-hidden="true">
          <path
            d="M2.5 9.2 12 4l9.5 5.2L12 14.4 2.5 9.2Z"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M6.2 11.2v4c0 .4.2.8.6 1 1.5.9 3.2 1.4 5.2 1.4s3.7-.5 5.2-1.4c.4-.2.6-.6.6-1v-4"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5 9.6v4.8"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )}

      {type === "briefcase" && (
        <svg viewBox="0 0 24 24" className="role-svg" aria-hidden="true">
          <rect
            x="3"
            y="7"
            width="18"
            height="12"
            rx="2.5"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
          />
          <path
            d="M9 7V5.5C9 4.7 9.7 4 10.5 4h3c.8 0 1.5.7 1.5 1.5V7"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M3 11.2h18"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )}

      {type === "shield" && (
        <svg viewBox="0 0 24 24" className="role-svg" aria-hidden="true">
          <path
            d="M12 3.8 18.5 6v5.2c0 4-2.5 7.3-6.5 9-4-1.7-6.5-5-6.5-9V6L12 3.8Z"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="m9.4 12.1 1.8 1.8 3.6-4"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {type === "chart" && (
        <svg viewBox="0 0 24 24" className="role-svg" aria-hidden="true">
          <path
            d="M4 19.5h16"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 17V9.5"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 17V5.5"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17 17v-7"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
}

function FieldIcon({ type }) {
  const color = "#96a0b2";

  return (
    <span className="field-icon" aria-hidden="true">
      {type === "email" && (
        <svg viewBox="0 0 24 24" className="field-svg">
          <rect
            x="3"
            y="5.5"
            width="18"
            height="13"
            rx="2.5"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
          />
          <path
            d="m4.5 7 7.5 5.5L19.5 7"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {type === "password" && (
        <svg viewBox="0 0 24 24" className="field-svg">
          <rect
            x="4"
            y="10"
            width="16"
            height="10"
            rx="2.5"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
          />
          <path
            d="M8 10V8.2A4 4 0 0 1 12 4a4 4 0 0 1 4 4.2V10"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}

export default function LoginPage() {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("stagiaire");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const selectedRoleData = useMemo(
    () => roles.find((role) => role.id === selectedRole),
    [selectedRole]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Merci de remplir l'email et le mot de passe.");
      return;
    }

    const session = {
      role: selectedRole,
      email: formData.email,
      rememberMe,
      fullName: "Utilisateur",
    };

    localStorage.setItem("session", JSON.stringify(session));
    navigate(getDefaultPath(selectedRole), { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>Connexion</h1>
          <p>Sélectionnez votre profil pour accéder à votre espace.</p>
        </div>

        <div className="role-section">
          <span className="section-label">CHOISISSEZ VOTRE RÔLE</span>

          <div className="roles-grid">
            {roles.map((role) => {
              const active = selectedRole === role.id;

              return (
                <button
                  key={role.id}
                  type="button"
                  className={`role-card ${active ? "active" : ""}`}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <RoleIcon type={role.icon} active={active} />

                  <div className="role-text">
                    <h3>{role.title}</h3>
                    <p>{role.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="inputs-grid">
            <label className="input-group">
              <span>Email institutionnel</span>
              <div className="input-wrap">
                <FieldIcon type="email" />
                <input
                  type="email"
                  name="email"
                  placeholder="nom.prenom@institution.ma"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label className="input-group">
              <span>Mot de passe</span>
              <div className="input-wrap">
                <FieldIcon type="password" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </label>
          </div>

          <div className="login-options">
            <label className="remember-row">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Se souvenir de moi</span>
            </label>

            <button
              type="button"
              className="forgot-link"
              onClick={() => alert("Fonction frontend uniquement.")}
            >
              Mot de passe oublié ?
            </button>
          </div>

          {error ? <div className="form-error">{error}</div> : null}

          <button type="submit" className="login-submit-btn">
            {selectedRoleData?.buttonLabel || "SE CONNECTER"}
          </button>
        </form>
      </div>
    </div>
  );
}