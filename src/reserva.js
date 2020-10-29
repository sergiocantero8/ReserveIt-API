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

    get_tipo() {
        return this.tipo;
    }

    get_duracion() {
        return this.duracion;
    }

    get_fecha() {
        return this.fecha;
    }

    get_precio() {
        return this.precio;
    }

    get_id() {
        return this.id;
    }

    get_ubicacion() {
        return this.ubicacion;
    }

    get_usuario() {
        return this.usuario;
    }

    get_infocompleta(){
        return "Tipo de pista: " + this.tipo + " Duracion: " + this.duracion + " mins"+ " Fecha: " + this.fecha + " Precio: " + this.precio + " euros" + 
                " ID: " + this.id + " Ubicacion: " + this.ubicacion + " Usuario: " + this.usuario;
    }

    set_tipo(tipo){
        this.tipo=tipo;
    }

    set_duracion(duracion){
        this.duracion=duracion;
    }

    set_fecha(fecha){
        this.fecha=fecha;
    }

    set_precio(precio){
        this.precio=precio;
    }

    set_id(id){
        this.id=id;
    }

    set_ubicacion(ubicacion){
        this.ubicacion=ubicacion;
    }

    set_usuario(usuario){
        this.usuario=usuario;
    }
}

module.exports.Reserva = Reserva;