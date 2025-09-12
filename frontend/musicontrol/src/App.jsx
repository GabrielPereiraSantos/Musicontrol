import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Patrimonio from "./pages/Patrimonio";
import Relatorios from "./pages/Relatorios";
import Acesso from "./pages/Acesso";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/patrimonio" element={<Patrimonio />} />
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/acesso" element={<Acesso />} />
    </Routes>
  );
}

export default App;
