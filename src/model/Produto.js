const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true },
    descricao: { type: String, required: true },
    precoUnitario: { type: Number, required: true },
    categoria: { type: String, required: true },
    complementos: [{ nome: { type: String } }],
    createdAt: { type: Date, default: Date.now }
});

const Produto = mongoose.model('produtos', ProdutoSchema);

module.exports = Produto;

