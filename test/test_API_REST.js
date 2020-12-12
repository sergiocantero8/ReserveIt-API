
import request from 'supertest';

import app from '../src/app.js';

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

describe("Testeando la ruta /reservar/:tipo/:duracion/:fecha/:precio/:ubicacion/:dni_usuario", function(){

    
    it('La pista se reserva correctamente', done =>{
        request(app)
            .put('/reservar/padel/120/octubre/14/cartuja/7657474R')
            .expect('Content-Type', /json/)
            .expect(201,done)
    });

    
});

describe("Testeando la ruta /consultar_reservas con reservas", function(){

    
    it('Hay reservas almacenadas', done =>{
        request(app)
            .get('/consultar_reservas')
            .expect('Content-Type', /json/)
            .expect(200,done)
    });

    
});

describe("Testeando la ruta /consultar_pista_libre", function(){

    
    it('Hay una pista libre', done =>{
        request(app)
            .get('/consultar_pista_libre/cartuja/14-01-2020-12:00')
            .expect('Content-Type', /json/)
            .expect(200,done)
    });

    
});

describe("Testeando la ruta /cancelar_reserva/:dni_usuario/:ubicacion/:fecha", function(){

    
    it('La reserva se cancela correctamente', done =>{
        request(app)
            .delete('/cancelar_reserva/7657474R/cartuja/octubre')
            .expect('Content-Type', /json/)
            .expect(200,done)
    });

    it('No se puede cancelar la reserva especificada', done =>{
        request(app)
            .delete('/cancelar_reserva/7657474R/cartuja/octubre')
            .expect('Content-Type', /json/)
            .expect(404,done)
    });

    
});

*/