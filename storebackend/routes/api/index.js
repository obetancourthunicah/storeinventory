var express = require('express');
var router = express.Router();

//Rutas de Cada Entidad
var securityApiRoutes = require('./security/index');
var productsApiRoutes = require('./products/index');
var kardexApiRoutes = require('./kardex/index');

//localhost:3000/api/sec/
router.use('/sec', securityApiRoutes);
//localhost:3000/api/prd/
router.use('/prd', productsApiRoutes);
//localhost:3000/api/krd/
router.use('/krd', kardexApiRoutes);

module.exports = router;
