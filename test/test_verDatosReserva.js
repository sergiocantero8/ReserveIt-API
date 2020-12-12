var chai = require('chai');
var assert = chai.assert;
var reserva = require('../src/reserva');
var usuario = require ('../src/usuario.js');
var gestor = require ('../src/gestor_reservas.js')

describe('Testeando el método ver_datosreserva: ', function() {

    let unusuario = new usuario.Usuario('Pepito', 'Fernandez Campos', '601456745', 'pepito@gmail.com', '34657239F', '04/02/1998', 'Granada', 'España' );
    let unareserva = new reserva.Reserva('Padel', 130, '14-10-2020', 15, '1234', 'Cartuja', unusuario.get_dni() );
    let ungestor= new gestor.GestorReservas();
  
  
    it('ver_datosreserva debe devolver una lista vacía', function(){
  
      let misreservas = ungestor.ver_datosreserva(unusuario);
      
      assert.equal(misreservas.length, 0);
    });
  
    it('ver_datosreserva debe devolver una lista con un elemento', function(){
  
      ungestor.add_datosreserva(unusuario,unareserva);
      let misreservas = ungestor.ver_datosreserva(unusuario);
      
      assert.equal(misreservas.length, 1);
    });
  
    it('ver_datosreserva debe devolver correctamente los datos', function(){
  
      ungestor.add_datosreserva(unusuario,unareserva);
      let misreservas = ungestor.ver_datosreserva(unusuario);
      
      assert.equal(misreservas[0].get_usuario(), '34657239F');
    });
  
  
  
  
  });