import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api.js";

function CadastrarDiscente() {
  const [name, setName] = useState("");
  const [matricula, setMatricula] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.addDiscente({
        name,
        matricula: parseInt(matricula, 10), // 🔥 conversão para número
        email,
        telefone,
        liberado: false,
      });
      alert("Discente cadastrado com sucesso!");
      navigate("/acesso");
    } catch (err) {
      console.error("Erro ao cadastrar discente:", err);
      alert("Erro ao cadastrar discente");
    }
  };

  return (
    <div className="page">
      <h2>Cadastrar Discente</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <button type="submit">Salvar</button>
      </form>
      <Link to="/acesso">⬅ Voltar</Link>
    </div>
  );
}

export default CadastrarDiscente;
