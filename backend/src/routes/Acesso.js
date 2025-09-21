// acesso.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /acesso
router.get('/', async (req, res) => {
  try {
    // busca todos os discentes liberados
    const discentes = await prisma.discente.findMany({
      where: { liberado: true } // supondo que exista campo 'liberado'
    });

    // busca todos os doscentes liberados
    const doscentes = await prisma.doscente.findMany({
      where: { liberado: true } // supondo que exista campo 'liberado'
    });

    res.json({ discentes, doscentes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar liberados' });
  }
});

module.exports = router;
