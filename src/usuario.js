const Reserva = require ('./reserva.js')

/* Clase que representa los datos del usuario del sistema */

class Usuario {

    // Constructor de la clase
    constructor(nombre, apellidos, telefono, email, dni, fecha_nacimiento, lugar_nacimiento, nacionalidad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono= telefono;
        this.email = email;
        this.dni = dni;
        this.fecha_nacimiento = fecha_nacimiento;
        this.lugar_nacimiento = lugar_nacimiento;
        this.nacionalidad = nacionalidad;

    }

    // Getters
    // ************************************
    get_nombre() {
        return this.nombre;
    }

    get_apellidos() {
        return this.apellidos;
    }

    get_telefono() {
        return this.telefono;
    }

    get_email() {
        return this.email;
    }

    get_dni() {
        return this.dni;
    }

    get_fecha_nacimiento() {
        return this.fecha_nacimiento;
    }

    get_lugar_nacimiento() {
        return this.lugar_nacimiento;
    }

    get_nacionalidad(){
        return this.nacionalidad;
    }

    get_nombreyapellidos(){
        return this.nombre + ' ' + this.apellidos;
    }

    //******************************************** */

    // Setters

    set_nombre(nombre) {
        this.nombre=nombre;
    }

    set_apellidos(apellidos) {
        this.apellidos=apellidos;
    }

    set_telefono(telefono) {
        this.telefono=telefono;
    }

    set_email(email) {
        this.email=email;
    }

    set_dni(dni) {
        this.dni=dni;
    }

    set_fecha_nacimiento(fecha_nacimiento) {
        this.fecha_nacimiento=fecha_nacimiento;
    }

    set_lugar_nacimiento(lugar_nacimiento) {
        this.lugar_nacimiento=lugar_nacimiento;
    }

    set_nacionalidad(nacionalidad){
        this.nacionalidad=nacionalidad;
    }

    set_nombreyapellidos(nombre, apellidos){
        this.nombre=nombre;
        this.apellidos=apellidos;
    }
}


module.exports.Usuario = Usuario;