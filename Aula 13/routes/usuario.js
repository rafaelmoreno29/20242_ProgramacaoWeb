const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController.js');

// Rota para obter todos os usuários
router.get('/', usuarioController.obterTodos);
// Rota para criar um novo usuário
router.post('/', usuarioController.inserir);

module.exports = router;
