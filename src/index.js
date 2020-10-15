const usuario = require ('./usuario.js')
const reserva = require ('./reserva.js')
const gestor = require ('./gestor_reservas.js')


let unusuario = new usuario.Usuario('Sergio', 'Azanon Cantero', 'sergiocantero8@gmail.com', '76589409F', '04/02/1998', 'Granada', 'España' );
let unareserva = new reserva.Reserva('Padel', 130, '14-10-2020', 15, '1234', 'Cartuja', unusuario.get_nombreyapellidos() );
let ungestor= new gestor.GestorReservas();

ungestor.add_datosreserva(unusuario,unareserva);

ungestor.ver_todosdatosreserva();

let misreservas = ungestor.ver_datosreserva(unusuario);

if(misreservas.length != 0)
    console.log(misreservas[0].get_ubicacion());

console.log(unusuario.get_nombre());
console.log(unareserva.get_usuario());