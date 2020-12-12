# Proyecto de Infraestructura Virtual: reserve-it
[![Build Status](https://travis-ci.com/sergiocantero8/reserve-it.svg?branch=master)](https://travis-ci.com/sergiocantero8/reserve-it)
[![reserve-it](https://circleci.com/gh/sergiocantero8/reserve-it.svg?style=svg)](https://app.circleci.com/pipelines/github/sergiocantero8/reserve-it)
[![Netlify Status](https://api.netlify.com/api/v1/badges/652295d9-fd25-4ef9-86cd-e8077d424c66/deploy-status)](https://app.netlify.com/sites/compara-precios/deploys)
## Descripción del proyecto :green_book:
La idea de la aplicación es desarrollar un sistema de reservas online para pistas deportivas (fútbol, tenis, pádel...etc). La app también será capaz de decirte precios, ubicación, una breve descripción de los complejos deportivos, tu historial de reservas y más funcionalidades.

## ¿Por qué he elegido este proyecto? :mag:
Llevamos toda la vida reservando pistas para hacer deporte de forma telefónica o presencial. Ya en 2020 debería poderse hacer de forma online la reserva pero sin embargo la mayoría de sitios no cuentan con un sistema para reservar online. ¿Por qué? ¿Es muy caro mantener una estructura para hacer un sistema de reservas que funcione correctamente? ¿O es muy complicado?  
A la hora de hacer una reserva para una pista deportiva, siempre me he preguntado por qué la reserva no se podía hacer online ya que es más facil tanto para el cliente como para el trabajador de la empresa que maneje las pistas. Por eso, me he propuesto ver que grado de dificultad tendría hacer un sistema de reservas para pistas online (sólo la parte de backend) y cómo se llevaría a cabo.

## Diseño y test de un microservicio

### Rúbrica 1: Justificación técnica del framework elegido para el microservicio con documentación sobre cómo se usa en la práctica.

Para elegir el microframework adecuado con mi proyecto en Node, he barajado 5 microservicios que son: Express, Koa, NestJS y  Sails.

Empecemos por el más popular como es **Express**, tiene bastantes ventajas entre las que destaco:
- Su estabilidad, al ser un microframework bastante antiguo (comparado con otros) y de los más utilizados ha madurado bastante en todo este tiempo y tiene una gran comunidad que lo respalda.
- Una ventaja que es muy importante para su elección, es que tiene una API de enrutamiento muy potente para la creación de una API REST y para el uso de parámetro de ruta y cadenas de consulta.
- Tiene una buena documentación y su configuración es muy sencilla. 
- Personalización de middlewares con Express

Su desventaja principal es que no hay una única forma recomendada de hacer algo ya que express se considera a sí mismo como un marco minimalista sin supervisión. Esto te da mucha flexibilidad y poder pero al no existir una única forma recomendada de organizar las cosas, podría ser una trampa en proyectos más grandes.
Es el microframework que he elegido, para iniciarse con el desarrollo de un microservicio como es en mi caso, Express es el que mejor se adapta a mi tipo de proyecto. 

**Koa** y Express son muy parecidos (además el autor de ambos microframeworks es el mismo), Koa es muy ligero ya que sólo cuenta con 550 líneas de código y además utiliza generadores que hacen el código más legible y ordenado ya que lo hace más manejable. Comprende todas las nuevas funciones asíncronas que se pueden usar y hay muchos kits iniciales disponibles. Una gran desventaja es que Koa utiliza generadores que no son compatibles con ningún otro tipo de middleware de NodeJS.

**NestJS** en contraste con Express tiene un enfoque más mínimo. NestJS integra Typescript por defecto, lo cual es una de las grandes ventajas ya que explota al máximo sus características, en concreto los decoradores ya que se basa en ellos al igual que hace Angular para definir y extender el funcionamiento de los diferentes componentes del sistema. NestJS nos abstrae la capa de API a través de decoradores específicos (@Get, @Post, @Body) asociando endpoints a funciones totalmente abstraídas del framework de API y sobre las que ya podemos incorporar test unitarios, etc. Una gran desventaja es que hay pocos ejemplos de su uso y poca documentación ya que no es tan usado como los mencionados anteriormente.

**Sails.js** está diseñado para imitar el patrón MVC de marcos como Ruby on Rails, pero con soporte para los requisitos de las aplicaciones modernas: API basadas en datos con arquitectura escalable y orientada a servicios. Como ventajas tiene:
- API basadas en datos
- Generación sencilla de rutas/controladores
- Patron MVC
- Es escalables
- Arquitectura orientada a servicios

Como desventajas pondría que es más lento que Express, requiere bastante más tiempo para ejecutarse por completo. El ORM(Object Relational Mapping) es un poco limitado. 

### Rúbrica 2: Diseño en general del API, las rutas (o tareas), tipos devueltos por las peticiones y estados devueltos por las mismas, tests y documentación de todo, justificando como se ajustan a las historias de usuario, de forma que reflejen correctamente un diseño por capas que desacopla la lógica de negocio del API.

La API y rutas se han diseñado en torno a las historias de usuario del proyecto, por lo que cada ruta corresponde a una historia de usuario. El código fuente desarrollado para la API se puede visualizar en este [enlace](https://github.com/sergiocantero8/reserve-it/blob/master/src/app.js).

[[HU1] - Como usuario, quiero consultar las reservas que tengo activas](https://github.com/sergiocantero8/reserve-it/issues/3)

La ruta consultar_reservas devuelve todas las reservas que se han hecho y están registradas en el sistema, si no encuentra ninguna reserva se devuelve el código 404 ya que no se encuentra el contenido solicitado. De lo contrario, devuelve el código 200 de que la solicitud ha tenido éxito y todas las reservas encontradas.
```
app.get('/consultar_reservas', (req,res) => {

    var mis_reservas = gestor.ver_todosdatosreserva();

    if(mis_reservas.length == 0)
        res.status(404).send("No hay ninguna reserva");
    else
        res.status(200).send(mis_reservas);

    
});
```

[[HU2] - Como usuario, quiero reservar una pista en una fecha determinada](https://github.com/sergiocantero8/reserve-it/issues/8)

Esta ruta sirve para poder reservar una pista indicando el tipo de pista, la duración de la reserva, la fecha, su precio, la ubicación y el dni del usuario. Se le asigna un id a la reserva y se crea, si el usuario está registrado en el sistema, se devuelve el usuario y la reserva es asignada al usuario. Si el usuario no está registrado, se añade un usuario con su dni para identificarlo (ya que el dni es el id del usuario) y los demás campos vacíos.
Se devuelve un código 201 ya que se ha creado un nuevo resultado como resultado de la solicitud y se devuelven los datos de la nueva reserva.

```
// Crea una reserva
app.put('/reservar/:tipo/:duracion/:fecha/:precio/:ubicacion/:dni_usuario', function( req, response ) {

    var id = gestor.get_numreservas()+1;
    var nueva_reserva = new Reserva(req.params.tipo,req.params.duracion,
                      req.params.fecha,req.params.precio, id, req.params.ubicacion, req.params.dni_usuario );
    if(gestor.usuario_con_reserva(req.params.dni_usuario)){
        var usuario_registrado=get_Usuario(req.params.dni_usuario);
        gestor.add_datosreserva( usuario_registrado, nueva_reserva );
    }
    else{
        var usuario_sin_registrar= new Usuario('undefined', 'undefined', 'undefined', req.params.dni_usuario, 'undefined', 'undefined', 'undefined' );
        gestor.add_datosreserva( usuario_sin_registrar, nueva_reserva );
    }
    
    
    response.status(201).json( nueva_reserva);

});
```

[[HU3] - Como usuario, quiero ver si la pista está libre a una fecha y hora determinadas](https://github.com/sergiocantero8/reserve-it/issues/9)

Esta ruta permite consultar si la pista que se quiera reservar está libre a la hora y fecha indicadas. La ruta recibe los parámetros de ubicacion y fecha(que incluye la hora), llama al método que comprueba si la pista está libre devolviendo true si es así y false si no lo está. Se devuelven distintos mensajes pero el código de estado es el mismo ya que la solicitud ha tenido éxito de todos modos.
```
// Consultar si la pista está libre a una hora y fecha determinadas
app.get('/consultar_pista_libre/:ubicacion/:fecha', (req,res) => {

    var pista_libre = gestor.ver_pistalibre(req.params.ubicacion, req.params.fecha);

    if(pista_libre)
        res.status(200).send("La pista está libre ");
    else
        res.status(200).send("La pista no está libre");

    
});

```

[[HU4] - Como usuario, quiero cancelar una reserva de una pista que ya tenía reservada](https://github.com/sergiocantero8/reserve-it/issues/36)

Esta ruta está diseñada para cancelar una reserva que ya estaba hecha, recibe el dni del usuario que la reservó, la ubicación de la reserva y su fecha. Primeramente, busca el usuario con el dni que ha recibido por parámetro llamando al método `get_Usuario`. Después, el gestor que es la clase controladora, llama al método `cancelar_reserva` que se le pasa el usuario, la ubicación y la fecha. Dicho método cancela la reserva y devuelve true si todo ha ido correctamente, false en caso contrario. Enviamos un mensaje de que se ha cancelado correctamente con un código 200 si todo ha ido bien y un código 404 si no ha encontrado ninguna reserva para cancelar con esos datos.

```
app.delete('/cancelar_reserva/:dni_usuario/:ubicacion/:fecha', function( req, res ) {

    var usuario = gestor.get_Usuario(req.params.dni_usuario);
    var cancelado=gestor.cancelar_reserva(usuario, req.params.ubicacion, req.params.fecha);

    if(cancelado)
        res.status(200).json("La reserva se ha cancelado correctamente");
    
    else
        res.status(404).json("No existe la reserva que se quiere cancelar");
    

});
```

### Rúbrica 3: Uso de buenas prácticas: configuración distribuida, logs, uso de middleware.

Para el uso de logs he utilizado un middleware de Express que se llama [Morgan](https://www.npmjs.com/package/morgan). Morgan recibe dos parámetros es el `format` y el segundo `options`es el objeto. El parámetro `format` puede ser un string o una función personalizada.
Para mi API he utilizado `morgan('combined')` ya que más información que otras opciones como `dev` o `tiny` y el formato es: `:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"`

Un ejemplo de logs usando este middleware en mi proyecto son:
```
127.0.0.1 - - [12/Dec/2020:18:05:42 +0000] "PUT /reservar/padel/120/octubre/14/cartuja/7657474R HTTP/1.1" 201 119 "-" "curl/7.47.0"
127.0.0.1 - - [12/Dec/2020:18:05:49 +0000] "DELETE /cancelar_reserva/7657474R/cartuja/octubre HTTP/1.1" 500 1334 "-" "curl/7.47.0"
```
Estos mensajes se muestran en la terminal mientras el servidor está activo.

### Rúbrica 4: Tests correctos y de acuerdo con las historias de usuario.
Para hacer los [tests de integración](https://github.com/sergiocantero8/reserve-it/blob/master/test/test_API_REST.js) he usado la librería de aserciones de npm [supertest](https://www.npmjs.com/package/supertest) ya que es muy similar a la que he usado en este proyecto como son Mocha y Chai. Cada test corresponde a una ruta de la API y una historia de usuario:

Test de la ruta /consultar_reservas que corresponde a la historia de usuario: [[HU1] - Como usuario, quiero consultar las reservas que tengo activas](https://github.com/sergiocantero8/reserve-it/issues/3). Se testea que cuando se consulten las reservas, devuelva un código 404 si no ha encontrado ninguna y un codigo 200 si hay más de una. Entre medias de una y la otra se añade una reserva. 

```
describe("Testeando la ruta /consultar_reservas ", function(){

    
    it('No hay reservas almacenadas', done =>{
        request(app)
            .get('/consultar_reservas')
            .expect('Content-Type', /json/)
            .expect(404,done)
    });

        it('Hay reservas almacenadas', done =>{
        request(app)
            .get('/consultar_reservas')
            .expect('Content-Type', /json/)
            .expect(200,done)
    });
});

 ```

Test de la ruta /reservar que corresponde a la historia de usuario: [[HU2] - Como usuario, quiero reservar una pista en una fecha determinada](https://github.com/sergiocantero8/reserve-it/issues/8). Se testea que la pista se reserva correctamente, se hace una petición put y debe devolver el código 201 de que todo ha ido correctamente y se ha creado un recurso nuevo.

 ```
 describe("Testeando la ruta /reservar/:tipo/:duracion/:fecha/:precio/:ubicacion/:dni_usuario", function(){

    
    it('La pista se reserva correctamente', done =>{
        request(app)
            .put('/reservar/padel/120/octubre/14/cartuja/7657474R')
            .expect('Content-Type', /json/)
            .expect(201,done)
    });

    
});
```

Test de la ruta /consultar_pista libre que corresponde a la historia de usuario: [[HU3] - Como usuario, quiero ver si la pista está libre a una fecha y hora determinadas](https://github.com/sergiocantero8/reserve-it/issues/9). Hace una petición de tipo get para consultar si una pista está libre a una fecha y hora que se pasan por parámetros, si todo ha ido correctamente se devuelve un código 200.

```
describe("Testeando la ruta /consultar_pista_libre", function(){

    
    it('Hay una pista libre', done =>{
        request(app)
            .get('/consultar_pista_libre/cartuja/14-01-2020-12:00')
            .expect('Content-Type', /json/)
            .expect(200,done)
    });

    
});
```

Test de la ruta /cancelar_reserva que corresponde a la historia de usuario: [[HU4] - Como usuario, quiero cancelar una reserva de una pista que ya tenía reservada](https://github.com/sergiocantero8/reserve-it/issues/36). Se testean dos casos, el primero se hace una petición delete cuando hay una reserva con esos datos y va correctamente, en ese caso se devuelve un código 200. El otro caso, se devuelve un código 404 de que no ha encontrado ninguna reserva para cancelar con esos datos.

```
describe("Testeando la ruta /cancelar_reserva/:dni_usuario/:ubicacion/:fecha", function(){

    
    it('La reserva se cancela correctamente', done =>{
        request(app)
            .delete('/cancelar_reserva/7657474R/cartuja/octubre')
            .expect('Content-Type', /json/)
            .expect(200,done)
    });

    it('No se puede cancelar la reserva especificada', done =>{
        request(app)
            .delete('/cancelar_reserva/7657474R/cartuja/octubre')
            .expect('Content-Type', /json/)
            .expect(404,done)
    });

    
});
```

## Documentación del proyecto :page_facing_up:

Enlaces del proyecto: 

+ [Código fuente del proyecto](https://github.com/sergiocantero8/ReserveIt-API/blob/master/src)

+ [Tests del proyecto](https://github.com/sergiocantero8/ReserveIt-API/tree/master/test)

+ [¿Por qué elegir este proyecto?](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/eleccion_proyecto.md)

+ [Pasos para la realizacion del proyecto](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/pasos.md)

+ [Configuración correcta de git](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/git_config.md).

+ [Justificación de las herramientas utilizadas](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/herramientas.md).

+ [Herramientas de construcción y test utilizadas](https://github.com/sergiocantero8/ReserveIt-API/blob/master/docs/herramientas_test.md)

+ [Historias de usuario](https://github.com/sergiocantero8/reserve-it/blob/master/docs/herramientas_test.md)

+ [Justificación del contenedor elegido de Docker](https://github.com/sergiocantero8/reserve-it/blob/master/docs/justificacion_docker.md)

+ [Explicación del dockerfile y .dockerignore](https://github.com/sergiocantero8/reserve-it/blob/master/docs/explicacion_dockerfile.md)

+ [Enlazar con DockerHub y Github Container Registry](https://github.com/sergiocantero8/reserve-it/blob/master/docs/dockerhub_y_gcr.md)

+ [Integración continua](https://github.com/sergiocantero8/reserve-it/blob/master/docs/integracion_continua.md)

+ [Serverless](https://github.com/sergiocantero8/reserve-it/blob/master/docs/serverless.md)




---
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
