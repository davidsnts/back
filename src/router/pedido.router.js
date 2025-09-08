const router = require('express').Router();
const pedidoController = require('../controller/pedido.controller');

router.post('/create', pedidoController.createPedidoController);

router.get('/findAll', pedidoController.findAllPedidosController);

router.put('/update/:id', pedidoController.updatePedidoController);

router.get('/findByTelefone/:telefone', pedidoController.findPedidoByTelefoneController);

module.exports = router;
