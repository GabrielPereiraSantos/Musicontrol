import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Cadastro() {
  return (
    <div className="container">
      <div className="left-panel">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Crie sua conta no musiControl</h2>
        <p>Gerencie com segurança o acesso à sala de música</p>
      </div>

      <div className="right-panel">
        <form className="form">
          <h2>Cadastrar Usuário</h2>
          <input type="text" placeholder="Nome Completo" required />
          <input type="int" placeholder="SIAPE" required />
          <input type="password" placeholder="Senha" required />
          <input type="password" placeholder="Confirmar Senha" required />
          <button type="submit">Cadastrar</button>

          <p>
            Já possui conta? <Link to="/">Faça login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
