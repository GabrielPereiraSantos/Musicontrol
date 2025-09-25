import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// ---------------- Docentes -----------------

// GET /docentes - retorna todos os docentes
router.get('/docentes', async (req, res) => {
  try {
    const doscentes = await prisma.doscente.findMany();
    res.json(doscentes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar docentes' });
  }
});

// POST /docentes - adiciona novo docente
router.post('/docentes', async (req, res) => {
  const { name, siape, email, telefone, liberado } = req.body;
  try {
    const novo = await prisma.doscente.create({
      data: { name, siape, email, telefone, liberado: liberado ?? true },
    });
    res.status(201).json(novo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar docente' });
  }
});

// ---------------- Discentes -----------------

// GET /discentes - retorna todos os discentes
router.get('/discentes', async (req, res) => {
  try {
    const discentes = await prisma.discente.findMany();
    res.json(discentes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar discentes' });
  }
});

// POST /discentes - adiciona novo discente
router.post('/discentes', async (req, res) => {
  const { name, matricula, email, telefone, liberado } = req.body;
  try {
    const novo = await prisma.discente.create({
      data: { name, matricula, email, telefone, liberado: liberado ?? true },
    });
    res.status(201).json(novo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar discente' });
  }
});

export default router;
