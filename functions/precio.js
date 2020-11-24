const datos_pistas = require('./datos_pistas.json')

exports.handler = async function(event, context) {

    function media_precios ( precio_diurno, precio_nocturno )
    { 
        var precio_diurno = parseInt(precio_diurno, 10);
        var precio_nocturno = parseInt(precio_nocturno, 10);
        return ( (precio_diurno+precio_nocturno)/2 );
    }

    let resultado=datos_pistas;

    
    const {provincia, tipo, orden_precio} = event.queryStringParameters 

    
    resultado=resultado.filter(datos_pistas => datos_pistas.provincia == provincia)

    resultado=resultado.filter(datos_pistas => datos_pistas.tipo == tipo)

    if (resultado.length == 0)
    return {
        statusCode: 400,
        body: "No hay resultados para esos parámetros "
    }

    var i = 0;
    var media=[];

    while( i < resultado.length){
        media[i]= media_precios(resultado[i].precio_diurno,resultado[i].precio_nocturno );
         resultado[i].media=media[i];
        i+=1
    }

        if (orden_precio == 'Más barato')
            resultado.sort((a,b) => a.media - b.media)
        else
            resultado.sort((a,b) => b.media - a.media)


    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(resultado)
    };
}