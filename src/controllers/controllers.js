const jwt = require('jsonwebtoken')
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

exports.authUser = (req, res) => {
    const { email, senha } = req.body

    Usuario.findOne({where:{email}}).then(data => {

        if(data === null) {
            res.status(404)
            res.send('Email não encontrado na base de dados')
        } else {
            if(data.senha === senha) {
                jwt.sign({id: data.id}, "12345", {expiresIn: '24h'}, (err, token) => {
                    if(err) {
                        res.status(400)
                        res.send('Falha interna!')
                    } else {
                        res.status(200)
                        res.json({token: token})
                    }
                })

            } else {
                res.status(401)
                res.json('Usuário e senha não conferem!')
            }
        }
    })
}