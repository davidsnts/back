const router = require('express').Router();
const { createProdutoController } = require('../controller/produto.controller');

router.post('/create', createProdutoController);

module.exports = router;