var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.json({
    "entity": "products",
    "version": "0.0.1"
  });
}); //get

/** 
 * get      Consultas     select
 * post     Crear         insert
 * put      Actualizar    update
 * delete   Eliminar      delete
*/

var prodCollection = [];

router.get('/all', function(req, res){
  res.json(prodCollection);
}); // get /all

router.post('/new', function(req, res){
   var newProduct = Object.assign({}, req.body);
   var productExists = prodCollection.find(
     function(o, i){
       return o.sku === newProduct.sku;
     }
   )
   if( ! productExists ){
     prodCollection.push(newProduct);
     res.json(newProduct);  // req.body ===  $_POST[]
   } else {
     res.status(400).json({"error":"No se pudo ingresar objeto"});
   }
}); // post /new

// endPoint ==  ejeutar operacion| obtenerRecurso| guardarrecurso 
//              | > devuelve un recurso

// router  get| post | put | delete

module.exports = router;
