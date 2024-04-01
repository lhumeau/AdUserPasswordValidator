const ActiveDirectory = require('activedirectory2');
const fs = require('fs').promises; // Importa fs.promises para trabajar con archivos de forma asincrónica
const config = {
  url: 'ldap://domainController',
  baseDN: 'dc=domain,dc=local',
};

function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    const ad = new ActiveDirectory({ ...config, username, password });
    ad.authenticate(username, password, function (err, auth) {
      if (err) {
        resolve({ username, success: false, error: err }); // Usamos resolve para manejar los errores
        return;
      }
      resolve({ username, success: auth });
    });
  });
}

const users = [
  { username: 'user1@domain.local', password: 'password1' },
  { username: 'user2@domain.local', password: 'password2' },
  // Añade más usuarios según sea necesario
];

const promises = users.map((user) =>
  authenticate(user.username, user.password)
);

Promise.allSettled(promises).then(async (results) => {
  // Prepara el texto para escribir en el archivo basado en los resultados
  const output = results
    .map((result) => {
      if (result.status === 'fulfilled' && result.value.success) {
        return `Autenticación exitosa: ${result.value.username}\n`;
      } else if (result.status === 'fulfilled') {
        return `Autenticación fallida: ${
          result.value.username
        }, Error: ${JSON.stringify(result.value.error)}\n`;
      }
    })
    .join('');

  // Escribe los resultados en 'result.txt', reemplazándolo si ya existe
  try {
    await fs.writeFile('result.txt', output);
    console.log(
      'Los resultados de la autenticación se han guardado en "result.txt".'
    );
  } catch (error) {
    console.error('Error al escribir los resultados en el archivo:', error);
  }
});
