var express = require('express');
var router = express.Router();

function initProductsApi(db){

var prdModel = require('./products.model')(db);

var fileModel = require('../filemodel');
var prodCollection = fileModel.getProducts();

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

router.get('/all', function(req, res){
  /*prodCollection = fileModel.getProducts();
  res.json(prodCollection);
  */
  prdModel.getAllProducts((err, productos)=>{
    if(err){
      res.status(404).json([]);
    } else {
      res.status(200).json(productos);
    }
  });// end getAllProducts
}); // get /all

router.post('/new', function(req, res){
   /*prodCollection = fileModel.getProducts();
   var newProduct = Object.assign(
      {},
      req.body,
      {
          "stock": parseInt(req.body.stock),
          "price": parseFloat(req.body.price)
      }
   );
   var productExists = prodCollection.find(
     function(o, i){
       return o.sku === newProduct.sku;
     }
   )
   if( ! productExists ){
     prodCollection.push(newProduct);
     fileModel.setProducts(
        prodCollection,
        function(err, savedSuccesfully){
          if(err){
            res.status(400).json({ "error": "No se pudo ingresar objeto" });
          } else {
            res.json(newProduct);  // req.body ===  $_POST[]
          }
        }
      );
   } else {
     res.status(400).json({"error":"No se pudo ingresar objeto"});
   } */
   var newProd = Object.assign(
      {},
      req.body,
      { "stock":parseInt(req.body.stock),
        "price":parseFloat(req.body.price)}
    );
   prdModel.saveNewProduct(newProd, (err, rslt)=>{
     if(err){
       res.status(500).json(err);
     }else{
       res.status(200).json(rslt);
     }
   });// saveNewProduct
}); // post /new

router.put('/update/:prdid',
  function(req, res){
      /*prodCollection = fileModel.getProducts();
      var prdskuToModify = req.params.prdsku;
      var amountToAdjust = parseInt(req.body.ajustar);
      var adjustType = req.body.tipo || 'SUB';
      var adjustHow = (adjustType == 'ADD' ? 1 : -1);
      var modProduct = {};
      var newProductArray = prodCollection.map(
        function(o,i){
          if( prdskuToModify === o.sku){
             o.stock += ( amountToAdjust * adjustHow );
             modProduct = Object.assign({}, o);
          }
          return o;
        }
      ); // end map
    prodCollection = newProductArray;
    fileModel.setProducts(
      prodCollection,
      function (err, savedSuccesfully) {
        if (err) {
          res.status(400).json({ "error": "No se pudo actualizar objeto" });
        } else {
          res.json(modProduct);  // req.body ===  $_POST[]
        }
      }
    );*/
    var prdIdToModify = req.params.prdid;
    var amountToAdjust = parseInt(req.body.ajustar);
    var adjustType = req.body.tipo || 'SUB';
    prdModel.updateProduct(
      {stock:amountToAdjust,
      type:adjustType}, prdIdToModify,
      (err, rsult)=>{
        if(err){
          res.status(500).json({"error":"Lo sentimos mucho, ha ocurrido un error."});
        }else{
          res.status(200).json(rsult);
        }
      }
      ); //updateProduct
  }
);// put :prdsku

// endPoint ==  ejeutar operacion| obtenerRecurso| guardarrecurso 
//              | > devuelve un recurso

// router  get| post | put | delete

router.delete(
  //'/delete/:prdsku',
  '/delete/:prdid',
  function( req, res) {
    /*prodCollection = fileModel.getProducts();
    var prdSkuToDelete  = req.params.prdsku;
    var newProdCollection = prodCollection.filter(
      function(o, i){
        return prdSkuToDelete !== o.sku;
      }
    ); //filter
    prodCollection = newProdCollection;
    fileModel.setProducts(
      prodCollection,
      function (err, savedSuccesfully) {
        if (err) {
          res.status(400).json({ "error": "No se pudo eliminar objeto" });
        } else {
          res.json({"newProdsQty": prodCollection.length});
        }
      }
    );*/
    var id = req.params.prdid || '';
    if(id===''){
      return res.status(404).json({"error":"Identificador no válido"});
    }
    prdModel.deleteProduct(id , (err, rslt)=>{
      if(err){
        return res.status(500).json({"error":"Ocurrio un error intente de nuevo."});
      }
      return res.status(200).json({"msg":"Deleted OK"});
    }); //deleteProduct 
  }
);// delete

  return router;
} //end initProductsApi

//module.exports = router;
module.exports = initProductsApi;
