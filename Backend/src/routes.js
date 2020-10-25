module.exports = app => {
    app.post('/signup', app.src.controllers.signUpUser.save)
    app.post('/signin', app.src.controllers.signInUser.signin)

//Depois da validação verificar sempre autenticação pelo passport
    app.route('/oi')
        .all(app.src.config.passport.authenticate())
        .get((req, res) => {
            res.status(200).send("Sucesso!")
        });
};