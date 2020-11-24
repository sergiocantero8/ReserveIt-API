var chai = require('chai');
var assert = chai.assert;
var reserva = require('../src/reserva');


describe('Testeando gets de reserva: ', function() {


    let unareserva = new reserva.Reserva('Padel', 130, '14-10-2020', 15, '1234', 'Cartuja', 'Pepito Fernandez Campos' );
  
    it('get_tipo debe devolver un string', function(){
  
      assert.typeOf(unareserva.get_tipo(), "string");
    });
  
    it('get_tipo debe devolver el tipo de pista correcto', function(){
  
      assert.equal(unareserva.get_tipo(), "Padel");
      
    });
  
  
  
  });