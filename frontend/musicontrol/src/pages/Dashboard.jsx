import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/patrimonio">Patrimônios</Link></li>
          <li><Link to="/relatorios">Relatórios</Link></li>
          <li><Link to="/acesso">Controle de Acesso</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
