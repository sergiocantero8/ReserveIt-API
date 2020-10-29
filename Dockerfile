# Partirá de la imagen alpine de node 
FROM node:10-alpine

# Sólo es información del autor del dockerfile
LABEL version="1.0" maintainer="Sergio Azañon Cantero <sergiocantero8@gmail.com>"

#Copiamos los archivos necesarios 
COPY package.json ./
COPY Gruntfile.js ./

# Creamos un nuevo usuario para que no instale las dependencias con privilegios de superusuario
RUN adduser -D usuario


# Instalamos dependencias (en una sola línea así el caché se mantiene para ambos comandos)
RUN npm install --no-install-recommends && npm install -g grunt-cli 

# Al ejecutar los tests no necesitamos ser root
USER usuario

# Eliminas archivos temporales y archivos que no utilizas
RUN rm -rf /var/lib/apt/lists/*

# Directorio que montara al utilizar -v 
WORKDIR /test
VOLUME /test


ENV PATH=/node_modules/.bin:$PATH



CMD ["grunt","test"]