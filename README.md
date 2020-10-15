# Proyecto de Infraestructura Virtual: ReserveIt-API

## Descripción del proyecto :green_book:
La idea de la aplicación es desarrollar un sistema de reservas online para pistas deportivas (fútbol, tenis, pádel...etc). La app también será capaz de decirte precios, ubicación, una breve descripción de los complejos deportivos, tu historial de reservas y más funcionalidades.

## ¿Por qué he elegido este proyecto? :mag:
Llevamos toda la vida reservando pistas para hacer deporte de forma telefónica o presencial. Ya en 2020 debería poderse hacer de forma online la reserva pero sin embargo la mayoría de sitios no cuentan con un sistema para reservar online. ¿Por qué? ¿Es muy caro mantener una estructura para hacer un sistema de reservas que funcione correctamente? ¿O es muy complicado?  
A la hora de hacer una reserva para una pista deportiva, siempre me he preguntado por qué la reserva no se podía hacer online ya que es más facil tanto para el cliente como para el trabajador de la empresa que maneje las pistas. Por eso, me he propuesto ver que grado de dificultad tendría hacer un sistema de reservas para pistas online (sólo la parte de backend) y cómo se llevaría a cabo.

## Herramientas utilizadas y justificación de la elección :hammer:
Estas son las herramientas principales que voy a utilizar en el proyecto, para ver con más detalle el por qué he utilizado cada una pincha [aquí](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/herramientas.md)
+ Lenguaje de programación: [Node.js](https://nodejs.org/es/)
+ Base de datos: [MariaDB](https://mariadb.org/)
+ Framework: [Express](https://expressjs.com/es/)

## Historias de usuario :busts_in_silhouette:
Para ver todas las historias de usuario que se llevan a cabo en el proyecto, pincha [aquí](https://github.com/sergiocantero8/ReserveIt-API/labels/user-stories)
+ [HU1 - Como usuario, quiero consultar las reservas que tengo activas ](https://github.com/sergiocantero8/ReserveIt-API/issues/3)
+ [HU2 - Como usuario, quiero reservar en un polideportivo](https://github.com/sergiocantero8/ReserveIt-API/issues/8)
+ [HU3 - Como usuario, quiero ver si la pista está libre a una hora determinada](https://github.com/sergiocantero8/ReserveIt-API/issues/9)


## Documentación :page_facing_up:
En el directorio [docs](https://github.com/sergiocantero8/ReserveIt-API/tree/master/docs) se encuentran ficheros que describen:

+ [Código fuente del proyecto](https://github.com/sergiocantero8/ReserveIt-API/blob/master/src)

+ [Tests del proyecto](https://github.com/sergiocantero8/ReserveIt-API/tree/master/test)

+ [Pasos para la realizacion del proyecto](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/pasos.md)

+ [Configuración correcta de git](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/git_config.md).

+ [Justificación de las herramientas utilizadas](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/herramientas.md).


## Tests y dependencias :heavy_check_mark:
Antes de todo, debes clonar este repositorio, puedes descargartelo o clonar con la orden:

```
 $ git clone https://github.com/sergiocantero8/ReserveIt-API
```
Para las dependencias, npm install leerá del archivo package.json para instalar todas las dependencias que encuentre. Si el paquete ya está instalado intentará actualizarlo. Ejecuta:

```
 $ npm install
```

Para la realización de los tests he utilizado los frameworks [Mocha](https://mochajs.org/) y [Chai](https://www.chaijs.com/), ya que al ser de mis primeros testeos, he querido buscar frameworks populares y estables.

Para la ejecución de los tests:
```
 $ npm test
```

Todos los tests realizados se encuentran [aquí](https://github.com/sergiocantero8/ReserveIt-API/tree/master/test)
---
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
