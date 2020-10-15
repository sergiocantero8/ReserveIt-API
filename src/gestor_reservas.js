const usuario = require ('./usuario.js')
const reserva = require ('./reserva.js')

// Esta clase gestiona las reservas de los usuarios y añade o elimina reservas
class GestorReservas {

    // El gestor empieza teniendo una lista de reservas y usuarios vacía
    constructor(){
        this.listareservas = [];
        this.listausuarios= [];
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

        for (var i in this.listausuarios){

            if(this.listausuarios[i].get_dni() == unusuario.get_dni()){
                for (var j in this.listareservas)
                    if(this.listareservas[j].get_usuario() == unusuario.get_nombreyapellidos())
                        misreservas.push(this.listareservas[j]);
                break;
            }

        }

        return misreservas;
    }
}

module.exports.GestorReservas = GestorReservas;