let ObjectId = require('mongodb').ObjectID;
let bcrypt = require('bcrypt');
let IndexVerified = false;

function passwordGenerator(password){
  var hashedPassword = bcrypt.hashSync(password, 10);
  return hashedPassword;
}

function initUserModel(db){
  let userModel = {};
  let userCollection = db.collection('users');
  if (!IndexVerified) {
    userCollection.indexExists("email_1", (err, rslt) => {
      if (!rslt) {
        userCollection.createIndex(
          { "email": 1 },
          { unique: true, name: "email_1" },
          (err, rslt) => {
            console.log(err);
            console.log(rslt);
          });//createIndex
      }
    }); // indexExists
  }// IndexVerified

  userModel.agregarNuevo = (email, password, handler)=>{
    var newUser = Object.assign({},{
      email:email,
      password:passwordGenerator(password),
      dateCreated: new Date().getTime(),
      active:true,
      lastPasswords : [],
      roles:["public"]
    });
    userCollection.insertOne(newUser, (err, rslt)=>{
      if(err){
        console.log(err);
        return handler(err, null);
      }
      if(rslt.insertedCount == 0){
        console.log("No se insertó ningun documento");
        return handler(new Error("Not Inserted Document"), null);
      }
      return handler(null, rslt.ops[0]);
    });//insertOne
  }; //agregarNuevo

  userModel.obtenerXCorreo = (email, handler)=>{
    var query = {"email": email};
    userCollection.findOne(query, (err, user)=>{
      if(err){
        console.log(err);
        return handler(err, null);
      }
      if(!user){
        console.log("No se encontró usuario con " + email);
        return handler(new Error("No se encontró Usuario"), null);
      }
      return handler(null, user);
    }); //findOne
  } //obtenerXCorreo

  userModel.comparePasswords = (rawPassword, savedPassword) =>{
    return bcrypt.compareSync(rawPassword, savedPassword);
  }

  return userModel;
}

module.exports = initUserModel;
