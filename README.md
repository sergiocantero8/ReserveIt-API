# Proyecto de Infraestructura Virtual: reserve-it

## Descripción del proyecto :green_book:
La idea de la aplicación es desarrollar un sistema de reservas online para pistas deportivas (fútbol, tenis, pádel...etc). La app también será capaz de decirte precios, ubicación, una breve descripción de los complejos deportivos, tu historial de reservas y más funcionalidades.

## Docker :whale2:

### Justificacion del contenedor base
Como utilizo [Node.js]((https://nodejs.org/es/)) en mi proyecto, he consultado las imágenes oficiales de Node.js en [DockerHub](https://hub.docker.com/), tenemos tres opciones a la hora de elegir una imagen oficial de Nodejs:

+ **node:[version]** : Es la imagen por defecto de node, esta imagen es ideal si no sabes exactamente cuáles son tus necesidades ya que es la más completa, en mi caso, no necesito gran parte de las utilidades que incluye. Un gran inconveniente de esta imagen es el tamaño, ocupa unos 910MB. Tiene una gran cantidad de paquetes Debian muy comunes. Lo que reduce la cantidad de paquetes que las imágenes que se derivan de él necesitan instalar, reduciendo así el tamaño total de todas las imágenes en su sistema.

+ **node:[version]-alpine**: Alpine es una distribución mínima, que cuenta con apenas 75 MB. El problema de Alpine, en este caso, es la escasez de binarios y librerías, por lo que tendremos que generar más líneas para completar nuestro Dockerfile, además de incrementar el nivel de esfuerzo para intercambiar gestores de paquetes (apt to apk), tratar casos extremos y trabajar con limitaciones de análisis de seguridad.

+ **node:[version]-slim** : Esta imagen solo contiene los paquetes mínimos necesarios para ejecutar node. Si estamos trabajando en un entorno en el que solo se implementará la imagen de node y además tiene limitaciones de espacio, ésta es la imagen que se recomienda. En los últimos años, la imagen slim se ha reducido a 150 MB y funciona mejor en la gran mayoría de los escenarios

Conclusión: He escogido la version node:10-alpine, ya que esta versión me ha tardado menos que una slim y no es pesada. Además la slim tenía un problema con las dependencias de mocha que no conseguía descomprimir uno de los archivos debido a que faltaba la instalación de bzip2 y en alpine no me daba ningún problema.


### Dockerfile y .dockerignore
Voy a explicar línea a línea el [Dockerfile](https://github.com/sergiocantero8/reserve-it/blob/master/Dockerfile) de mi proyecto:

```
FROM node:10-alpine
```
He utilizado esta imagen ya que con las versiones de slim he tenido fallos a la hora de desempaquetar una de las dependencias que incluye mocha, ya que la herramienta para descomprimir ese paquete no venía instalada pero en alpine sí.

```
LABEL version="1.0" maintainer="Sergio Azañon Cantero <sergiocantero8@gmail.com>"
```
Una etiqueta para saber la versión y el autor del dockerfile.

```
COPY package.json ./
COPY Gruntfile.js ./
```
Copiamos los archivos que son necesarios para la ejecución de los tests, que en este caso es el paquete de dependencias y el task-runner.

Creamos un nuevo usuario para que no instale las dependencias con privilegios de superusuario,ya que para ejecutar los tests no se necesita ser root.

```
RUN adduser -D usuario
```

```
RUN npm install --no-install-recommends && npm install -g grunt-cli 
```
Instalamos las dependencia que necesita el proyecto y lo hacemos en una sola línea como indican las buenas prácticas ya que así se mantiene el caché para ambos comandos. Optimizamos un poco la imagen no instalando paquetes que nos recomienda.

```
USER usuario
```
Le indicamos que no tendremos privilegios.

Elimina archivos temporales y que no se utilizan para optimizar un poco la imagen.

```
RUN rm -rf /var/lib/apt/lists/*
```

```
WORKDIR /test
VOLUME /test

ENV PATH=/node_modules/.bin:$PATH
```

Le indicamos el directorio donde se va a montar cuando al ejecutar los tests utilicemos el -v. En node necesitamos node_modules para que se reconozca grunt, pero cuando se monta el volumen se sobreescribe, por eso le indicamos la ruta.

```
CMD ["grunt","test"]
```
Y por último, inndicamos el comando que se ejecutará para hacer correr los tests.

He añadido un [.dockerignore](https://github.com/sergiocantero8/reserve-it/blob/master/.dockerignore) para que el contenido de éste, no se añada a la imagen que se crea.

### Docker Hub y Github Container Registry 
He utilizado dos registros de imágenes de contenedores: Docker Hub y Github Container Registry.

He enlazado mi cuenta de Github y la de mi [Dockerhub](https://hub.docker.com/repository/docker/sergiocantero8/reserve-it/general) y que con cada push a mi repositorio de Github, automáticamente se actualize mi repositorio de Dockerhub. Es muy sencillo de enlazarlos, aunque me ha quedado más clara la explicación con este [artículo](https://docs.docker.com/docker-hub/builds/). Creándote una cuenta de DockerHub, enlazarla con Github y teniendo un Dockerfile es suficiente para que se automatize.

Para Github Container Registry es un poco más complicado, ya que primero debemos generar un token y identificarnos con la orden:
```
docker login https://docker.pkg.github.com -u sergiocantero8 -p TOKEN
```
Teniendo buildeada la imagen que queramos subir, en mi caso sería:

```
docker push docker.pkg.github.com/sergiocantero8/reserve-it/reserve-it-container:latest
```

Y ya tendríamos el paquete en github, podríamos volver a descargarlo con:

```
docker pull docker.pkg.github.com/sergiocantero8/reserve-it/reserve-it-container:latest
```
[Paquete de mi proyecto](https://github.com/sergiocantero8/reserve-it/packages/474738)

### Ejecutar los tests desde DockerHub
Para ejecutar los tests, primero nos descargamos la imagen del [repositorio de DockerHub](https://hub.docker.com/repository/docker/sergiocantero8/reserve-it/general) con el comando:

```
docker pull sergiocantero8/reserve-it:latest
```

Una vez descargada la imagen, ejecutaremos los tests con la orden:

```
docker run -t -v `pwd`:/test sergiocantero8/reserve-it

```


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




---
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
