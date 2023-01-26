const express = require('express');
const router = express.Router();

const EnderecosController = require('../controllers/enderecos.controller');

router.post('/inserir', EnderecosController.inserir);
router.get('/listar', EnderecosController.index);

module.exports = router;