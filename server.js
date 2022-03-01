const env = require('dotenv')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const rotas = require('./src/routes/routes')

const connection = require('./database/database')

connection.authenticate()
    .then(() => {
        console.log('Conexão realizada!')
    })
    .catch(error => {
        console.log('Conexão recusada', error)
    })

app.use(express.urlencoded({extended: true}))
app.use(express.json())

rotas(app)

app.listen(port, () => console.log(`Servidor na porta localhost:${port}`))

