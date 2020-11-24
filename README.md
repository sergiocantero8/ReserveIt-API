# Proyecto de Infraestructura Virtual: reserve-it
[![Build Status](https://travis-ci.com/sergiocantero8/reserve-it.svg?branch=master)](https://travis-ci.com/sergiocantero8/reserve-it)
[![reserve-it](https://circleci.com/gh/sergiocantero8/reserve-it.svg?style=svg)](https://app.circleci.com/pipelines/github/sergiocantero8/reserve-it)
[![Netlify Status](https://api.netlify.com/api/v1/badges/652295d9-fd25-4ef9-86cd-e8077d424c66/deploy-status)](https://app.netlify.com/sites/compara-precios/deploys)
## Descripción del proyecto :green_book:
La idea de la aplicación es desarrollar un sistema de reservas online para pistas deportivas (fútbol, tenis, pádel...etc). La app también será capaz de decirte precios, ubicación, una breve descripción de los complejos deportivos, tu historial de reservas y más funcionalidades.

## ¿Por qué he elegido este proyecto? :mag:
Llevamos toda la vida reservando pistas para hacer deporte de forma telefónica o presencial. Ya en 2020 debería poderse hacer de forma online la reserva pero sin embargo la mayoría de sitios no cuentan con un sistema para reservar online. ¿Por qué? ¿Es muy caro mantener una estructura para hacer un sistema de reservas que funcione correctamente? ¿O es muy complicado?  
A la hora de hacer una reserva para una pista deportiva, siempre me he preguntado por qué la reserva no se podía hacer online ya que es más facil tanto para el cliente como para el trabajador de la empresa que maneje las pistas. Por eso, me he propuesto ver que grado de dificultad tendría hacer un sistema de reservas para pistas online (sólo la parte de backend) y cómo se llevaría a cabo.

## Serverless :satellite:

Para implementar mis dos funciones usando serverless he utilizado dos plataformas que ofrecen servicios de alojamiento como son [Netlify](https://www.netlify.com/) y [Vercel](https://vercel.com/).

### Netlify
Para empezar a utilizar Netlify, vas a su página web y para registrarte te la opción de hacerlo con Github para tener enlazadas las cuentas, esta es la opción que he utilizado. Tendrás que darle permiso para instalarlo en tus repositorios de Github, tras esto, importas tu proyecto con la opcion "Import from Git".

Tiene una interfaz web bastante intuitiva y clara pero para trabajar en local mientras desarollo la función y no tener que desplegarla cada vez que quiera ver su funcionamiento, usaré el interfaz de línea de comandos (CLI) que se instala con la orden:

```
npm install -g netlify-cli"
```

Con la siguiente orden, nos desplegará la función en localhost.

```
netlify dev
```

He desarrollado [una función](https://github.com/sergiocantero8/reserve-it/blob/master/functions/precio.js) que recibe una provincia, un deporte y opcionalmente un parámetro para ordenar por precio (de más barato a más caro o viceversa) y te devuelve todas las pistas deportivas del deporte indicado en la provincia dada y ordenadas por precio.

Para el front-end alojado en este [repositorio](https://github.com/sergiocantero8/reserve-it/tree/master/front-end), he utilizado [Snowpack](https://www.snowpack.dev/) que es una herramienta de creación de frontend para un desarrollo web mucho más rápido, he utilizado un template muy simple llamado [lit-html](https://lit-html.polymer-project.org/) y he introducido un formulario que recoge los datos y muestra el resultado.

La función junto con el front-end están [alojadas en Netlify](https://compara-precios.netlify.app/)

Tiene más [información adicional](https://github.com/sergiocantero8/reserve-it/blob/master/docs/git_config.md) disponible sobre este proceso y la función escrita.

## Documentación :page_facing_up:

Enlaces del proyecto: 

+ [Código fuente del proyecto](https://github.com/sergiocantero8/ReserveIt-API/blob/master/src)

+ [Tests del proyecto](https://github.com/sergiocantero8/ReserveIt-API/tree/master/test)

+ [¿Por qué elegir este proyecto?](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/eleccion_proyecto.md)

+ [Pasos para la realizacion del proyecto](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/pasos.md)

+ [Configuración correcta de git](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/git_config.md).

+ [Justificación de las herramientas utilizadas](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/herramientas.md).

+ [Herramientas de construcción y test utilizadas](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/herramientas_test.md)

+ [Historias de usuario](https://github.com/sergiocantero8/reserve-it/blob/master/docs/herramientas_test.md)

+ [Justificación del contenedor elegido de Docker](https://github.com/sergiocantero8/reserve-it/blob/master/docs/justificacion_docker.md)

+ [Explicación del dockerfile y .dockerignore](https://github.com/sergiocantero8/reserve-it/blob/master/docs/explicacion_dockerfile.md)

+ [Enlazar con DockerHub y Github Container Registry](https://github.com/sergiocantero8/reserve-it/blob/master/docs/dockerhub_y_gcr.md)

+ [Integración continua](https://github.com/sergiocantero8/reserve-it/blob/master/docs/integracion_continua.md)




---
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
