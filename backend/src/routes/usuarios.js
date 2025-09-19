import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

const router = express.Router();

app.use(express.json())


app.post('/usuarios',async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            siape: req.body.siape,
            password: req.body.password
        }
   })

    res.status(201).json(req.body)

})

app.get('/usuarios',async (req, res) =>{

   const users =  await prisma.user.findMany()

    res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {
    const userId = parseInt(req.params.id, 10);  // Converte o id de string para número

    if (isNaN(userId)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: userId  // Usa o id convertido para número
            },
            data: {
                name: req.body.name,
                siape: req.body.siape,
                password: req.body.password
            }
        });

        res.status(200).json(updatedUser);  // Retorna o usuário atualizado
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar o usuário' });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    const userId = parseInt(req.params.id, 10);  // Converte o id para um número inteiro

    if (isNaN(userId)) {
        return res.status(400).json({ error: 'ID inválido' });  // Retorna erro caso o id seja inválido
    }

    try {
        await prisma.user.delete({
            where: {
                id: userId  // Passa o id convertido para número
            }
        });

        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar o usuário' });
    }
});



export default router;

//senhasegura*123


