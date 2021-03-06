let ObjectId = require('mongodb').ObjectID;
let IndexCreated = false;

function initLocationModel(db){
  let locationModel = {};
  var locationsCollection = db.collection("Locales");

  if (!IndexCreated) {
    locationsCollection.indexExists("ubicacion_2dsphere", (err, rslt) => {
      if (!rslt) {
        locationsCollection.createIndex(
          { "ubicacion": "2dsphere" },
          { name: "ubicacion_2dsphere" },
          (err, rslt) => {
            console.log(err);
            console.log(rslt);
          });//createIndex
      }
    }); // indexExists
  }

  locationModel.addNuevaLocalidad = (Nombre,
    Tipo,
    Ranking,
    ContactoNombre,
    ContactoCorreo,
    ContactoTel1,
    ContactoTel2,
    ContactoFchNac,
    Longitud,
    Latitud, handler)=>{
    var newLocalidad = {
      "Nombre": Nombre,
      "Tipo": Tipo,
      "Ranking": Ranking,
      "Contacto": {
        "Nombre": ContactoNombre,
        "Correo": ContactoCorreo,
        "Telefono": [
          ContactoTel1,
          ContactoTel2
        ],
        "FchNacimiento": ContactoFchNac
      },
      "ubicacion": {
        "type": "Point",
        "coordinates": [
          Longitud,
          Latitud
        ]
      }
    };

    locationsCollection.insertOne(newLocalidad, (err, rslt)=>{
      if(err){
        console.log(err);
        return handler(err, null);
      }
      return handler(null, rslt);
    });
  } // agregarNuevaLocalidad

  locationModel.getNearLocations = (longitud, latitud, distanceMeters, handler) =>{
    let query = {
      "ubicacion": {
        "$near": {
          "$geometry": {
            "type": "Point",
            "coordinates": [
              longitud,
              latitud
            ]
          },
          "$maxDistance": distanceMeters
        }
      }
    };
    let projection = {
      "Nombre": 1,
      "Tipo": 1,
      "Ranking": 1,
      "ubicacion.coordinates":1
    }
    locationsCollection.find(
      query,
      {
        projection: projection,
        limit: 5
      }
    )
    .toArray(
      (err, locations)=>{
          if(err){
            console.log(err);
            return handler(err, null);
          }
          return handler(null, locations);
      }
    ); // find
  }

  return locationModel;
}



module.exports = initLocationModel;


/*
Para usar luego

{
	"ubicacion" : {
		"$near" : {
			"$geometry" : {
				"type" : "Point",
				"coordinates" : [
					-87.11507,
					14.083123
				]
			},
			"$maxDistance" : 500
		}
	}
}

 */
