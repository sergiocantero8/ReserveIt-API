const datos_pistas = require('./datos_pistas.json')

exports.handler = async function(event, context) {

    
    let resultado=datos_pistas;
    const {provincia, tipo, orden_precio} = event.queryStringParameters


    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(resultado)
    };
}