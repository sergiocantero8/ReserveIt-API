const datos_pistas = require('./datos_pistas.json')

exports.handler = async function(event, context) {

    
    let resultado=datos_pistas;
    const {provincia, tipo, orden_precio} = event.queryStringParameters

    if(provincia == 'Granada')
        resultado=resultado.filter(datos_pistas => datos_pistas.provincia == provincia)

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(resultado)
    };
}