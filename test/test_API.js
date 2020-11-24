var chai = require('chai');
var assert = chai.assert;
chai.use(require('chai-http'));
const url= 'https://compara-precios.netlify.app/.netlify/functions/precio/';

describe('Testeando la API para comparar los precios de las pistas: ', function() {



    it('Granada tiene pistas de pádel disponibles', function(){
  
      chai.request(url).get('?provincia=Granada&tipo=Pádel&orden_precio=Más+barato').end(function(err,res){
  
        expect(res).to.have.status(200);
        
    })
    });
  
    it('Jaén no tiene pistas de pádel y futbol disponibles ', function(){
  
      chai.request(url).get('?provincia=Granada&tipo=Pádel&orden_precio=Más+barato').end(function(err,res){
  
        expect(res).to.have.status(400);
        
    })
    });
  
  
  
  
  
  });