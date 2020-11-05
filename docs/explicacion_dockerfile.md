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
