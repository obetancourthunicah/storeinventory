var express = require('express');
var router = express.Router();

function initApiRouter(db){



//Rutas de Cada Entidad
var securityApiRoutes = require('./security/index');
var productsApiRoutes = require('./products/index')(db);
var kardexApiRoutes = require('./kardex/index');

//localhost:3000/api/sec/
router.use('/sec', securityApiRoutes);
//localhost:3000/api/prd/
router.use('/prd', productsApiRoutes);
//localhost:3000/api/krd/
router.use('/krd', kardexApiRoutes);

return router;
}// end initApiRouter;

//module.exports = router;
module.exports = initApiRouter;
