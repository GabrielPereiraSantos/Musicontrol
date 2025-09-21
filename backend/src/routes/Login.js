const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Para segurança, idealmente você deveria usar bcrypt para comparar senhas hash,
// mas como você mencionou que a senha está como String simples, farei a comparação direta.

router.post('/', async (req, res) => {
  const { siape, password } = req.body;

  if (!siape || !password) {
    return res.status(400).json({ error: 'Siape e senha são obrigatórios.' });
  }

  try {
    // Busca o usuário pelo siape
    const user = await prisma.user.findUnique({
      where: { siape }
    });

    if (!user) {
      return res.status(401).json({ error: 'Siape ou senha incorretos.' });
    }

    // Compara a senha recebida com a senha do banco
    if (user.password !== password) {
      return res.status(401).json({ error: 'Siape ou senha incorretos.' });
    }

    // Login bem-sucedido - aqui você pode gerar um token JWT ou retornar os dados do usuário
    // Por simplicidade, retornarei o usuário sem a senha
    const { password: _, ...userWithoutPassword } = user;

    return res.json({ message: 'Login realizado com sucesso', user: userWithoutPassword });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
