# Partirá de la imagen alpine de node 
FROM node:10-alpine

# Sólo es información del autor del dockerfile
LABEL version="1.0" maintainer="Sergio Azañon Cantero <sergiocantero8@gmail.com>"

#Copiamos los archivos necesarios 
COPY package*.json ./
COPY Gruntfile.js ./


# Instalamos dependencias (en una sola línea así el caché se mantiene para ambos comandos)
RUN npm install && npm install -g grunt-cli && adduser -D usuario

# Al ejecutar los tests no necesitamos ser root
USER usuario


# Directorio que montara al utilizar -v 
WORKDIR /test
VOLUME /test

ENV PATH=/node_modules/.bin:$PATH


CMD ["grunt","test"]