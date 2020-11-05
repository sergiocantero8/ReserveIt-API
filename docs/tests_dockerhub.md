### Ejecutar los tests desde DockerHub
Para ejecutar los tests, primero nos descargamos la imagen del [repositorio de DockerHub](https://hub.docker.com/repository/docker/sergiocantero8/reserve-it/general) con el comando:

```
docker pull sergiocantero8/reserve-it:latest
```

Una vez descargada la imagen, ejecutaremos los tests con la orden:

```
docker run -t -v `pwd`:/test sergiocantero8/reserve-it

```