// server.js
import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importa suas rotas de usuário
import userRoutes from "./src/routes/CadastroUsuario.js"; 
app.use("/users", userRoutes);

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


