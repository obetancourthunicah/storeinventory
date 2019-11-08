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


  return router;
}

module.exports = initLocations;
