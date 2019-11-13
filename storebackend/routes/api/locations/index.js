let express= require('express');
let router = express.Router();

function initLocations(db){
  let locationModel = require('./locations.model')(db);
  router.post('/new', (req, res)=>{
    //ES6
    let {Nombre,
      Tipo,
      Ranking,
      ContactoNombre,
      ContactoCorreo,
      ContactoTel1,
      ContactoTel2,
      ContactoFchNac,
      Longitud,
      Latitud} = req.body;
    /* aqui van las validaciones de datos */

    locationModel.addNuevaLocalidad(Nombre,
      Tipo,
      parseFloat(Ranking),
      ContactoNombre,
      ContactoCorreo,
      ContactoTel1,
      ContactoTel2,
      new Date(ContactoFchNac),
      parseFloat(Longitud),
      parseFloat(Latitud) ,
      (err, result)=>{
        if(err){
          return res.status(400).json({"err":"Ocurrio un error"});
        }
        return res.status(200).json(result);
      } );
  }); //post new

    router.get('/near/:longitud/:latitud/:distance', (req, res)=>{
        let {longitud, latitud, distance}  = req.params;
        longitud = parseFloat(longitud);
        latitud = parseFloat(latitud);
        distance = parseInt(distance);
        locationModel.getNearLocations(
          longitud,
          latitud,
          distance,
          (err, Locations)=>{
              if(err){
                return res.status(500).json({"msg":"Error al procesar petición"});
              }
              return res.status(200).json(Locations);
        })//getNear;
    }
  )//near
  return router;
}

/*
Sushi to Go
14.061012, -87.220205
-87.220205/14.061012/5000
*/

/*
Pollos XYZ
14.098947, -87.189008
-87.189008/14.098947/5000
*/


module.exports = initLocations;
