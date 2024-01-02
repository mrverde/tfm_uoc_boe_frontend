# TFM UOC BOE Frontend

Este repositorio contiene el frontend del trabajo final de máster. Consiste en una aplicación que se integra con las APIs del BOE y ChatGPT para hacer resumenes de los documentos del Boletin Oficial del Estado.

Esta aplicación usa Javascript y React y diferentes tecnologías. Parte de un boilerplate propio que puede encontrarse en mi [GitHub](https://github.com/mrverde/boilerplate_frontend_react).

## Usar la aplicación en local
Para usar la aplicación en local, con [nodejs](https://nodejs.org/en) instalado:

1. Instalar las dependencias

```bash
npm i
```

2. Renombrar el archivo .env.bak a .env y completar los valores de las variables

3. Correr el servidor de desarrollo

```bash
npm run dev
```

## Hacer una build del proyecto

Para compilar el proyecto y generar el directorio  **/dist** usar:
```bash
npm run build
```

Si una vez compilado, se quiere ejecutar el proyecto, hay que tener instalado de forma global http-server. Esto se realiza con el siguiente comando:
```bash
npm i -g http-server
```

Y después, para ejecutar el servidor hay que usar:
```bash
http-server ./dist -p 3000
```

## Ejecutar tests
Para ejecutar todos los tests hay que usar:
```bash
npm run test
```

Este comando ejecutará los tests de cypress en modo headless, el eslint y el stylelint. Para poder ejecutar los test de cypress es necesario que el servidore esté levantado con npm run dev.

Para ejecutar cypress en modo headless usar:
```bash
npm run cy:run
```

Para ejecutar cypress en modo navegador usar:
```bash
npm run cy:open
```

Para ejecutar los tests de lint usar:
```bash
npm run lint
```

Para ejecutar los tests de stylelint usar:
```bash
npm run test:css
```
