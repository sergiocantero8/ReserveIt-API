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

// Establezco el IP y el puerto
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'; 
app.set('port', process.env.PORT || 4000);


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

// Consultar todas las reservas
app.get('/consultar_reservas', (req,res) => {

    var mis_reservas = gestor.ver_todosdatosreserva();

    if(mis_reservas.length == 0)
        res.status(404).send("No hay ninguna reserva");
    else
        res.status(200).send(mis_reservas);

    
});

// Consultar si la pista está libre a una hora y fecha determinadas
app.get('/consultar_pista_libre/:ubicacion/:fecha', (req,res) => {

    var pista_libre = gestor.ver_pistalibre(req.params.ubicacion, req.params.fecha);

    if(pista_libre)
        res.status(200).send("La pista está libre ");
    else
        res.status(200).send("La pista no está libre");

    
});

// Elimina una reserva
app.delete('/cancela_reserva/:dni_usuario/:ubicacion/:fecha', function( req, response ) {

    var cancelado=gestor.cancelar_reserva(req.params.dni_usuario, req.params.ubicacion, req.params.fecha);
    if(cancelado)
        res.status(200).send("La reserva se ha cancelado correctamente");
    
    else
        res.status(404).send("No existe la reserva que se quiere cancelar");
    

});




app.listen(app.get('port'),server_ip_address,function () {
    console.log(`La aplicacion se está ejecutando en  ` + server_ip_address + ":" +   app.get('port'));
});