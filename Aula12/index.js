const express = require('express');
const mongoose = require('mongoose');

const app = express();

const usuarioRouter = require('./routes/usuario');


app.use(express.json());

app.use('/usuarios', usuarioRouter);


const produtos = [];

app.get("/produto", (request, response) => {
    return response.json(produtos);
})

app.post("/produto", (request, response) => {
    const produto = request.body;
    produtos.push(produto);
    return response.json(produto);
});

app.get("/somar/:numero1/:numero2", (request, response) => {
    const numero1 = request.params.numero1;
    const numero2 = request.params.numero2;
    const soma = parseFloat(numero1) + parseFloat(numero2);
    return response.json({ "soma": soma });
});

mongoose.connect('mongodb+srv://rafaelmorenosax:I5tiC30kIYSsuvBR@apitestemongodb.jqi5v1r.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3000, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 3000');
        })
    })
    .catch((err) => {
        console.log(err);
    });
