var express = require('express');
var router = express.Router();

var passport = require('passport');
var passportJWT = require('passport-jwt');
var ExtractJWT = passportJWT.ExtractJwt;
var JWTStrategy = passportJWT.Strategy;

function initApiRouter(db){

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'cuandolosgatosnoestanlosratonesfiestahacen'
    },
    (payload, next)=>{
      console.log(payload);
      var user = payload;
      return next(null, user);
    }
  )
);


//Rutas de Cada Entidad
var securityApiRoutes = require('./security/index')(db);
var productsApiRoutes = require('./products/index')(db);
var kardexApiRoutes = require('./kardex/index');
var locationRoutes = require('./locations/index')(db);

//localhost:3000/api/sec/
router.use('/sec', securityApiRoutes);


//localhost:3000/api/prd/
router.use('/prd',
    passport.authenticate('jwt', {session:false}),
    productsApiRoutes
);
//localhost:3000/api/krd/
router.use('/krd',
    passport.authenticate('jwt', {session:false}),
    kardexApiRoutes
);
//localhost:300/api/lcl/
router.use('/lcl',
    passport.authenticate('jwt', {session:false}),
    locationRoutes
);
return router;
}// end initApiRouter;

//module.exports = router;
module.exports = initApiRouter;
