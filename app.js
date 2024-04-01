const ActiveDirectory = require('activedirectory2');
const config = {
  url: 'ldap://tu.dominio.com',
  baseDN: 'dc=tu,dc=dominio,dc=com',
  username: 'usuario@tu.dominio.com',
  password: 'tuContraseñaAdmin'
};

const ad = new ActiveDirectory(config);
const username = 'usuario@tu.dominio.com'; // El usuario que quieres verificar
const password = 'contraseñaUsuario'; // La contraseña que quieres verificar

// Intenta autenticar al usuario
ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log('ERROR: ' + JSON.stringify(err));
    return;
  }

  if (auth) {
    console.log('Autenticado con éxito!');
  }
  else {
    console.log('Autenticación fallida!');
  }
});
