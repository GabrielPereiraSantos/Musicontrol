import express from "express";
import cors from "cors";
import usuarios from "./src/routes/usuarios.js";
import doscente from "./src/routes/doscente.js";

const app = express();

app.use(cors());
app.use(express.json());

// prefixos (OBS: singular, conforme pediu)
app.use("/usuarios", usuarios);
app.use("/doscente", doscente);

app.get("/", (req, res) => res.json({ message: "Servidor rodando 🚀" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor online em http://localhost:${PORT}`));





//senhasegura*123


