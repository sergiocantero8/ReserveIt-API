# Proyecto de Infraestructura Virtual: ReserveIt-API

## Descripción del proyecto :green_book:
La idea de la aplicación es desarrollar un sistema de reservas online para pistas deportivas (fútbol, tenis, pádel...etc). La app también será capaz de decirte precios, ubicación, una breve descripción de los complejos deportivos, tu historial de reservas y más funcionalidades.

## Herramientas de construcción y test utilizadas :triangular_ruler:
Como herramienta de construcción he utilizado [Grunt](https://gruntjs.com/), un corredor de tareas (task-runner) que principalmente sirve para automatizar tareas repetitivas. Lo he elegido porque he encontrado bastante información sobre él en internet y manuales de cómo usarlo correctamente.

Para ejecutar el corredor de tareas, hay que tenerlo instalado y usar la orden:
```
 $ grunt
```
Como herramienta de testeo he utilizado el framework [Mocha](https://mochajs.org/) y la librería de aserciones [Chai](https://www.chaijs.com/). Al ser la primera vez que utilizo herramientas para testear código, he querido elegir un framework que sea muy utilizado ya que habrá más información sobre él.




## Tests y dependencias :heavy_check_mark:
Antes de todo, debes clonar este repositorio, puedes descargartelo o clonar con la orden:

```
 $ git clone https://github.com/sergiocantero8/ReserveIt-API
```
Para las dependencias, npm install leerá del archivo package.json para instalar todas las dependencias que encuentre. Si el paquete ya está instalado intentará actualizarlo. Ejecuta:

```
 $ npm install
```

Para la realización de los tests he utilizado los frameworks  y , ya que al ser de mis primeros testeos, he querido buscar frameworks populares y estables.

Para la ejecución de los tests:
```
 $ npm test
```

## Herramientas utilizadas y justificación de la elección :hammer:
Estas son las herramientas principales que voy a utilizar en el proyecto, para ver con más detalle el por qué he utilizado cada una pincha [aquí](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/herramientas.md)
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




---
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
