var fs = require('fs');

var exportObject = {};
//var filePath = "data.json";
var filePath = "new_model_data.json";

var data = {
  products:[],
  kardex:[],
  users:[]
};

exportObject.getData = function(){
  return data;
}

exportObject.setData = function (newData, handler) {
  saveToFile(newData, function(err, success){
    if(err){
      handler(err, false );
    }else{
      data = Object.assign({}, newData);
      handler(null, true);
    }
  });
}

exportObject.getProducts = function(){
  return data.products;
}

exportObject.setProducts = function ( newProducts, handler) {
  var newData = Object.assign({},data, {products: newProducts});
  exportObject.setData(newData, function(err, sucess){
    if(err){
      handler(err, false);
    }else{
      handler(null, true);
    }
  });
}
exportObject.getKardex = function(){
  return data.kardex;
}
exportObject.setKardex = function ( newKardex, handler) {
  var newData = Object.assign({}, data, { kardex: newKardex });
  exportObject.setData(newData, function (err, sucess) {
    if (err) {
      handler(err, false);
    } else {
      handler(null, true);
    }
  });
}

exportObject.getSecurity = function(){
  return data.users;
}

exportObject.setSecurity = function (newSecurity, handler) {
  var newData = Object.assign({}, data, { users: newSecurity });
  exportObject.setData(newData, function (err, sucess) {
    if (err) {
      handler(err, false);
    } else {
      handler(null, true);
    }
  });
}



//exportObject.saveToFile = function( collToSave, handler){
var saveToFile = function (collToSave, handler) {
  fs.writeFile(
    filePath,
    JSON.stringify(collToSave),
    function(err){
      if(err){
        console.log(err);
        handler(err, null);
      } else {
        handler(null, true);
      }
    }
  );
}

//exportObject.loadFromFile = function( handler ){
var loadFromFile = function (handler) {
  fs.readFile(
    filePath,
    'utf8',
    function(err, data){
      if(err){
        console.log(err);
       handler(err, null);
      } else {
        handler(null, JSON.parse(data));
      }
    }
  );
}

loadFromFile(
  function (err, savedCollection) {
    if (err) {
      return;
    }
    data = savedCollection;
    return;
  }
);


module.exports = exportObject;
