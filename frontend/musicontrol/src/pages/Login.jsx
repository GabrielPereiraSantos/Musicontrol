import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
  return (
    <div className="container">
      <div className="left-panel">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Bem-vindo ao musiControl</h2>
        <p>Controle moderno para a sala de música do IFPR</p>
      </div>

      <div className="right-panel">
        <form className="form">
          <h2>Login</h2>
          <input type="text" placeholder="Usuário" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
          <p>
            Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
