# Partirá de la imagen slim de node 
FROM node:15-buster-slim

# Sólo es información del autor del dockerfile
LABEL version="1.0" maintainer="Sergio Azañon Cantero <sergiocantero8@gmail.com>"

# Instalamos dependencias (en una sola línea así el caché se mantiene para ambos comandos)
RUN apt-get update && npm install -D mocha chai chai-http

#Copiamos los archivos necesarios 
COPY package*.json ./

COPY Gruntfile.js ./

ENV PATH=/proyecto/node_modules/.bin:$PATH

WORKDIR /test
VOLUME /test

CMD ["grunt"]