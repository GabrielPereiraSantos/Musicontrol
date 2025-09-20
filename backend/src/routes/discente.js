// src/routes/discentes.js
import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Criar discente
router.post('/', async (req, res) => {
    try {
        const { name, matricula, email, telefone } = req.body;
        const newDiscente = await prisma.discente.create({
            data: { name, matricula, email, telefone }
        });
        res.status(201).json(newDiscente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar discente' });
    }
});

// Listar todos os discentes
router.get('/', async (req, res) => {
    try {
        const discentes = await prisma.discente.findMany();
        res.status(200).json(discentes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar discentes' });
    }
});

// Atualizar discente
router.put('/:id', async (req, res) => {
    const discenteId = parseInt(req.params.id, 10);
    if (isNaN(discenteId)) return res.status(400).json({ error: 'ID inválido' });

    try {
        const { name, matricula, email, telefone } = req.body;
        const updatedDiscente = await prisma.discente.update({
            where: { id: discenteId },
            data: { name, matricula, email, telefone }
        });
        res.status(200).json(updatedDiscente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar discente' });
    }
});

// Deletar discente
router.delete('/:id', async (req, res) => {
    const discenteId = parseInt(req.params.id, 10);
    if (isNaN(discenteId)) return res.status(400).json({ error: 'ID inválido' });

    try {
        await prisma.discente.delete({ where: { id: discenteId } });
        res.status(200).json({ message: 'Discente deletado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar discente' });
    }
});

export default router;
