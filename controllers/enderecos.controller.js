var EnderecosModel = require('../models/enderecos.model');

class EnderecosController{
    async inserir(req, res){
        const createdEndereco = await EnderecosModel.create(req.body);
        return res.status(200).json(createdEndereco);
    }
    async index(req, res){
        const enderecos = await EnderecosModel.find();

        return res.status(200).json(enderecos);
    }


}

module.exports = new EnderecosController();