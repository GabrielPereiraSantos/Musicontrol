import { useEffect, useState } from "react";
import API from "../services/api";

function Patrimonio() {
  const [patrimonios, setPatrimonios] = useState([]);

  useEffect(() => {
    // Chama o backend
    API.get("/patrimonio")
      .then((response) => {
        setPatrimonios(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar patrimônios:", error);
      });
  }, []);

  return (
    <div>
      <h1>Patrimônio da Sala de Música</h1>
      <ul>
        {patrimonios.map((item) => (
          <li key={item.id}>
            <strong>{item.nome}</strong> - {item.descricao} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Patrimonio;
