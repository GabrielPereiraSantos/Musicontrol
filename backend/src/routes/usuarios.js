// src/routes/usuarios.js
import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Criar usuário
router.post('/', async (req, res) => {
    try {
        const { name, siape, password } = req.body;
        const newUser = await prisma.user.create({
            data: { name, siape, password }
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

// Listar todos os usuários
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
});

// Atualizar usuário
router.put('/:id', async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) return res.status(400).json({ error: 'ID inválido' });

    try {
        const { name, siape, password } = req.body;
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { name, siape, password }
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

// Deletar usuário
router.delete('/:id', async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) return res.status(400).json({ error: 'ID inválido' });

    try {
        await prisma.user.delete({ where: { id: userId } });
        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});

export default router;


//senhasegura*123


