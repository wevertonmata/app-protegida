const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = require('./src/database/connection');
	
app.connection = connection;

consign()
	.include('./src/config/passport.js')
	.then('./src/config/middlewares.js')
	.then('./src/controllers')
	.then('./src/routes.js')
    .into(app) //Isso diz que sempre que ele vai carregar um modulo ele vai passar app como parâmetro.


app.listen(3333, () => {
    console.log("Backend executando...")
});
//start back-end: npm start 