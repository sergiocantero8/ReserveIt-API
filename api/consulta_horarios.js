const data = require("./horarios.json")
module.exports = (req, res) => {
  var obj = {};
  var ubicacion = req.query;
  let status;
  let mensaje;

  var i ;

  if(ubicacion == undefined){
    status=400;
    mensaje=`Debe indicar una ubicacion para mostrar el horario`
  }
  else{
    
      for (i=0;i<data.length;i++) { 
        if(data[i].ubicacion == ubicacion)
          obj.push(data[i].ubicacion);
      }

      status=200;
  }
  res.setHeader('Content-Type','application/json'); 

  if(mensaje.length== 0)
    res.status(status).send(obj);
  else
    res.status(status).send(mensaje);

}