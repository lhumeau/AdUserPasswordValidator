const ActiveDirectory = require('activedirectory2');
const fs = require('fs').promises; // Importa fs.promises para trabajar con archivos de forma asincrónica
const config = {
  url: 'ldap://your-domain-controller',
  baseDN: 'dc=domain,dc=local',
};

function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    const ad = new ActiveDirectory({ ...config, username, password });
    ad.authenticate(username, password, function (err, auth) {
      if (err) {
        resolve({ username, success: false, error: err });
        return;
      }
      resolve({ username, success: auth });
    });
  });
}

async function readUsers() {
  try {
    const data = await fs.readFile('users.json', 'utf8');
    const users = JSON.parse(data);
    if (users && users.length > 0) {
      return users;
    } else {
      throw new Error('El archivo users.json está vacío.');
    }
  } catch (error) {
    console.log('Usando usuarios por defecto debido a: ', error.message);
    return [
      { username: 'user1@domain.local', password: 'password1' },
      { username: 'user2@domain.local', password: 'password2' },
    ];
  }
}

async function main() {
  const users = await readUsers();
  const promises = [];

  for (const user of users) {
    promises.push(authenticate(user.username, user.password));
  }

  Promise.allSettled(promises).then(async (results) => {
    let output = '';
    for (const result of results) {
      if (result.status === 'fulfilled' && result.value.success) {
        output += `Autenticación exitosa: ${result.value.username}\n`;
      } else if (result.status === 'fulfilled') {
        output += `Autenticación fallida: ${
          result.value.username
        }, Error: ${JSON.stringify(result.value.error)}\n`;
      }
    }

    try {
      await fs.writeFile('result.txt', output);
      console.log(
        'Los resultados de la autenticación se han guardado en "result.txt".'
      );
    } catch (error) {
      console.error('Error al escribir los resultados en el archivo:', error);
    }
  });
}

main();
