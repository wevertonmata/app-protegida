const {authSecrets} = require('./../../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
  const signin = async (req, res) => {
    if(!req.body.name || !req.body.password){
    return res.status(400).json({"message":"Dados incompletos"})
    }

    const user = await app.connection('user')
      .whereRaw("LOWER(name) = LOWER(?)",req.body.name)
      .first()

      if(user){
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
          if (err || !isMatch){
            return res.status(401).send()
          }

          const payload = {id: user.id}
          res.json({
            name: user.name,
            cellphone: user.cellphone,
            token: jwt.encode(payload,authSecrets),
          })
        })
      }
      else{
        res.status(400).send("Usuário Inválido!")
      }
  }
  return {signin}
}