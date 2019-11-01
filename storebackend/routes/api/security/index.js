var express= require('express');
var router = express.Router();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var jwt = require('jsonwebtoken');

function initSecurity(db){
  let userModel = require('./users.model')(db);

  passport.use(
    new LocalStrategy(
      {
        usernameField:'email',
        passwordField:'pswd'
      },
      (email, password, next)=>{
        var errorObject =  { "Error":"Credenciales Incorrectas"}
        if ( (email||'na') ==='na' || (password||'na') ==='na' ) {
          console.log("Valores de Correo o Contraseña no alcanzables");
          return next(null, false, errorObject);
        }
        userModel.obtenerXCorreo(email , (err, User)=>{
            if (err){
              return next(null, false, errorObject);
            }
            if( !User.active ){
              console.log(`Cuenta de usuario ${email} está suspendida`);
              return next(null, false, errorObject);
            }
            if(!userModel.comparePasswords(password, User.password)){
              console.log(`Contraseña de ${email} es incorrecta`);
              return next(null, false, errorObject);
            }
            delete User.password;
            delete User.lastPassword;
            delete User.active;
            delete User.dateCreated;
            return next(null, User, {"Status":"Ok"});
        }
        ); //obtenerXCorreo
      }
    )
  );

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
    passport.authenticate(
      'local',
      { session: false },
      (err, user, info) => {
        if (user) {
          req.login(user, { session: false }, (err) => {
            if (err) {
              return res.status(400).json({ "Error": "Error al iniciar sesión" });
            }
            const token = jwt.sign(user, 'cuandolosgatosnoestanlosratonesfiestahacen');
            return res.status(200).json({ user, token });
          });
        } else {
          return res.status(400).json({ info });
        }
      }
    )(req, res);
  })// login
  return router;
}


module.exports = initSecurity;
