# Autenticación Active Directory con Node.js

Este proyecto permite autenticar usuarios contra un servidor Active Directory (AD) utilizando Node.js. Es útil para integrar la autenticación de AD en aplicaciones Node.js, proporcionando una manera sencilla de verificar las credenciales de los usuarios.

## Pre-requisitos

Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema. Este proyecto también requiere acceso a un servidor Active Directory.

## Instalación

Para usar este proyecto, sigue estos pasos:

1. Clona este repositorio a tu máquina local usando `git clone`.
2. Navega al directorio del proyecto clonado.
3. Ejecuta `npm install` para instalar las dependencias necesarias.
4. Ejecuta app.js

## Configuración

Necesitarás configurar el proyecto con los detalles específicos de tu entorno de Active Directory. Abre el archivo `config.js` (debes crear este archivo basado en el ejemplo proporcionado) y actualiza la configuración con los valores apropiados para tu entorno:

```javascript
module.exports = {
  url: 'ldap://dirección_ip_servidor_AD',
  baseDN: 'dc=ejemplo,dc=com',
  username: 'tu_usuario@ejemplo.com',
  password: 'tu_contraseña'
};

```

## Contribuyendo
Las contribuciones son lo que hace que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será muy apreciada.

Si tienes una sugerencia que mejoraría esto, por favor, bifurca el repositorio y crea un pull request. También puedes simplemente abrir un issue con la etiqueta "mejora". ¡No olvides darle una estrella al proyecto! Gracias de nuevo.

Bifurca el proyecto
Crea tu rama de características (git checkout -b feature/AmazingFeature)
Realiza tus cambios y commit (git commit -m 'Add some AmazingFeature')
Push a la rama (git push origin feature/AmazingFeature)
Abre un pull request.


##Licencia
Distribuido bajo la Licencia MIT. Consulta el archivo LICENSE para más información.
