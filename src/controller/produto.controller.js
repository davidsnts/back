const produtoService = require('../service/produto.service')

const createProdutoController = async (req, res) => {
    try {
        const body = req.body;
        const response = await produtoService.createProdutoService(body);
        return res.status(201).send({ 'msg': 'produto criado com sucesso' });

    } catch (error) {
        console.log("Erro ao criar produto: " + error)
        return res.status(500).send('Ocorreu um erro interno no servidor')
    }
}

const findAllProdutoController = async (req, res) => {
    try {
        const response = await produtoService.findAllProductsService();
        return res.status(200).send(response);

    } catch (error) {
        console.log("Erro ao buscar produtos: " + error)
        return res.status(500).send('Ocorreu um erro interno no servidor')
    }
}

const findProdutoByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await produtoService.findByIdService(id);
        return res.status(200).send(response);

    } catch (error) {
        console.log("Erro ao buscar produtos: " + error)
        return res.status(500).send('Ocorreu um erro interno no servidor')
    }
}


const updateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await produtoService.updateProductService(id, body);
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await produtoService.deleteProductService(id);
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

module.exports = {
    createProdutoController, findAllProdutoController,
    findProdutoByIdController, updateProductController, deleteProductController
}