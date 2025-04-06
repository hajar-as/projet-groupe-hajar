import React from "react";
import "../styles/Signup.css";
import travelImage from "../assets/travel-bg.jpg";

function Signup() {
  return (
    <div className="signup-container">
      <div className="form-section">
        <h1 className="site-name">Virtual Travel</h1>
        <h2>Créer un compte</h2>
        <form>
          <input type="text" placeholder="Nom complet" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Mot de passe" required />
          <input type="password" placeholder="Confirmer le mot de passe" required />
          <button type="submit">S'inscrire</button>
        </form>
        <p className="login-link">Déjà un compte ? <a href="/login">Se connecter</a></p>
      </div>
      <div className="image-section">
        <img src={travelImage} alt="Travel background" />
      </div>
    </div>
  );
}

export default Signup;
