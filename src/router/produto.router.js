const router = require('express').Router();
const produtoController = require('../controller/produto.controller');

router.post('/create', produtoController.createProdutoController);
router.get('/findAll', produtoController.findAllProdutoController);
router.get('/findById', produtoController.findAllProdutoController);

module.exports = router;