const bodyParser = require('body-parser');
const cors = require('cors'); //Habilitar de origens diferentes (outras urls)

module.exports = app => {
    app.use(bodyParser.json());
    app.use(cors({
        origin: '*'
    }));
}

//O app da que é o parâmetro acima referência ao app do arquivo index.js