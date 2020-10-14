const usuario = require ('./usuario.js')
const Reserva = require ('./reserva.js')


let unusuario = new usuario.Usuario('Sergio', 'Azanon Cantero', 'sergiocantero8@gmail.com', '76589409F', '04/02/1998', 'Granada', 'España' );
console.log(unusuario.get_nombre());