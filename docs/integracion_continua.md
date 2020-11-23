## Integración continua :arrows_clockwise:

Para la integración continua, vamos a utilizar dos sistemas diferentes: Travis y Circle CI.

### Travis
[![Build Status](https://travis-ci.com/sergiocantero8/reserve-it.svg?branch=master)](https://travis-ci.com/sergiocantero8/reserve-it)

Para configurar Travis correctamente es muy simple, ya que al darnos de alta, nos da la opción de enlazar nuestra cuenta con Github y elegir un repositorio para el cuál con cada push se relancen los tests. Tras hacer el paso anterior, tendremos que crear el [fichero de configuracion de Travis](https://github.com/sergiocantero8/reserve-it/blob/master/.travis.yml) , esto permite que su configuración sea flexible y controlada por versiones.

Como vemos en la parte superior, Travis nos proporciona un badge para que desde nuestro repositorio de Github podamos ver el estado del último test que se ha lanzado en Travis.

Voy a explicar el contenido de mi fichero de configuración de Travis:

Le indicamos el lenguaje que estamos utilizando y del cuál partimos
```

language: node_js

```

Utilizo las versiones 12, 14 y 15 porque además de que forman parte del [Node.js Release Working Group](https://github.com/nodejs/Release), funcionan correctamente con nuestro proyecto.

```
node_js:
    - 12
    - 14
    - 15

```
Instalamos las dependencias, el framework que utilizamos para los tests que es Mocha y el task-runner que es Grunt
```
before_install:
  - npm install -g mocha grunt
```

Y finalmente, para ejecutar los tests, necesitamos que ejecute la orden grunt test

```
script: grunt test

```

### Circle CI

[![reserve-it](https://circleci.com/gh/sergiocantero8/reserve-it.svg?style=svg)](https://app.circleci.com/pipelines/github/sergiocantero8/reserve-it)

Para empezar a utilizar este sistema, primero deberemos darnos de alta en él, los pasos a seguir son muy parecidos a Travis ya que nos permite darnos de alta con nuestra cuenta de Github.

A la hora del fichero de configuración, cambia un poco. Debemos crearnos una carpeta llamada .circleci y un archivo llamado config.yml. Aunque la interfaz web nos permite crear y editar el fichero desde la web y hacer un commit para Github, he elegido esta forma por probar algo diferente a lo anterior, ellos te hacen un commit y tu haces un PR y lo mergeas con tu rama master. Lo he configurado de manera que se aproveche el contenedor de Docker creado en el anteriormente, voy a explicar brevemente mi fichero de configuración de CircleCI:


Defino los trabajos que queremos que ejecute para este proyecto, descargo el contenedor haciendo uso de Docker, realizo un checkout del repositorio y lanzo los tests con el gestor de tareas. 


```
version: 2.1

jobs:

 build:
   
   docker:
      - image: sergiocantero8/reserve-it

   steps:
      - checkout
      - run:
            name: Ejecutando tests
            command: grunt test



```

Como podemos observar, CircleCI también te da la posibilidad de añadir un badge para ver el estado del último build de tu proyecto.
He tenido que activar desde la web los Github Checks siguiendo este [tutorial](https://circleci.com/docs/2.0/enable-checks/)
