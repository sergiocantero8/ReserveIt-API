# Proyecto de Infraestructura Virtual: reserve-it
[![Build Status](https://travis-ci.com/sergiocantero8/reserve-it.svg?branch=master)](https://travis-ci.com/sergiocantero8/reserve-it)
[![reserve-it](https://circleci.com/gh/sergiocantero8/reserve-it.svg?style=svg)](https://app.circleci.com/pipelines/github/sergiocantero8/reserve-it)
[![Netlify Status](https://api.netlify.com/api/v1/badges/652295d9-fd25-4ef9-86cd-e8077d424c66/deploy-status)](https://app.netlify.com/sites/compara-precios/deploys)
## Descripción del proyecto :green_book:
La idea de la aplicación es desarrollar un sistema de reservas online para pistas deportivas (fútbol, tenis, pádel...etc). La app también será capaz de decirte precios, ubicación, una breve descripción de los complejos deportivos, tu historial de reservas y más funcionalidades.

## ¿Por qué he elegido este proyecto? :mag:
Llevamos toda la vida reservando pistas para hacer deporte de forma telefónica o presencial. Ya en 2020 debería poderse hacer de forma online la reserva pero sin embargo la mayoría de sitios no cuentan con un sistema para reservar online. ¿Por qué? ¿Es muy caro mantener una estructura para hacer un sistema de reservas que funcione correctamente? ¿O es muy complicado?  
A la hora de hacer una reserva para una pista deportiva, siempre me he preguntado por qué la reserva no se podía hacer online ya que es más facil tanto para el cliente como para el trabajador de la empresa que maneje las pistas. Por eso, me he propuesto ver que grado de dificultad tendría hacer un sistema de reservas para pistas online (sólo la parte de backend) y cómo se llevaría a cabo.

## Diseño y test de un microservicio

### Rúbrica 1: Justificación técnica del framework elegido para el microservicio con documentación sobre cómo se usa en la práctica.

Para elegir el microframework adecuado con mi proyecto en Node, he barajado 5 microservicios que son: Express, Koa, NestJS, Sails y Hapi.

Empecemos por el más popular como es **Express**, tiene bastantes ventajas entre las que destaco:
- Su estabilidad, al ser un microframework bastante antiguo (comparado con otros) y de los más utilizados ha madurado bastante en todo este tiempo y tiene una gran comunidad que lo respalda.
- Una ventaja que es muy importante para su elección, es que tiene una API de enrutamiento muy potente para la creación de una API REST y para el uso de parámetro de ruta y cadenas de consulta.
- Tiene una buena documentación y su configuración es muy sencilla. 
- Personalización de middlewares con Express

Su desventaja principal es que no hay una única forma recomendada de hacer algo ya que express se considera a sí mismo como un marco minimalista sin supervisión. Esto te da mucha flexibilidad y poder pero al no existir una única forma recomendada de organizar las cosas, podría ser una trampa en proyectos más grandes.

### Rúbrica 3: Uso de buenas prácticas: configuración distribuida, logs, uso de middleware.

Para el uso de logs utilizaré un middleware de Express que se llama [Morgan](https://www.npmjs.com/package/morgan). Morgan recibe dos parámetros es el `format` y el segundo `options`es el objeto. El parámetro `format` puede ser un string o una función personalizada.
## Documentación del proyecto :page_facing_up:

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

+ [Serverless](https://github.com/sergiocantero8/reserve-it/blob/master/docs/serverless.md)




---
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
