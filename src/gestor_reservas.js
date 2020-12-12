const usuario = require ('./usuario.js')
const reserva = require ('./reserva.js')

// Esta clase gestiona las reservas de los usuarios y añade o elimina reservas
class GestorReservas {

    // El gestor empieza teniendo una lista de reservas y usuarios vacía
    constructor(){
        this.listareservas = [];
        this.listausuarios= [];
    }

    get_numreservas(){
        return this.listareservas.length;
    }

    get_numusuarios(){
        return this.listausuarios.length;
    }

    // Añade los datos de una reserva y un usuario
    add_datosreserva(unusuario,unareserva){

        this.listareservas.push(unareserva);
        this.listausuarios.push(unusuario);
       
    }

    // Todos los datos de reserva que tiene el gestor
    ver_todosdatosreserva(){
        
        var mis_reservas=[];
        if(this.listareservas.length != 0){
            for (var i in this.listareservas) {
                mis_reservas.push(this.listareservas[i].get_infocompleta());
            }
        }

        return mis_reservas;
    }

    // Para que un usuario pueda consultar los datos de sus reservas 
    ver_datosreserva(unusuario){
        var misreservas=[];

        // Recorro mi lista de usuarios
        for (var i in this.listausuarios){

            // Si el usuario que tengo en mi lista es el mismo que quiere consultar la reserva
            if(this.listausuarios[i].get_dni() == unusuario.get_dni()){
                for (var j in this.listareservas)
                    if(this.listareservas[j].get_usuario() == unusuario.get_dni())
                        misreservas.push(this.listareservas[j]);
                break;
            }

        }

        return misreservas;
    }

    // Para que un usuario pueda consultar si una pista está libre en una fecha determinada
    ver_pistalibre(pista, hora){

        for (var i in this.listareservas){
            if(this.listareservas[i].get_ubicacion()== pista)
                if(this.listareservas[i].get_fecha()== hora)
                    return false;
        }

        return true;
    }

    // Método para que un usuario pueda cancelar una reserva que ya está reservada
    // Devuelve TRUE si se ha cancelado correctamente y FALSE si no
    cancelar_reserva(usuario, pista, fecha){

        var tiene_reservas=this.ver_datosreserva(usuario);

        if(tiene_reservas.length!=0){
            for (var i in this.listareservas){
                if(this.listareservas[i].get_ubicacion()== pista)
                    if(this.listareservas[i].get_fecha()== fecha){
                        this.listareservas.splice( i, 1 );
                        return true;
                    }
            }

        }

        return false;
    }

    // Método que devuelve true si el usuario tiene reservada alguna pista
    usuario_con_reserva(dni_usuario){
        for (var i in this.listausuarios){
            if(this.listausuarios[i].get_dni()== dni_usuario)
                return true;
            else
                return false;
                
        }
    }


    // PRE: Que el usuario esté registrado con una reserva
    // Método que devuelve el usuario registrado
    get_Usuario(dni_usuario){
        var nuevo_usuario;
        for (var i in this.listausuarios){
            if(this.listausuarios[i].get_dni()== dni_usuario)
                nuevo_usuario= this.listausuarios[i];
                
        }

        return nuevo_usuario
    }
}

module.exports.GestorReservas = GestorReservas;