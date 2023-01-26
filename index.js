const express = require('express');
const bodyParser = require('body-parser');
const Loaders = require('./loaders');

const endereco = require('./routes/enderecos.route'); // Importa rota

// inicializar app express
const app = express();

Loaders.start();
app.use(bodyParser.json());
app.use('/enderecos', endereco);

let porta = 8000;
app.listen(porta, () => {
    console.log('Servidor em execução na porta: ' + porta);
}); 