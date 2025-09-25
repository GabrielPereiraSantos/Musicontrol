import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Pegar usuário do localStorage
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    } else {
      // Se não estiver logado, redireciona para login
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // volta para login
  };

  if (!user) return null; // evita renderizar antes do useEffect

  return (
    <div className="dashboard">
      <h1>Bem-vindo, {user.name}!</h1>
      <nav>
        <ul>
          <li><Link to="/patrimonio">Patrimônios</Link></li>
          <li><Link to="/relatorios">Relatórios</Link></li>
          <li><Link to="/acesso">Controle de Acesso</Link></li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default Dashboard;
