var ObjectId = require('mongodb').ObjectId;

var IndexVerified = false;

function productsModel(db){
  let productModel = {};
  var productsCollection = db.collection("products");

  if ( !IndexVerified) {
    productsCollection.indexExists("sku_1", (err, rslt)=>{
      if(!rslt){
        productsCollection.createIndex(
          { "sku": 1 },
          { unique: true, name:"sku_1"},
          (err, rslt)=>{
            console.log(err);
            console.log(rslt);
        });//createIndex
      }
    }); // indexExists
  }

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
  productModel.updateProduct = (updateFields, productId, handler)=>{
      let productFilter = {"_id": new ObjectId(productId)};
      let updateObject = {
        "$set": {
                  "dateModified":new Date().getTime()
              },
          "$inc": {
              "stock": (
                  (updateFields.type=="ADD") ?
                        updateFields.stock:
                        (updateFields.stock*-1)
                  )
          }
  };
  productsCollection.updateOne(
      productFilter,
      updateObject,
      (err, rslt)=>{
        if(err){
          console.log(err);
          return handler(err, null);
        }
        return handler(null, rslt);
      }
    );
  }; // updateObject

  productModel.deleteProduct = (id, handler)=>{
    var query = {"_id": new ObjectId(id)}
    productsCollection.deleteOne(query, (err, rslt)=>{
      if(err){
        console.log(err);
        return handler(err, null);
      }
      return handler(null, rslt);
    })//deleteOne
  }

  return productModel;
}


module.exports = productsModel;
