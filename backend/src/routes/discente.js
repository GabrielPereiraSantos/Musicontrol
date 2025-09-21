// src/routes/discentes.js
import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Criar discente
router.post('/', async (req, res) => {
    try {
        const { name, matricula, email, telefone, liberado } = req.body;
        const newDiscente = await prisma.discente.create({
            data: { 
                name, 
                matricula, 
                email, 
                telefone,
                liberado: liberado ?? false // se não passar, false por padrão
            }
        });
        res.status(201).json(newDiscente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar discente' });
    }
});


// Listar todos os discentes
router.get("/", async (req, res) => {
    try {
        const discentes = await prisma.discente.findMany({
            orderBy: { name: 'asc' } // opcional: ordenar pelo nome
        });
        res.status(200).json(discentes);
    } catch (error) {
        console.error("GET /discentes error:", error);
        res.status(500).json({ error: 'Erro ao listar discentes' });
    }
});

// Buscar discente por ID
router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const discente = await prisma.discente.findUnique({ where: { id } });
        if (!discente) return res.status(404).json({ error: 'Discente não encontrado' });
        res.status(200).json(discente);
    } catch (error) {
        console.error("GET /discentes/:id error:", error);
        res.status(500).json({ error: 'Erro ao buscar discente' });
    }
});



// Atualizar discente
router.put('/:id', async (req, res) => {
    const discenteId = parseInt(req.params.id, 10);
    if (isNaN(discenteId)) return res.status(400).json({ error: 'ID inválido' });

    try {
        const { name, matricula, email, telefone, liberado } = req.body;
        const updatedDiscente = await prisma.discente.update({
            where: { id: discenteId },
            data: { name, matricula, email, telefone, liberado }
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
