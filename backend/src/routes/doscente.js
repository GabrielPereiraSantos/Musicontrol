// src/routes/doscente.js
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// Criar Doscente
router.post("/", async (req, res) => {
  try {
    const { name, siape, email, telefone } = req.body;
    const novo = await prisma.doscente.create({
      data: { name, siape, email, telefone },
    });
    res.status(201).json(novo);
  } catch (err) {
    console.error("POST /doscente error:", err);
    res.status(500).json({ error: "Erro ao criar doscente" });
  }
});

// Listar todos os Doscentes
router.get("/", async (req, res) => {
  try {
    const lista = await prisma.doscente.findMany();
    res.status(200).json(lista);
  } catch (err) {
    console.error("GET /doscente error:", err);
    res.status(500).json({ error: "Erro ao listar doscentes" });
  }
});

// Buscar por ID
router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const item = await prisma.doscente.findUnique({ where: { id } });
    if (!item) return res.status(404).json({ error: "Doscente não encontrado" });
    res.status(200).json(item);
  } catch (err) {
    console.error("GET /doscente/:id error:", err);
    res.status(500).json({ error: "Erro ao buscar doscente" });
  }
});

// Atualizar
router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const atualizado = await prisma.doscente.update({
      where: { id },
      data: {
        name: req.body.name,
        siape: req.body.siape,
        email: req.body.email,
        telefone: req.body.telefone,
      },
    });
    res.status(200).json(atualizado);
  } catch (err) {
    console.error("PUT /doscente/:id error:", err);
    res.status(500).json({ error: "Erro ao atualizar doscente" });
  }
});

// Deletar
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    await prisma.doscente.delete({ where: { id } });
    res.status(200).json({ message: "Doscente deletado com sucesso" });
  } catch (err) {
    console.error("DELETE /doscente/:id error:", err);
    res.status(500).json({ error: "Erro ao deletar doscente" });
  }
});

export default router;
