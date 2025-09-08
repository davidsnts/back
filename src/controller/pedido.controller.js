const pedidoService = require('../service/pedido.service');

const createPedidoController = async (req, res) => {
    try {
        const body = req.body;
        const response = await pedidoService.createPedidoService(body);
        return res.status(201).send({ msg: 'Pedido criado com sucesso', pedido: response });
    } catch (error) {
        console.log("Erro ao criar pedido: " + error);
        return res.status(500).send({ message: 'Ocorreu um erro interno no servidor' });
    }
};

const updatePedidoController = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await pedidoService.updatePedidoService(id, body);

        if (!response) {
            return res.status(404).send({ message: 'Pedido não encontrado' });
        }

        return res.status(200).send({ msg: 'Pedido atualizado com sucesso', pedido: response });
    } catch (error) {
        console.log("Erro ao atualizar pedido: " + error);
        return res.status(500).send({ message: 'Ocorreu um erro interno no servidor' });
    }
};

const findAllPedidosController = async (req, res) => {
    try {
        const response = await pedidoService.findAllPedidosService();
        return res.status(200).send(response);
    } catch (error) {
        console.log("Erro ao buscar pedidos: " + error);
        return res.status(500).send({ message: 'Ocorreu um erro interno no servidor' });
    }
};

const findPedidoByTelefoneController = async (req, res) => {
    try {
        const { telefone } = req.params;
        const response = await pedidoService.findPedidoByTelefone(telefone);

        if (!response || response.length === 0) {
            return res.status(404).send({ message: 'Nenhum pedido encontrado para esse telefone' });
        }

        return res.status(200).send(response);
    } catch (error) {
        console.log("Erro ao buscar pedido por telefone: " + error);
        return res.status(500).send({ message: 'Ocorreu um erro interno no servidor' });
    }
};

module.exports = {
    createPedidoController,
    updatePedidoController,
    findAllPedidosController,
    findPedidoByTelefoneController
};
