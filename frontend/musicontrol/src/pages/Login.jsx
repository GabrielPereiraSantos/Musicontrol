import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; // seu estilo global

export default function Login() {
  const navigate = useNavigate();
  const [siape, setSiape] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Aqui você poderia validar com backend futuramente
    if (siape && senha) {
      navigate("/dashboard"); 
    } else {
      alert("Preencha os campos!");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="int"
          placeholder="SIAPE"
          value={email}
          onChange={(e) => setSiape(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
