import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const API_URL = "http://localhost:3000"; // endereço do backend

// Função para chamar o backend
async function loginUser(data) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Siape ou senha incorretos");
  }

  return res.json();
}

function Login() {
  const [form, setForm] = useState({ siape: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        siape: parseInt(form.siape, 10), // converte para Int
        password: form.password,
      });

      console.log("Login bem-sucedido:", response.user);

      // Salva usuário no localStorage
      localStorage.setItem("user", JSON.stringify(response.user));

      // Redireciona para Dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Siape ou senha incorretos");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Bem-vindo ao musiControl</h2>
        <p>Controle moderno para a sala de música do IFPR</p>
      </div>

      <div className="right-panel">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="text"
            name="siape"
            placeholder="SIAPE"
            value={form.siape}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={form.password}
            onChange={handleChange}
            required
          />
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
