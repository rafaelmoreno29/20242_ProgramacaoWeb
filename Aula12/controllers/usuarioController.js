// Importar modelo de usuário (simulando um banco de dados, etc.)
const Usuario = require('../models/usuario');

// Lógica para criar um novo usuário
exports.createUser = async (req, res) => {
    const { nome, email, senha, ativo } = req.body;

    const usuario = {
        nome, email, senha, ativo
    }
    try {
        await Usuario.create(usuario);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
// Lógica para obter um usuário por ID
exports.getUserById = (req, res) => {
    const user = Usuario.findOne({ _id: req.params.id });
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(user);
};

// Lógica para obter todos os usuários
exports.getAllUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error });
    }

};

