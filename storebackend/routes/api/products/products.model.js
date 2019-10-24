var ObjectID = require('mongodb').ObjectID;

function productsModel(db){
  let productModel = {};
  var productsCollection = db.collection("products");
  // cb =  callback = handler = next (err, result)
  productModel.getAllProducts = (handler)=>{
    productsCollection.find({}).toArray(
      (err, docs)=>{
        if(err){
          console.log(err);
          return handler(err, null);
        }
        return handler(null, docs);
      }
    );
  } // end getAllProducts

  productModel.saveNewProduct = ( newProduct, handler)=>{
    productsCollection.insertOne(newProduct, (err, result)=>{
      if(err){
        console.log(err);
        return handler(err, null);
      }
      return handler(null, result);
    }); //insertOne
  }
  return productModel;
}

module.exports = productsModel;
