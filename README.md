# Proyecto de Infraestructura Virtual: reserve-it

## Descripción del proyecto :green_book:
La idea de la aplicación es desarrollar un sistema de reservas online para pistas deportivas (fútbol, tenis, pádel...etc). La app también será capaz de decirte precios, ubicación, una breve descripción de los complejos deportivos, tu historial de reservas y más funcionalidades.

## Docker: elección de contenedor para un entorno de pruebas

### Imagen base
Como utilizo [Node.js]((https://nodejs.org/es/)) en mi proyecto, he consultado las imágenes oficiales de Node.js en [DockerHub](https://hub.docker.com/), tenemos tres opciones a la hora de elegir una imagen oficial de Nodejs:

+ node:<version> : Es la imagen por defecto de node, esta imagen es ideal si no sabes exactamente cuáles son tus necesidades ya que es la más completa, en mi caso, no necesito gran parte de las utilidades que incluye. Un gran inconveniente de esta imagen es el tamaño, ocupa unos 910MB. Tiene una gran cantidad de paquetes Debian muy comunes. Lo que reduce la cantidad de paquetes que las imágenes que se derivan de él necesitan instalar, reduciendo así el tamaño total de todas las imágenes en su sistema.

+ node:<version>-alpine: Alpine es una distribución mínima, que cuenta con apenas 75 MB. El problema de Alpine, en este caso, es la escasez de binarios y librerías, por lo que tendremos que generar más líneas para completar nuestro Dockerfile, además de incrementar el nivel de esfuerzo para intercambiar gestores de paquetes (apt to apk), tratar casos extremos y trabajar con limitaciones de análisis de seguridad, lo que no aconsejo la imagen de node:alpine para la mayoría de los casos de uso.

+ node:<version>-slim: Esta imagen solo contiene los paquetes mínimos necesarios para ejecutar node. Si estamos trabajando en un entorno en el que solo se implementará la imagen de node y además tiene limitaciones de espacio, ésta es la imagen que se recomienda. En los últimos años, la imagen slim se ha reducido a 150 MB y funciona mejor en la gran mayoría de los escenarios




## Herramientas utilizadas y justificación de la elección :hammer:
Estas son las [herramientas principales](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/herramientas.md) que voy a utilizar en el proyecto.

+ Lenguaje de programación: [Node.js](https://nodejs.org/es/)
+ Base de datos: [MariaDB](https://mariadb.org/)
+ Framework: [Express](https://expressjs.com/es/)
+ Test: [Mocha](https://mochajs.org/) y [Chai](https://www.chaijs.com/)
+ Task-runner: [Grunt](https://gruntjs.com/)

## Historias de usuario :busts_in_silhouette:
Para ver todas las historias de usuario que se llevan a cabo en el proyecto, pincha [aquí](https://github.com/sergiocantero8/ReserveIt-API/labels/user-stories)
+ [HU1 - Como usuario, quiero consultar las reservas que tengo activas ](https://github.com/sergiocantero8/ReserveIt-API/issues/3)
+ [HU2 - Como usuario, quiero reservar en un polideportivo](https://github.com/sergiocantero8/ReserveIt-API/issues/8)
+ [HU3 - Como usuario, quiero ver si la pista está libre a una hora determinada](https://github.com/sergiocantero8/ReserveIt-API/issues/9)


## Documentación :page_facing_up:

Enlaces del proyecto: 

+ [Código fuente del proyecto](https://github.com/sergiocantero8/ReserveIt-API/blob/master/src)

+ [Tests del proyecto](https://github.com/sergiocantero8/ReserveIt-API/tree/master/test)

+ [¿Por qué elegir este proyecto?](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/eleccion_proyecto.md)

+ [Pasos para la realizacion del proyecto](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/pasos.md)

+ [Configuración correcta de git](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/git_config.md).

+ [Justificación de las herramientas utilizadas](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/herramientas.md).

+[Herramientas de construcción y test utilizadas](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/herramientas_test.md)




---
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
