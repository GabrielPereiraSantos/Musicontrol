import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

// src/services/api.js (frontend)
const API_URL = "http://localhost:3000"; // endereço do backend

export async function createUser(data) {
  const res = await fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getUsers() {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
}


let users = []

async function getUser(){
  users = await api.get('/usuarios')
}

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
