const ActiveDirectory = require('activedirectory2');
const config = {
  url: 'ldap://192.168.11.2', // Dirección IP del servidor AD
  baseDN: 'dc=rizek,dc=local', // DN base de tu dominio
  username: 'usuario@rizek.local', // Un usuario con permisos para buscar en el AD
  password: 'tuContraseñaAdmin' // Contraseña del usuario
};

const ad = new ActiveDirectory(config);
const username = 'usuario@rizek.local'; // El usuario que quieres verificar
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
