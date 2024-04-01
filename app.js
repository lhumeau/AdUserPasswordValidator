const ActiveDirectory = require('activedirectory2');
const config = {
  url: 'ldap://ADSERVER',
  baseDN: 'dc=yourdomain,dc=local',
};

function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    const ad = new ActiveDirectory({ ...config, username, password });
    ad.authenticate(username, password, function(err, auth) {
      if (err) {
        resolve({ username, success: false, error: err }); // Usamos resolve para manejar errores individualmente
        return;
      }
      resolve({ username, success: auth });
    });
  });
}

const users = [
  { username: 'user1@yourdomain.local', password: 'password1' },
  { username: 'user2@yourdomain.local', password: 'password2' },
  // Añade más usuarios según necesario
];

Promise.allSettled(users.map(user => authenticate(user.username, user.password)))
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled' && result.value.success) {
        console.log(`Autenticación exitosa: ${result.value.username}`);
      } else if (result.status === 'fulfilled') {
        console.log(`Autenticación fallida: ${result.value.username}, Error: ${result.value.error}`);
      }
    });
  });
