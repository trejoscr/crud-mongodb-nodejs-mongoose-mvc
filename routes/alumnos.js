const express = require('express');
const router = express.Router();

const alumnoController = require('../controllers/AlumnoController');

// mostrar todos
router.get('/', alumnoController.mostrar);

// crear
router.post('/crear', alumnoController.crear);

// editar
router.post('/editar', alumnoController.editar);

// eliminar
router.get('/borrar/:id', alumnoController.borrar);

module.exports = router;