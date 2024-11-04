const usuarioModel = require('../models/usuario');

// Lógica para obter todos os usuários
exports.obterTodos = (req, res) => {
    res.json({ "mensagem": "Obter todos os usuários" });
};

// Lógica para criar um novo usuário
exports.inserir = async (req, res) => {
    try {
        await usuarioModel.create(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};
