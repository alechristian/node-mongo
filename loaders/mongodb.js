const mongoose = require('mongoose');

async function startDB(){
    await mongoose.set('strictQuery', false);
    //neste ponto é necessario importar sua string de conexão com o MongoDb
    await mongoose.connect('<INSIRA AQUI SUA STRING>');
}

module.exports = startDB;