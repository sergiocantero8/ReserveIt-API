# Partirá de la imagen slim de node 
FROM node:10-alpine

# Sólo es información del autor del dockerfile
LABEL version="1.0" maintainer="Sergio Azañon Cantero <sergiocantero8@gmail.com>"

#Copiamos los archivos necesarios 
COPY package*.json ./
COPY Gruntfile.js ./


# Instalamos dependencias (en una sola línea así el caché se mantiene para ambos comandos)
RUN npm install && npm install -g grunt-cli 
RUN useradd -r -u 5000 usuario


WORKDIR /test
VOLUME /test


USER usuario

CMD ["grunt"]