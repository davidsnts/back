const Pedido = require('../model/Pedido');

const createPedidoService = (body) => {
    try {
        const response = Pedido.create(body);
        return response;
    } catch (error) {
        throw new Error(`Erro ao criar pedido: ${error.message}`);
    }
}
const updatePedidoService = (id, body) => {
    try {
        const response = Pedido.findByIdAndUpdate(id, body);
        return response;
    } catch (error) {
        throw new Error(`Erro ao atualizar pedido: ${error.message}`);
    }
}
const findAllPedidosService = () => {
    try {
        const response = Pedido.find();
        return response;
    } catch (error) {
        throw new Error(`Erro ao buscar pedidos: ${error.message}`);
    }
}

const findPedidoByTelefone = (telefone) => {
    try {
        const response = Pedido.find({ telefone });
        return response;
    } catch (error) {
        throw new Error(`Erro ao buscar pedidos: ${error.message}`);
    }
}



module.exports = { createPedidoService, updatePedidoService, findAllPedidosService, findPedidoByTelefone }