// server.js
import express from "express";
import cors from "cors";
import usuarios from "./src/routes/usuarios.js"

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importa suas rotas de usuário
app.use(usuarios)

// Rota inicial (teste)
app.get("/", (req, res) => {
  res.json({ message: "Servidor rodando 🚀" });
});

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor online em http://localhost:${PORT}`);
});




//senhasegura*123


