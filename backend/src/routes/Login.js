import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { siape, password } = req.body;

  if (!siape || !password) {
    return res.status(400).json({ error: 'Siape e senha são obrigatórios.' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { siape: parseInt(siape, 10) } // converter para Int
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Siape ou senha incorretos.' });
    }

    const { password: _, ...userWithoutPassword } = user;

    return res.json({ message: 'Login realizado com sucesso', user: userWithoutPassword });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router;
