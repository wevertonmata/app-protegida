const passport = require('passport');
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt


const {authSecrets} = require('../../.env');

module.exports = app => {
    
  const params = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: authSecrets,
  }

  const strategy = new Strategy(params, (payload,done) => {
    app.connection('users').where({email: payload.email}).first()
        .then(user => {
            if(user){
                return done(null, {id: user.id, cellphone: user.cellphone, name: user.name}) 
            }else{
                return done(null, false) 
            }
        })
        .catch(err => done(err,false))
  }); 
  // essa é uma função ela passa os parâmetro no do Authorization e seu outro
  // parâmetro é uma função callback onde o done vai retorna id, email, name.

  passport.use(strategy) //passou a estratégia para biblioteca

  return{
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', {session: false}) //(qual é a estratégia?, {não tem sessão envolvida}) 
  }
}
