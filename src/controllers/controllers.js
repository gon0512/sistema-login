const Usuario = require('../../database/models/Usuario')

exports.listUsers = (req, res) => {
    Usuario.findAll()
        .then(data => {
            res.status(200)
            res.json({
                data
            })
        })
}

exports.createUser = (req, res) => {
    const { nome, email, senha } = req.body

    Usuario.create({
        nome,
        email,
        senha
    })
        .then(() => {
            res.status(200)
            res.send('Usuário criado com sucesso!')
        })
}