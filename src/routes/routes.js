module.exports = app => {
    const controller = require('../controllers/controllers')

    app.route('/login')
        .get(controller.listUsers)
        .post(controller.createUser)
}