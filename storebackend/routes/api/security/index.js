var express= require('express');
var router = express.Router();


function initSecurity(db){
  let userModel = require('./users.model')(db);
  router.get('/', function (req, res) {
    res.json({
      "entity": "security",
      "version": "0.0.1"
    });
  }); //get
  router.post('/signin', (req,res)=>{
    var email = req.body.email || 'na';
    var pswd = req.body.password || 'na';
    if (email === 'na' || pswd == 'na') {
      return res.status(400).json({ "Error": "El correo y la contráseña son necesarios" });
    }
    if (!(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i).test(email)) {
      return res.status(400).json({ "Error": "El correo electrónico debe ser uno válido" });
    }
    if (!(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%])[0-9A-Za-z\.!@#$%]{8,32}$/).test(pswd)) {
      return res.status(400).json({ "Error": "La contraseña debe contener al menos una Mayúscula, una Minúscula, un número y un signo especial ! @ # $ % y mínimo 8 caracteres" });
    }
    userModel.agregarNuevo(email, pswd, (err, newUser) => {
      if (err) {
        return res.status(400).json({ "Error": "No se pudo crear nueva cuenta" });
      }
      delete newUser.password;
      return res.status(200).json(newUser);
    });
  });//signin

  router.post('/login', (req, res)=>{

  })// login
  return router;
}


module.exports = initSecurity;
