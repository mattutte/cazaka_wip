const express = require('express');
const router = express.Router();
const brandsAPIController = require('../../controllers/api/brandsAPIController');

//Rutas
//Listado de brands
router.get('/', brandsAPIController.brandList);
//Detalle de una brands
router.get('/:id', brandsAPIController.brand);


module.exports = router;