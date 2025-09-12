import React from "react";
import { Link } from "react-router-dom";

function Relatorios() {
  return (
    <div className="page">
      <h2>Relatórios</h2>
      <p>Aqui serão exibidos gráficos e relatórios do uso da sala.</p>
      <Link to="/dashboard">⬅ Voltar</Link>
    </div>
  );
}

export default Relatorios;
