import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api.js";

function Acesso() {
  const [docentes, setDocentes] = useState([]);
  const [discentes, setDiscentes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const listaDocentes = await api.getDocentes();
        const listaDiscentes = await api.getDiscentes();
        setDocentes(listaDocentes);
        setDiscentes(listaDiscentes);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    }
    fetchData();
  }, []);

  const handleAddDocente = async () => {
    const nome = prompt("Nome do docente:");
    if (!nome) return;

    try {
      const novo = await api.addDocente({ name: nome });
      setDocentes([...docentes, novo]);
    } catch (err) {
      console.error("Erro ao adicionar docente:", err);
    }
  };

  const handleAddDiscente = async () => {
    const nome = prompt("Nome do discente:");
    if (!nome) return;

    try {
      const novo = await api.addDiscente({ name: nome });
      setDiscentes([...discentes, novo]);
    } catch (err) {
      console.error("Erro ao adicionar discente:", err);
    }
  };

  return (
    <div className="page">
      <h2>Controle de Acesso</h2>
      <p>Gerencie quem pode entrar na sala de música.</p>

      <div style={{ display: "flex", gap: "2rem", marginBottom: "1rem" }}>
        {/* Quadrado Docente */}
        <div
          style={{
            border: "1px solid black",
            padding: "1rem",
            flex: 1,
            borderRadius: "8px",
          }}
        >
          <h3>Docentes</h3>
          <ul>
            {docentes.map((d) => (
              <li key={d.id}>{d.name}</li>
            ))}
          </ul>
          <button onClick={handleAddDocente}>Adicionar Docente</button>
        </div>

        {/* Quadrado Discente */}
        <div
          style={{
            border: "1px solid black",
            padding: "1rem",
            flex: 1,
            borderRadius: "8px",
          }}
        >
          <h3>Discentes</h3>
          <ul>
            {discentes.map((d) => (
              <li key={d.id}>{d.name}</li>
            ))}
          </ul>
          <button onClick={handleAddDiscente}>Adicionar Discente</button>
        </div>
      </div>

      <Link to="/dashboard">⬅ Voltar</Link>
    </div>
  );
}

export default Acesso;
