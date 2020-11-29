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

#### Rúbricas 1 y 2: despliegue correcto y funcionando en Netlify para despliegue continuo e ir más alla del despliegue de un ejemplo con sus issues y HU correspondiente
Para empezar a utilizar Netlify, vas a su página web y para registrarte te la opción de hacerlo con Github para tener enlazadas las cuentas, esta es la opción que he utilizado. Tendrás que darle permiso para instalarlo en tus repositorios de Github, tras esto, importas tu proyecto con la opcion "Import from Git". Debemos importar el proyecto entero porque las funciones necesitan archivos que están en otras carpetas del proyecto. Al importar el proyecto, netlify automáticamente despliega las funciones que estén en la carpeta `functions` por lo que creamos la carpeta y creamos ahí la función.

Cómo los créditos en Netlify son limitados, para ir probando la función no hace faltar hacer push al repositorio cada vez que queramos probarla. Podemos ejecutarla en local con `netlify dev`.

He desarrollado [una función](https://github.com/sergiocantero8/reserve-it/blob/master/functions/precio.js) que recibe una provincia, un deporte y opcionalmente un parámetro para ordenar por precio (de más barato a más caro o viceversa) y te devuelve todas las pistas deportivas del deporte indicado en la provincia dada y ordenadas por precio.

#### Implementación de la función
Antes de explicar más detalladamente la función, he creado un archivo llamada `datos_pistas.json` donde están los datos de muchas pistas de distintas provincias de Andalucía. Sus datos son la provincia, donde se ubica la pista, el tipo de pista qué es (fútbol, padel...etc) y sus precios tanto diurno como nocturno.

La función empieza importando estos datos anteriormente descritos para manejarlos. Dentro del manejador de la función, he creado una función que calcula la media de precios diurnos y nocturnos para que sea mas sencillo a la hora de calcularlo. Obtenemos los parámetros que nos pase el usuario (que son provincia, tipo y opcionalmente el orden del precio) y los metemos en variables. Filtramos los parámetros del usuario con los datos de las pistas que tenemos en el json, si el resultado tiene 0 elementos significa que no hay resultados para esos parámetros y devolvemos un código 400. Calculamos todas las medias de las pistas filtradas, y después las ordenamos de más barato a más caras o viceversa dependiendo del parámetro orden del precio.

Si todo ha ido correctamente, devolvemos el código de estado 200 de que todo ha ido bien y el resultado en formato JSON.

#### Tests e issues/historias de usuario de la función serverless

He realizado un [test](https://github.com/sergiocantero8/reserve-it/blob/master/test/test_API.js) para comprobar que la API funciona correctamente.
La historia de usuario a la que corresponde el test es: 
[[HU5] - Como usuario, quiero saber cuál es la pista más barata de un deporte en la provincia](https://github.com/sergiocantero8/reserve-it/issues/40)

Todos los issues son: 
- [Documentacion serverless](https://github.com/sergiocantero8/reserve-it/issues/42)
- [Implementar función serverless con Netlify](https://github.com/sergiocantero8/reserve-it/issues/43)
- [Datos serializados para la funcion](https://github.com/sergiocantero8/reserve-it/issues/44)
- [Configuracion netflify](https://github.com/sergiocantero8/reserve-it/issues/45)
- [Front-end para la funcion serverless](https://github.com/sergiocantero8/reserve-it/issues/46)
- [Añadidos tests para la API desarrollada](https://github.com/sergiocantero8/reserve-it/issues/48)


### Rúbrica 4: integración con un front-end web que funcione en la práctica
Para el front-end alojado en este [repositorio](https://github.com/sergiocantero8/reserve-it/tree/master/front-end), he utilizado [Snowpack](https://www.snowpack.dev/) que es una herramienta de creación de frontend para un desarrollo web mucho más rápido, he utilizado un template muy simple llamado [lit-html](https://lit-html.polymer-project.org/) y he introducido un formulario que recoge los datos y muestra el resultado.

La función junto con el front-end están [alojadas en Netlify](https://compara-precios.netlify.app/)

Para la construcción del front-end con la función serverless he utilizado la siguiente orden que instala las dependencias necesarias:
```
cd front-end && npm i && npm run build && cd ..
```

Tiene más [información adicional](https://github.com/sergiocantero8/reserve-it/blob/master/docs/git_config.md) disponible sobre este proceso y la función escrita.

### Vercel

#### Rúbrica 3: : Uso (e integración) de varias plataformas de despliegue
Se ha añadido una simple función de ejemplo para Vercel, únicamente muestra el nombre que le pases como argumento. Se puede probar en este [enlace](https://vercel-example-xi.vercel.app/api/ejemplo_vercel.js)

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
