module.exports = app => {
    const controller = require('../controllers/controllers')

    app.route('/user')
        .get(controller.listUsers)
        .post(controller.createUser)

    app.route('/auth')
        .post(controller.authUser)
}