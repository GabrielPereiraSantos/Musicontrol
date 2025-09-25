import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Patrimonio from "./pages/Patrimonio";
import Relatorios from "./pages/Relatorios";
import Acesso from "./pages/Acesso";
import CadastrarDocente from "./pages/cadastrarDocente";
import CadastrarDiscente from "./pages/cadastrarDiscente";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/patrimonio" element={<Patrimonio />} />
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/acesso" element={<Acesso />} />
      <Route path="/cadastrarDocente" element={<CadastrarDocente />} />
      <Route path="/cadastrarDiscente" element={<CadastrarDiscente />} />
    </Routes>
  );
}

export default App;
