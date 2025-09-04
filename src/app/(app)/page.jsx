"use client";

import { useState, useEffect } from "react";
import { login, register, getProfile, logout } from "../../lib/authClient";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // --- Essayer de récupérer le profile automatiquement au chargement
  useEffect(() => {
    getProfile()
      .then(setUser)
      .catch(() => {});
  }, []);

  // --- Login
  const handleLogin = async () => {
    try {
      await login(identifier, password);
      const profile = await getProfile();
      setUser(profile);
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    }
  };

  // --- Register
  const handleRegister = async () => {
    try {
      await register({ identifier, password, firstName, lastName, email });
      alert("Utilisateur créé, vous pouvez vous connecter !");
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    }
  };

  // --- Logout
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  if (!user) {
    return (
      <div>
        <h2>Connexion / Inscription</h2>

        <input
          placeholder="Identifiant"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <input
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleLogin}>Se connecter</button>
        <button onClick={handleRegister}>S’inscrire</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Bienvenue, {user.firstName} {user.lastName}</h2>
      <p>Email : {user.email}</p>
      <p>Ville : {user.city}</p>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
}
