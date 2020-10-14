
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

    get nombre() {
        return this.nombre;
    }

    get apellidos() {
        return this.apellidos;
    }

    get telefono() {
        return this.telefono;
    }

    get email() {
        return this.email;
    }

    get dni() {
        return this.dni;
    }

    get fecha_nacimiento() {
        return this.fecha_nacimiento;
    }

    get lugar_nacimiento() {
        return this.lugar_nacimiento;
    }

    get nacionalidad(){
        return this.nacionalidad;
    }
}

module.exports = Usuario;