const express= require('express');
const app = express();
const morgan = require('morgan');
const _= require('underscore');
const { GestorReservas } = require("./gestor_reservas.js");
const {Reserva} = require("./reserva.js");
const {Usuario} = require("./usuario.js");

var gestor = new GestorReservas();


// Middlewares
app.use(morgan('combined'));

// Establezco el puerto
app.set('port', process.env.PORT || 4000);

// Para que no soporte cosas pesadas como imagenes
app.use(express.urlencoded({extended:false}));

// Para enviar contenido en formato JSON
app.use(express.json());

// RUTAS

// Inicio
app.get('/', (req,res) => {
    res.status(200).send("¡Bienvenido a la API de reserve-it!");
});

// Crea una reserva
app.put('/reservar/:tipo/:duracion/:fecha/:precio/:ubicacion/:dni_usuario', function( req, response ) {
    var id = gestor.get_numreservas()+1;
    var nueva_reserva = new Reserva(req.params.tipo,req.params.duracion,
                      req.params.fecha,req.params.precio, id, req.params.ubicacion, req.params.dni_usuario );
    var nuevo_usuario= new Usuario('Pepito', 'Fernandez Campos', 'pepito@gmail.com', '34657239F', '04/02/1998', 'Granada', 'España' );
    gestor.add_datosreserva( nuevo_usuario, nueva_reserva );
    response.status(200).json( nueva_reserva);
});

// Consultar todas las reservas
app.get('/consultar_reservas', (req,res) => {

    var mis_reservas = gestor.ver_todosdatosreserva();

    /*
    _.each(mis_reservas, (reserva, i) =>{
        
    });
    */
    res.status(200).send(mis_reservas);
});




app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});