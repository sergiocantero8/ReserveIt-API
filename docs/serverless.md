## Serverless :satellite:

Para implementar mis dos funciones usando serverless he utilizado dos plataformas que ofrecen servicios de alojamiento como son [Netlify](https://www.netlify.com/) y [Vercel](https://vercel.com/).

### Netlify

#### Rúbricas 1 y 2: despliegue correcto y funcionando en Netlify para despliegue continuo e ir más alla del despliegue de un ejemplo con sus issues y HU correspondiente
Para empezar a utilizar Netlify, vas a su página web y para registrarte te la opción de hacerlo con Github para tener enlazadas las cuentas, esta es la opción que he utilizado. Tendrás que darle permiso para instalarlo en tus repositorios de Github, tras esto, importas tu proyecto con la opcion "Import from Git". Debemos importar el proyecto entero porque las funciones necesitan archivos que están en otras carpetas del proyecto. Al importar el proyecto, netlify automáticamente despliega las funciones que estén en la carpeta `functions` por lo que creamos la carpeta y creamos ahí la función.

Cómo los créditos en Netlify son limitados, para ir probando la función no hace faltar hacer push al repositorio cada vez que queramos probarla. Podemos ejecutarla en local con `netlify dev`.

He desarrollado [una función](https://github.com/sergiocantero8/reserve-it/blob/master/functions/precio.js) que recibe una provincia, un deporte y opcionalmente un parámetro para ordenar por precio (de más barato a más caro o viceversa) y te devuelve todas las pistas deportivas del deporte indicado en la provincia dada y ordenadas por precio.

#### Implementación de la función
Antes de explicar más detalladamente la función, he creado un archivo llamada `datos_pistas.json` donde están los datos de muchas pistas de distintas provincias de Andalucía. Sus datos son la provincia, donde se ubica la pista, el tipo de pista qué es (fútbol, padel...etc) y sus precios tanto diurno como nocturno.

La función empieza importando estos datos anteriormente descritos para manejarlos. Dentro del manejador de la función, he creado una función que calcula la media de precios diurnos y nocturnos para que sea mas sencillo a la hora de calcularlo. Obtenemos los parámetros que nos pase el usuario (que son provincia, tipo y opcionalmente el orden del precio) y los metemos en variables. Filtramos los parámetros del usuario con los datos de las pistas que tenemos en el json, si el resultado tiene 0 elementos significa que no hay resultados para esos parámetros y devolvemos un código 400. Calculamos todas las medias de las pistas filtradas, y después las ordenamos de más barato a más caras o viceversa dependiendo del parámetro orden del precio.

Si todo ha ido correctamente, devolvemos el código de estado 200 de que todo ha ido bien y el resultado en formato JSON.

#### Tests e issues/historias de usuario de la función serverless

He realizado un [test](https://github.com/sergiocantero8/reserve-it/blob/master/test/test_API.js) para comprobar que la API funciona correctamente.
La historia de usuario a la que corresponde el test es: 
[[HU5] - Como usuario, quiero saber cuál es la pista más barata de un deporte en la provincia](https://github.com/sergiocantero8/reserve-it/issues/40)

Todos los issues son: 
- [Documentacion serverless](https://github.com/sergiocantero8/reserve-it/issues/42)
- [Implementar función serverless con Netlify](https://github.com/sergiocantero8/reserve-it/issues/43)
- [Datos serializados para la funcion](https://github.com/sergiocantero8/reserve-it/issues/44)
- [Configuracion netflify](https://github.com/sergiocantero8/reserve-it/issues/45)
- [Front-end para la funcion serverless](https://github.com/sergiocantero8/reserve-it/issues/46)
- [Añadidos tests para la API desarrollada](https://github.com/sergiocantero8/reserve-it/issues/48)


### Rúbrica 4: integración con un front-end web que funcione en la práctica
Para el front-end alojado en este [repositorio](https://github.com/sergiocantero8/reserve-it/tree/master/front-end), he utilizado [Snowpack](https://www.snowpack.dev/) que es una herramienta de creación de frontend para un desarrollo web mucho más rápido, he utilizado un template muy simple llamado [lit-html](https://lit-html.polymer-project.org/) y he introducido un formulario que recoge los datos y muestra el resultado.

La función junto con el front-end están [alojadas en Netlify](https://compara-precios.netlify.app/)

Para la construcción del front-end con la función serverless he utilizado la siguiente orden que instala las dependencias necesarias:
```
cd front-end && npm i && npm run build && cd ..
```

Tiene más [información adicional](https://github.com/sergiocantero8/reserve-it/blob/master/docs/git_config.md) disponible sobre este proceso y la función escrita.

### Vercel

#### Rúbrica 3: : Uso (e integración) de varias plataformas de despliegue
Se ha añadido una simple función de ejemplo para Vercel, únicamente muestra el nombre que le pases como argumento. Se puede probar en este [enlace](https://vercel-example-xi.vercel.app/api/ejemplo_vercel.js)
