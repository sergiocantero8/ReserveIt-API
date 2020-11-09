var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var reserva = require('../src/reserva');
var usuario = require ('../src/usuario.js');
var gestor = require ('../src/gestor_reservas.js')

describe('Testeando el método ver_datosreserva: ', function() {

  let unusuario = new usuario.Usuario('Pepito', 'Fernandez Campos', 'pepito@gmail.com', '34657239F', '04/02/1998', 'Granada', 'España' );
  let unareserva = new reserva.Reserva('Padel', 130, '14-10-2020', 15, '1234', 'Cartuja', unusuario.get_nombreyapellidos() );
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
    
    assert.equal(misreservas[0].get_usuario(), 'Pepito Fernandez Campos');
  });




});


describe('Testeando el método add_datosreserva: ', function() {


  let ungestor= new gestor.GestorReservas();
  let unusuario = new usuario.Usuario('Pepito', 'Fernandez Campos', 'pepito@gmail.com', '34657239F', '04/02/1998', 'Granada', 'España' );
  let unareserva = new reserva.Reserva('Padel', 130, '14-10-2020', 15, '1234', 'Cartuja', unusuario.get_nombreyapellidos() );

  it('add_datosreserva debe tener un usuario y una reserva', function(){

    ungestor.add_datosreserva(unusuario,unareserva);

    assert.equal(ungestor.get_numreservas()+ungestor.get_numusuarios(), 2);
  });



});

describe('Testeando gets de usuario: ', function() {


  let unusuario = new usuario.Usuario('Pepito', 'Fernandez Campos', 'pepito@gmail.com', '34657239F', '04/02/1998', 'Granada', 'España' );

  it('get_nombre debe devolver un string', function(){

    assert.typeOf(unusuario.get_nombre(), "string");
  });

  it('get_nombre debe devolver el nombre correcto', function(){

    assert.equal(unusuario.get_nombre(), "Pepito");
  });



});


describe('Testeando gets de reserva: ', function() {


  let unareserva = new reserva.Reserva('Padel', 130, '14-10-2020', 15, '1234', 'Cartuja', 'Pepito Fernandez Campos' );

  it('get_tipo debe devolver un string', function(){

    assert.typeOf(unareserva.get_tipo(), "string");
  });

  it('get_tipo debe devolver el tipo de pista correcto', function(){

    assert.equal(unareserva.get_tipo(), "Padel");
    
  });



});


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


describe('Testeando el método cancelar_pista: ', function() {


  let ungestor= new gestor.GestorReservas();
  let unusuario = new usuario.Usuario('Pepito', 'Fernandez Campos', 'pepito@gmail.com', '34657239F', '04/02/1998', 'Granada', 'España' );
  let unareserva = new reserva.Reserva('Padel', 130, '14-10-2020', 15, '1234', 'Cartuja', unusuario.get_nombreyapellidos() );
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
