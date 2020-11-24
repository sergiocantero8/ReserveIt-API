var chai = require('chai');
var assert = chai.assert;
var reserva = require('../src/reserva');
var usuario = require ('../src/usuario.js');
var gestor = require ('../src/gestor_reservas.js')

describe('Testeando el método add_datosreserva: ', function() {


    let ungestor= new gestor.GestorReservas();
    let unusuario = new usuario.Usuario('Pepito', 'Fernandez Campos', 'pepito@gmail.com', '34657239F', '04/02/1998', 'Granada', 'España' );
    let unareserva = new reserva.Reserva('Padel', 130, '14-10-2020', 15, '1234', 'Cartuja', unusuario.get_nombreyapellidos() );
  
    it('add_datosreserva debe tener un usuario y una reserva', function(){
  
      ungestor.add_datosreserva(unusuario,unareserva);
  
      assert.equal(ungestor.get_numreservas()+ungestor.get_numusuarios(), 2);
    });
  
  
  
  });
  