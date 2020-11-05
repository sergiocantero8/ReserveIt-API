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
        
        if(this.listareservas.length != 0){
            for (var i in this.listareservas) {
                console.log(this.listareservas[i].get_infocompleta());
            }
        }
        else{
            console.log("No hay ninguna reserva");
        }
    }

    // Para que un usuario pueda consultar los datos de sus reservas 
    ver_datosreserva(unusuario){
        var misreservas=[];

        // Recorro mi lista de usuarios
        for (var i in this.listausuarios){

            // Si el usuario que tengo en mi lista es el mismo que quiere consultar la reserva
            if(this.listausuarios[i].get_dni() == unusuario.get_dni()){
                for (var j in this.listareservas)
                    if(this.listareservas[j].get_usuario() == unusuario.get_nombreyapellidos())
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
}

module.exports.GestorReservas = GestorReservas;