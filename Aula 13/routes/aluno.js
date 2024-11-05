const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController.js');

// Rota para obter todos os usuários
router.get('/', alunoController.obterTodos);
router.get('/:ra', alunoController.obterPorRa);

module.exports = router;
