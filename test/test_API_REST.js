
const request=require('supertest');

const app = require('../src/app.js');

describe("La api funciona correctamente", function(){

    
    it('Testeando la ruta /', done =>{
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200,done)
    });

    
});

describe("Testeando la ruta /consultar_reservas vacía", function(){

    
    it('No hay reservas almacenadas', done =>{
        request(app)
            .get('/consultar_reservas')
            .expect('Content-Type', /json/)
            .expect(404,done)
    });

    
});



