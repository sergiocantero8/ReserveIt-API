# Despliegue correcto y funcionando, con documentación de la conexión entre el repo en GitHub y Netlify/Vercel para despliegue continuo.

La documentación de la conexión entre el repositorio de Github y Vercel se encuentra en los [ejercicios de este tema](https://github.com/sergiocantero8/IV-Autoevaluacion/blob/main/serverless.md). 

Para comprobar que todo funciona correctamente, he creado mi función que recibe una provincia, un deporte y opcionalmente un parámetro para ordenar por precio (de más barato a más caro o viceversa) y te devuelve todas las pistas deportivas del deporte indicado en la provincia dada y ordenadas por precio.
Ésta es la función:
```
const datos_pistas = require('./datos_pistas.json')

exports.handler = async function(event, context) {

    function media_precios ( precio_diurno, precio_nocturno )
    { 
        var precio_diurno = parseInt(precio_diurno, 10);
        var precio_nocturno = parseInt(precio_nocturno, 10);
        return ( (precio_diurno+precio_nocturno)/2 );
    }

    let resultado=datos_pistas;

    
    const {provincia, tipo, orden_precio} = event.queryStringParameters || "Error en los parametros"

    
    resultado=resultado.filter(datos_pistas => datos_pistas.provincia == provincia)

    resultado=resultado.filter(datos_pistas => datos_pistas.tipo == tipo)

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
```

Ordena las pistas de más caras a mas baratas (o viceversa) dependiendo de la media de precio entre el precio en el horario diurno y nocturno las pistas de la provincia y deporte indicados.Estos datos los recoge de un [fichero json](https://github.com/sergiocantero8/reserve-it/blob/master/functions/datos_pistas.json) con datos serializados.  Para que sea un poco más claro el funcionamiento, he creado un front-end muy simple [alojado en Netlify](https://compara-precios.netlify.app/).


![](https://github.com/sergiocantero8/reserve-it/blob/master/docs/img/front-end.png)



![](https://github.com/sergiocantero8/reserve-it/blob/master/docs/img/resultado-json.png)



