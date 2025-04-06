import React from "react";
import "../styles/Signup.css";
import travelImage from "../assets/travel-bg.jpg";

function Login() {
  return (
    <div className="signup-container">
      <div className="form-section">
        <h1 className="site-name">Virtual Travel</h1>
        <h2>Connexion</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Mot de passe" required />
          <button type="submit">Se connecter</button>
        </form>
        <p className="login-link">Pas encore de compte ? <a href="/signup">Créer un compte</a></p>
      </div>
      <div className="image-section">
        <img src={travelImage} alt="Travel background" />
      </div>
    </div>
  );
}

export default Login;
