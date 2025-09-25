import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api.js";

function Patrimonio() {
  const [patrimonios, setPatrimonios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await api.getPatrimonios();
        setPatrimonios(data);
      } catch (err) {
        console.error("Erro ao buscar patrimônios:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="page">
      <h2>Patrimônio da Sala de Música</h2>

      {patrimonios.length > 0 ? (
        <ul>
          {patrimonios.map((p) => (
            <li key={p.id}>
              {p.name} - {p.descricao || "Sem descrição"}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum patrimônio cadastrado.</p>
      )}

      <Link to="/dashboard">⬅ Voltar</Link>
    </div>
  );
}

export default Patrimonio;
