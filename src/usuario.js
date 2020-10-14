
/* Clase que representa los datos del usuario del sistema */

class Usuario {


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
}

module.exports.Usuario = Usuario;