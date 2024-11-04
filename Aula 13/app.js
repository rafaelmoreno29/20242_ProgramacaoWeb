const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

const usuarioRouter = require('./routes/usuario');
const lista1Router = require('./routes/lista1');

const app = express();
app.use(express.json());

app.use('/usuario', usuarioRouter);
app.use('/lista1', lista1Router);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.oy8p7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(3000, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 3000');
        })
    })
    .catch((err) => {
        console.log(err);
    });