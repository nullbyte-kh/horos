const express = require('express')
const app = express()
const data = require('./student')
const port = process.env.port || 3000

app.get('/student', (req, res) => {
    res.send(data);
})

app.get('/student/:id', (req, res) => {
    const ide = req.params.id
    res.send(data[ide])
})

app.get('/student/:id/:ids', (req, res) => {
    const ide = req.params.id
    const ids = req.params.ids
    res.send(data[ide][ids])
})

app.listen(port, () => {
    console.log(`The server is listening to port ${port}...`)
})