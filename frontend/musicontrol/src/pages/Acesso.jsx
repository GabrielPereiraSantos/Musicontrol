import React from "react";
import { Link } from "react-router-dom";

function Acesso() {
  return (
    <div className="page">
      <h2>Controle de Acesso</h2>
      <p>Aqui será possível gerenciar quem pode entrar na sala de música.</p>
      <Link to="/dashboard">⬅ Voltar</Link>
    </div>
  );
}

export default Acesso;
