const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de productos
router.get('/', productsAPIController.productList);
//Detalle de un producto
router.get('/:id', productsAPIController.product);
//Detalle de imagen de un producto
router.get('/:id/img', productsAPIController.image);
//Agregar un producto
router.post('/create', productsAPIController.create);
//Modificar un producto
router.put('/update/:id', productsAPIController.update);
//Eliminar una película
router.delete('/delete/:id', productsAPIController.destroy);

module.exports = router;