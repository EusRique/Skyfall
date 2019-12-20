module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)
    
    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)
    
    app.route('/client_analysis')
        .get(app.api.client_analysis.get)
        .post(app.api.client_analysis.save)
    
    app.route('/client_analysis/:id')
        .get(app.api.client_analysis.getById)
}