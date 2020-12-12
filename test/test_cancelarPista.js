var chai = require('chai');
var assert = chai.assert;
var reserva = require('../src/reserva');
var usuario = require ('../src/usuario.js');
var gestor = require ('../src/gestor_reservas.js')

describe('Testeando el método cancelar_pista: ', function() {


  let ungestor= new gestor.GestorReservas();
  let unusuario = new usuario.Usuario('Pepito', 'Fernandez Campos', '601456745', 'pepito@gmail.com', '34657239F', '04/02/1998', 'Granada', 'España' );
  let unareserva = new reserva.Reserva('Padel', 130, '14-10-2020', 15, '1234', 'Cartuja', unusuario.get_dni() );
  ungestor.add_datosreserva(unusuario,unareserva);

  it('cancelar_pista debe devolver true porque la reserva se ha cancelado correctamente', function(){

    resultado=ungestor.cancelar_reserva(unusuario, unareserva.get_ubicacion(), unareserva.get_fecha());

    assert.equal(resultado, true);
  });

  it('cancelar_pista debe devolver false porque no hay ninguna reserva que cancelar', function(){

    ungestor.cancelar_reserva(unusuario, unareserva.get_ubicacion(), unareserva.get_fecha());
    resultado=ungestor.cancelar_reserva(unusuario, unareserva.get_ubicacion(), unareserva.get_fecha());


    assert.equal(resultado, false);
  });


});