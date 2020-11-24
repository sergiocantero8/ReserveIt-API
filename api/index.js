const data = require('./horarios.json')

exports.handler = async function(event, context) {

    let horarios = data;

    const {ubicacion} = event.queryStringParameters 
  
    if (ubicacion != "") {
        horarios=horarios.filter(data => horarios.ubicacion == ubicacion)
    } else{
      return{
        statusCode: 400,
        body: "Debe indicar el parámetro ubicacion para ver los horarios "
      }
    }

    if(horarios.length == 0)
        return{
            statusCode: 400,
            body: "No hay horarios para esa ubicacion"
        }
    else
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(horarios)
        };
  }