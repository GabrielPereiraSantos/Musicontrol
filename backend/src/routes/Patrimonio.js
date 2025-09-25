import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Listar todos os patrimônios
router.get("/", async (req, res) => {
  try {
    const lista = await prisma.patrimonio.findMany();
    res.status(200).json(lista);
  } catch (err) {
    console.error("Erro ao listar patrimônios:", err);
    res.status(500).json({ error: "Erro ao buscar patrimônios" });
  }
});

export default router;