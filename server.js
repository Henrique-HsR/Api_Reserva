import express from 'express'

const app = express()
app.use(express.json())

const moradores = []


app.post('/moradores', async (req, res) => {

    moradores.push(req.body)

    res.status(201).json(moradores)
})

app.get('/moradores', async (req, res) => {

    res.status(201).json(moradores)
})

/*app.put('/moradores/:id', async (req, res) => {
})

app.delete('/moradores/:id', async (req, res) => {
})
*/

app.listen(3000)