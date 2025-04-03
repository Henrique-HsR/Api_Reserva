import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/moradores', async (req, res) => {

    await prisma.morador.create({
        data: {
            name: req.body.name,
            street: req.body.street,
            house: req.body.house,
            status: req.body.status
        }
    })

    res.status(201).json(req.body)
})

app.get('/moradores', async (req, res) => {

    let moradores = []

    if(req.query) {
        moradores = await prisma.morador.findMany({
            where: {
                name: req.query.name,
                street: req.query.street,
                house: req.query.house,
                status: req.query.status
            }
        })
    } else {
        moradores = await prisma.morador.findMany()
    }

    res.status(201).json(moradores)
})

app.put('/moradores/:id', async (req, res) => {
    await prisma.morador.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            street: req.body.street,
            house: req.body.house,
            status: req.body.status
        }
    })

    res.status(201).json(req.body)
})

app.delete('/moradores/:id', async (req, res) => {
    await prisma.morador.delete({
        where: {
            id: req.params.id
        },
    })

    res.status(200).json({message: 'Usuário deletado com sucesso!'})
})

app.listen(3000)