import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const API_URL = "http://localhost:3000"; // endereço do backend

async function createUser(data) {
  const res = await fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Erro ao cadastrar usuário");
  }
  return res.json();
}

function Cadastro() {
  const [form, setForm] = useState({
    name: "",
    siape: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const novoUsuario = await createUser({
        name: form.name,
        siape: form.siape,
        password: form.password, // precisa ser exatamente igual ao backend
      });

      console.log("Usuário cadastrado:", novoUsuario);
      alert("Cadastro realizado com sucesso!");
      setForm({ name: "", siape: "", password: "", confirmPassword: "" }); // limpa o form
    } catch (err) {
      console.error(err);
      alert("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Crie sua conta no musiControl</h2>
        <p>Gerencie com segurança o acesso à sala de música</p>
      </div>

      <div className="right-panel">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Cadastrar Usuário</h2>
          <input
            type="text"
            name="name"
            placeholder="Nome Completo"
            value={form.name}
            onChange={handleChange}
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Senha"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
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
