## Docker :whale2:

### Justificacion del contenedor base
Como utilizo [Node.js]((https://nodejs.org/es/)) en mi proyecto, he consultado las imágenes oficiales de Node.js en [DockerHub](https://hub.docker.com/), tenemos tres opciones a la hora de elegir una imagen oficial de Nodejs:

+ **node:[version]** : Es la imagen por defecto de node, esta imagen es ideal si no sabes exactamente cuáles son tus necesidades ya que es la más completa, en mi caso, no necesito gran parte de las utilidades que incluye. Un gran inconveniente de esta imagen es el tamaño, ocupa unos 910MB. Tiene una gran cantidad de paquetes Debian muy comunes. Lo que reduce la cantidad de paquetes que las imágenes que se derivan de él necesitan instalar, reduciendo así el tamaño total de todas las imágenes en su sistema.

+ **node:[version]-alpine**: Alpine es una distribución mínima, que cuenta con apenas 75 MB. El problema de Alpine, en este caso, es la escasez de binarios y librerías, por lo que tendremos que generar más líneas para completar nuestro Dockerfile, además de incrementar el nivel de esfuerzo para intercambiar gestores de paquetes (apt to apk), tratar casos extremos y trabajar con limitaciones de análisis de seguridad.

+ **node:[version]-slim** : Esta imagen solo contiene los paquetes mínimos necesarios para ejecutar node. Si estamos trabajando en un entorno en el que solo se implementará la imagen de node y además tiene limitaciones de espacio, ésta es la imagen que se recomienda. En los últimos años, la imagen slim se ha reducido a 150 MB y funciona mejor en la gran mayoría de los escenarios

Conclusión: He escogido la version node:10-alpine, ya que esta versión me ha tardado menos que una slim y no es pesada. Además la slim tenía un problema con las dependencias de mocha que no conseguía descomprimir uno de los archivos debido a que faltaba la instalación de bzip2 y en alpine no me daba ningún problema.
