# Proyecto de Infraestructura Virtual: ReserveIt-API

## Descripción del proyecto :green_book:
La idea de la aplicación es desarrollar un sistema de reservas online para pistas deportivas (fútbol, tenis, pádel...etc). La app también será capaz de decirte precios, ubicación, una breve descripción de los complejos deportivos, tu historial de reservas y más funcionalidades.

## Herramientas de construcción y test utilizadas :triangular_ruler:
Como herramienta de construcción he utilizado [Grunt](https://gruntjs.com/), un corredor de tareas (task-runner) que principalmente sirve para automatizar tareas repetitivas. Lo he elegido porque he encontrado bastante información sobre él en internet y manuales de cómo usarlo correctamente, una de sus principales características es que tiene un fichero de configuración único, lo que prima más la configuración que la programación. 

Para ejecutar las tareas del task-runner, hay que tenerlo instalado y usaremos la orden:
```
 $ grunt
```
Con esta orden, grunt ejecuta la tarea que tiene por defecto, que en este caso es la ejecución de los tests de nuestro proyecto.

Como herramienta de testeo he utilizado el framework [Mocha](https://mochajs.org/) y la librería de aserciones [Chai](https://www.chaijs.com/). He utilizado Mocha porque tiene muchos puntos positivos como son que tiene una API clara y sencilla, permite el uso de cualquier biblioteca de aserciones que genere excepciones en caso de fallo, compatible con algunos servidores CI, el testing asíncrono es muy simple y hay bastante información acerca de esta herramienta.
Como librería de aserciones he utilizado Chai ya que tiene varias interfaces que permiten al desarrollador elegir la más cómoda y además el plugin HTTP de Chai permite usar fácilmente aserciones en solicitudes HTTP que se adapten a nuestras necesidades.



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




---
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
