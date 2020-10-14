/* Clase que representa la reserva de un usuario */

class Reserva {


    constructor(tipo, duracion, fecha, precio, id, ubicacion, usuario){
        this.tipo = tipo;
        this.duracion = duracion;
        this.fecha= fecha;
        this.precio = precio;
        this.id = id;
        this.ubicacion = ubicacion;
        this.usuario = usuario;

    }

    get tipo() {
        return this.tipo;
    }

    get duracion() {
        return this.duracion;
    }

    get fecha() {
        return this.fecha;
    }

    get precio() {
        return this.precio;
    }

    get id() {
        return this.id;
    }

    get ubicacion() {
        return this.ubicacion;
    }

    get usuario() {
        return this.usuario;
    }
}

module.exports = Reserva;