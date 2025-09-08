const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true},
  endereco: {
    bairro: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String }
  },
  itens: [
    {
      produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'produtos', required: true },
      nome: { type: String, required: true },
      quantidade: { type: Number, required: true },
      precoUnitario: { type: Number, required: true },
      complementos: [
        {
          nome: { type: String, required: true }
        }
      ]
    }
  ],
  valorTotal: { type: Number, required: true },
  formaPagamento: { type: String, required: true }, // ex: Dinheiro, Cartão, Pix
  troco: { type: Number },
  situacao: { type: String, default: 'Em andamento' },
  createdAt: { type: Date, default: Date.now }
});

const Pedido = mongoose.model('pedidos', PedidoSchema);

module.exports = Pedido;
