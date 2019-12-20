module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)
    
    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById)
    
    app.route('/client_analysis')
        .all(app.config.passport.authenticate())
        .get(app.api.client_analysis.get)
        .post(app.api.client_analysis.save)
    
    app.route('/client_analysis/:id')
        .all(app.config.passport.authenticate())    
        .get(app.api.client_analysis.getById)
}