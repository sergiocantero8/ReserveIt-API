var chai = require('chai');
var assert = chai.assert;
var reserva = require('../src/reserva');
var usuario = require ('../src/usuario.js');
var gestor = require ('../src/gestor_reservas.js')

describe('Testeando el método ver_pistalibre: ', function() {


    let ungestor= new gestor.GestorReservas();
    let unusuario = new usuario.Usuario('Pepito', 'Fernandez Campos', 'pepito@gmail.com', '34657239F', '04/02/1998', 'Granada', 'España' );
    let unareserva = new reserva.Reserva('Padel', 130, '14-10-2020', 15, '1234', 'Cartuja', unusuario.get_nombreyapellidos() );
    ungestor.add_datosreserva(unusuario,unareserva);
  
    it('ver_pistalibre debe devolver false porque la pista no esta libre', function(){
  
      resultado=ungestor.ver_pistalibre('Cartuja','14-10-2020');
  
      assert.equal(resultado, false);
    });
  
    it('ver_pistalibre debe devolver true porque la pista esta libre', function(){
  
      resultado=ungestor.ver_pistalibre('Cartuja','15-10-2020');
  
      assert.equal(resultado, true);
    });
  
  
  });