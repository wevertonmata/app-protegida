const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
  const obterHash = (password, callback) => {
    bcrypt.genSalt(10, (err,salt) => {
      bcrypt.hash(password,salt, null, (err, hash) => callback(hash))
    })
  }

  const save = (req, res) => {
    obterHash(req.body.password, hash => {
      const password = hash

      app.connection('user')
        .insert({name: req.body.name, cellphone: req.body.cellphone, password: password, longitude: req.body.longitude, latitude:req.body.latitude})
        .then(_=> req.status(200).json({"message": "Usuário cadastrado com sucesso!!!"}))
        .catch(err => res.status(400).json(err))
    })
  }
  return {save}
}