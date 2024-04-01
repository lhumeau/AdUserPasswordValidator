# Autenticación Active Directory con Node.js

Este proyecto permite la autenticación de usuarios contra un servidor Active Directory (AD) utilizando Node.js, diseñado para ser integrado en aplicaciones que requieren validar credenciales de usuario con AD.

## Pre-requisitos

Antes de comenzar, asegúrate de tener los siguientes requisitos previos instalados y configurados:

- Node.js (Versión 12.x o superior)
- Acceso a un servidor Active Directory

## Instalación

Para instalar y configurar el proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio a tu máquina local:

```bash
git clone [https://github.com/lhumeau/AdUserPasswordValidator.git]
cd tuRepositorio
npm install
```

##Configuración
Antes de ejecutar el script, debes configurar el acceso a tu servidor Active Directory en el archivo config.js:
const config = {
  url: 'ldap://direccion.ip.servidor.AD',
  baseDN: 'dc=dominio,dc=com',
};

Reemplaza 'ldap://direccion.ip.servidor.AD' y 'dc=dominio,dc=com' con los valores correspondientes a tu entorno de AD.

##Uso
Para autenticar un usuario con Active Directory, ejecuta el script principal del proyecto:

`node app.js`

## Contribuyendo

Las contribuciones a este proyecto son bienvenidas. Si deseas contribuir, por favor:

Haz un fork del repositorio.
Crea una nueva rama para tu característica (git checkout -b feature/AmazingFeature).
Realiza tus cambios y haz un commit (git commit -m 'Add some AmazingFeature').
Push a la rama (git push origin feature/AmazingFeature).
Abre un Pull Request.



##Licencia
Distribuido bajo la Licencia MIT. Consulta el archivo LICENSE para más información.
