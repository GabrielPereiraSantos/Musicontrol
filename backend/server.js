import express from "express";
import cors from "cors";
import usuarios from "./src/routes/usuarios.js";
import doscente from "./src/routes/docente.js";
import discente from './src/routes/discente.js';
import login from './src/routes/login.js';
import patrimonio from "./src/routes/patrimonio.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/usuarios", usuarios);
app.use("/docente", doscente);
app.use('/discente', discente);
app.use("/login", login);
app.use("/patrimonio", patrimonio);


app.get("/", (req, res) => res.json({ message: "Servidor rodando 🚀" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor online em http://localhost:${PORT}`));








//senhasegura*123


