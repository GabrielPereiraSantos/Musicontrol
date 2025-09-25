import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api.js";

function Patrimonio() {
  const [patrimonios, setPatrimonios] = useState([]);
  const navigate = useNavigate();

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
              <strong>Número:</strong> {p.numero} |{" "}
              <strong>Nome:</strong> {p.name} |{" "}
              <strong>Descrição:</strong> {p.descricao}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum patrimônio cadastrado.</p>
      )}

      <br />
      <Link to="/dashboard">⬅ Voltar</Link>
    </div>
  );
}

export default Patrimonio;
