### Docker Hub y Github Container Registry 
He utilizado dos registros de imágenes de contenedores: Docker Hub y Github Container Registry.

He enlazado mi cuenta de Github y la de mi [Dockerhub](https://hub.docker.com/repository/docker/sergiocantero8/reserve-it/general) y que con cada push a mi repositorio de Github, automáticamente se actualize mi repositorio de Dockerhub. Es muy sencillo de enlazarlos, aunque me ha quedado más clara la explicación con este [artículo](https://docs.docker.com/docker-hub/builds/). Creándote una cuenta de DockerHub, enlazarla con Github y teniendo un Dockerfile es suficiente para que se automatize.
Los builds automatizados se configuran en la interfaz web de Docker Hub. Iniciamos sesión en Docker Hub, hay un menú desplegable en la parte superior de la pantalla con el nombre “Create”. En este menú se selecciona la opción “Create Automated Build”, lo que redirige a una nueva pantalla en la que se debe enlazar nuestra cuenta de Docker Hub con la cuenta de GitHub. En la nueva pantalla pulsamos el boton “Link Accounts” y elegimos Github. Cuando ya tenemos nuestra cuenta enlazada, elegimos el repositorio que queremos que se automatice.

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