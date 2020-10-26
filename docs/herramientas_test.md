## Herramientas de construcción y test utilizadas :triangular_ruler:
Como herramienta de construcción he utilizado [Grunt](https://gruntjs.com/), un corredor de tareas (task-runner) que principalmente sirve para automatizar tareas repetitivas. Lo he elegido porque he encontrado bastante información sobre él en internet y manuales de cómo usarlo correctamente, una de sus principales características es que tiene un fichero de configuración único, lo que prima más la configuración que la programación. 

Para ejecutar las tareas del task-runner, hay que tenerlo instalado y usaremos la orden:
```
 $ grunt
```
Con esta orden, grunt ejecuta la tarea que tiene por defecto, que en este caso es la ejecución de los tests de nuestro proyecto.

Como herramienta de testeo he utilizado el framework [Mocha](https://mochajs.org/) y la librería de aserciones [Chai](https://www.chaijs.com/). He utilizado Mocha porque tiene muchos puntos positivos como son que tiene una API clara y sencilla, permite el uso de cualquier biblioteca de aserciones que genere excepciones en caso de fallo, compatible con algunos servidores CI, el testing asíncrono es muy simple y hay bastante información acerca de esta herramienta.
Como librería de aserciones he utilizado Chai ya que tiene varias interfaces que permiten al desarrollador elegir la más cómoda y además el plugin HTTP de Chai permite usar fácilmente aserciones en solicitudes HTTP que se adapten a nuestras necesidades.