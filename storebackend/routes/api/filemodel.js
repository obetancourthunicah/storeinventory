var fs = require('fs');

var exportObject = {};
var filePath = "data.json";

exportObject.saveToFile = function( collToSave, handler){
  fs.writeFile(
    filePath,
    JSON.stringify(collToSave),
    function(err){
      if(err){
        console.log(err);
        return handler(err, null);
      }
      return handler(null, true);
    }
  );
}

exportObject.loadFromFile = function( handler ){
  fs.readFile(
    filePath,
    'utf8',
    function(err, data){
      if(err){
        console.log(err);
        return handler(err, null);
      }
      return handler(null, JSON.parse(data));
    }
  );
}

module.exports = exportObject;
