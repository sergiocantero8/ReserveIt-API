# Partirá de la imagen slim de node 
FROM node:10-alpine

# Sólo es información del autor del dockerfile
LABEL version="1.0" maintainer="Sergio Azañon Cantero <sergiocantero8@gmail.com>"

#Copiamos los archivos necesarios 
COPY package*.json ./
COPY Gruntfile.js ./
COPY ./src ./src
COPY ./test ./test

# Instalamos dependencias (en una sola línea así el caché se mantiene para ambos comandos)
RUN npm install && npm install -g grunt-cli 



WORKDIR /test
VOLUME /test

ENV PATH=/node_modules/.bin:$PATH


CMD ["grunt","test"]