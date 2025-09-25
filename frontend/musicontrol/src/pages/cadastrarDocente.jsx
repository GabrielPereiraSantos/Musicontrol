import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api.js";

function CadastrarDocente() {
  const [name, setName] = useState("");
  const [siape, setSiape] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.addDocente({
        name,
        siape: parseInt(siape, 10), // 🔥 conversão para número
        email,
        telefone,
        liberado: false,
      });
      alert("Docente cadastrado com sucesso!");
      navigate("/acesso");
    } catch (err) {
      console.error("Erro ao cadastrar docente:", err);
      alert("Erro ao cadastrar docente");
    }
  };

  return (
    <div className="page">
      <h2>Cadastrar Docente</h2>
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
          placeholder="SIAPE"
          value={siape}
          onChange={(e) => setSiape(e.target.value)}
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

export default CadastrarDocente;
