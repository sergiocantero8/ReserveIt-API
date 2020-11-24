var chai = require('chai');
var assert = chai.assert;
var usuario = require ('../src/usuario.js');

describe('Testeando gets de usuario: ', function() {


    let unusuario = new usuario.Usuario('Pepito', 'Fernandez Campos', 'pepito@gmail.com', '34657239F', '04/02/1998', 'Granada', 'España' );
  
    it('get_nombre debe devolver un string', function(){
  
      assert.typeOf(unusuario.get_nombre(), "string");
    });
  
    it('get_nombre debe devolver el nombre correcto', function(){
  
      assert.equal(unusuario.get_nombre(), "Pepito");
    });
  
  
  
  });