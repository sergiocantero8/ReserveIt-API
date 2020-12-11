const express= require('express');
const app = express();
const morgan = require('morgan');

const {Gestor} = require("./gestor_reservas.js");

var controlador = new Gestor();


// Middlewares
app.use(morgan('combined'));

// Establezco el puerto
app.set('port', process.env.PORT || 4000);

// Para que no soporte cosas pesadas como imagenes
app.use(express.urlencoded({extended:false}));

// Para enviar contenido en formato JSON
app.use(express.json());

// Rutas
app.get('/', (req,res) => {
    res.status(200).send("¡Bienvenido a la API de reserve-it!");
});


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});