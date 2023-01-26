const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const EnderecosSchema = new Schema({
    id: ObjectId,
    cep: String,
    rua: String,
});


// Exportar o modelo
const EnderecosModel = mongoose.model('endereco', EnderecosSchema);
module.exports = EnderecosModel;