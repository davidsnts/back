const Produto = require('../model/Produto');

const createProdutoService = (body) => {
    try {
        const product = Produto.create(body); // precisa de await
        return product;
    } catch (error) {
        throw new Error(`Erro ao criar produto: ${error.message}`);
    }
};

const findAllProductsService = () => {
    try {
        return Produto.find();
    } catch (error) {
        throw new Error(`Error finding all products: ${error.message}`);
    }
};

const findByIdService = (id) => {
    try {
        return Produto.findById(id);
    } catch (error) {
        throw new Error(`Error finding all products: ${error.message}`);
    }
};

const updateProductService = (id, body) => {
    try {
        const product = Produto.findByIdAndUpdate(id, body, { returnDocument: 'after' });
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error) {
        throw new Error(`Error updating product: ${error.message}`);
    }
}

const deleteProductService = (id) => {
    try {
        const product = Produto.findByIdAndDelete(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error) {
        throw new Error(`Error deleting product: ${error.message}`);
    }
}
module.exports = { createProdutoService, findAllProductsService, findByIdService, updateProductService, deleteProductService };