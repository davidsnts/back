const express = require('express');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");
const produto = require("./src/router/produto.router");

const app = express();
const connectToDatabase = require('./src/database/database'); //arquivo de conexão com o banco

app.use(cors({
    origin: "*",          // permite qualquer domínio/porta
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: false    // se precisar usar cookies/sessão, isso deve ser true e o origin não pode ser "*"
}));

app.use(express.json());

app.use('/produto', produto);

connectToDatabase();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (req, res) => res.send({ 'msg': 'bem vindo a nossa API.' }));

const porta = 3003;

app.listen(porta, () => {
    console.log(`App rodando na porta http://localhost:${porta}`)
})
