const createProdutoController = (req, res) => {
    try {
        const body = req.body;

        return res.status(201).send(req.body);

    } catch (error) {
        console.log("Erro ao criar produto: " + error)
    }
}

module.exports = { createProdutoController }