import { useEffect, useMemo, useState } from "react";

function getSession() {
  try {
    return JSON.parse(localStorage.getItem("session")) || null;
  } catch {
    return null;
  }
}

function getStoredProfile() {
  try {
    return JSON.parse(localStorage.getItem("studentProfile")) || null;
  } catch {
    return null;
  }
}

export default function StudentProfilePage() {
  const session = getSession();

  const defaultProfile = useMemo(
    () => ({
      firstName: "Taha",
      lastName: "Alaoui",
      email: session?.email || "zouhirchat0@gmail.com",
      groupe: session?.group || "DD101",
      filiere: session?.filiere || "Développement Digital",
      niveau: "1ère année",
      phone: "+212 6 12 34 56 78",
      city: "Taza",
      address: "Hay Al Qods, Taza",
      dateNaissance: "12/08/2004",
      cin: "AB123456",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    }),
    [session]
  );

  const [profile, setProfile] = useState(defaultProfile);
  const [formData, setFormData] = useState(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const stored = getStoredProfile();
    if (stored) {
      setProfile(stored);
      setFormData(stored);
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleEditToggle() {
    setFormData(profile);
    setIsEditing(true);
  }

  function handleCancel() {
    setFormData(profile);
    setIsEditing(false);
  }

  function handleSave(e) {
    e.preventDefault();

    const updatedProfile = { ...formData };
    setProfile(updatedProfile);

    localStorage.setItem("studentProfile", JSON.stringify(updatedProfile));

    const currentSession = getSession() || {};
    const updatedSession = {
      ...currentSession,
      fullName: `${updatedProfile.firstName} ${updatedProfile.lastName}`,
      email: updatedProfile.email,
      group: updatedProfile.groupe,
      filiere: updatedProfile.filiere,
      role: "stagiaire",
    };

    localStorage.setItem("session", JSON.stringify(updatedSession));
    window.dispatchEvent(new Event("profile-updated"));

    setIsEditing(false);
  }

  return (
    <div className="page-stack">
      <div className="page-header-row">
        <div>
          <h2>Profil</h2>
          <p>Consultez vos informations personnelles et académiques.</p>
        </div>

        {!isEditing ? (
          <button className="primary-btn" onClick={handleEditToggle}>
            Modifier mes informations
          </button>
        ) : (
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button className="primary-btn" onClick={handleSave}>
              Enregistrer
            </button>
            <button className="secondary-btn" onClick={handleCancel}>
              Annuler
            </button>
          </div>
        )}
      </div>

      {!isEditing ? (
        <div className="profile-grid">
          <section className="profile-card">
            <div className="profile-hero">
              <img
                src={profile.photo}
                alt={`${profile.firstName} ${profile.lastName}`}
                className="profile-avatar"
              />

              <div className="profile-hero-info">
                <h3>
                  {profile.firstName} {profile.lastName}
                </h3>
                <p>{profile.filiere}</p>

                <div className="profile-badges">
                  <span className="status-badge info">{profile.groupe}</span>
                  <span className="status-badge success">{profile.niveau}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="profile-card">
            <h3 className="section-title">Informations personnelles</h3>

            <div className="profile-info-grid">
              <div className="info-item">
                <span>Prénom</span>
                <strong>{profile.firstName}</strong>
              </div>

              <div className="info-item">
                <span>Nom</span>
                <strong>{profile.lastName}</strong>
              </div>

              <div className="info-item">
                <span>Email</span>
                <strong>{profile.email}</strong>
              </div>

              <div className="info-item">
                <span>Téléphone</span>
                <strong>{profile.phone}</strong>
              </div>

              <div className="info-item">
                <span>Date de naissance</span>
                <strong>{profile.dateNaissance}</strong>
              </div>

              <div className="info-item">
                <span>CIN</span>
                <strong>{profile.cin}</strong>
              </div>

              <div className="info-item full">
                <span>Adresse</span>
                <strong>{profile.address}</strong>
              </div>

              <div className="info-item">
                <span>Ville</span>
                <strong>{profile.city}</strong>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <section className="content-card">
          <form className="form-grid" onSubmit={handleSave}>
            <div className="profile-info-grid">
              <label>
                <span>Prénom</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Nom</span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Téléphone</span>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Date de naissance</span>
                <input
                  type="text"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>CIN</span>
                <input
                  type="text"
                  name="cin"
                  value={formData.cin}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Ville</span>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Groupe</span>
                <input
                  type="text"
                  name="groupe"
                  value={formData.groupe}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Filière</span>
                <input
                  type="text"
                  name="filiere"
                  value={formData.filiere}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Niveau</span>
                <input
                  type="text"
                  name="niveau"
                  value={formData.niveau}
                  onChange={handleChange}
                />
              </label>

              <label className="full">
                <span>Adresse</span>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </label>

              <label className="full">
                <span>Photo URL</span>
                <input
                  type="text"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                />
              </label>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}