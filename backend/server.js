import express from "express";
import cors from "cors";
import usuarios from "./src/routes/usuarios.js";
import doscente from "./src/routes/doscente.js";
import discente from './src/routes/discente.js';
import login from './src/routes/Login.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/usuarios", usuarios);
app.use("/doscente", doscente);
app.use('/discente', discente);
app.use("/Login", login);

app.get("/", (req, res) => res.json({ message: "Servidor rodando 🚀" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor online em http://localhost:${PORT}`));








//senhasegura*123


