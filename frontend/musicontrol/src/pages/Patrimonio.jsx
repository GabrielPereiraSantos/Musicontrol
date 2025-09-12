import React from "react";
import { Link } from "react-router-dom";

function Patrimonio() {
  return (
    <div className="page">
      <h2>Patrimônios</h2>
      <p>Aqui será exibida a lista de patrimônios cadastrados.</p>
      <Link to="/dashboard">⬅ Voltar</Link>
    </div>
  );
}

export default Patrimonio;
