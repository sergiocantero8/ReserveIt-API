const data = require("./horarios.json")
module.exports = (req, res) => {
  var obj = {};
  var ubicacion = req.query;
  let status;
  let mensaje;
  if(ubicacion == undefined){
    status=400;
    mensaje=`Debe indicar una ubicacion para mostrar el horario`
  }
  else{
    var claves=Object.keys(data);
    if(claves.length==0){
      var horarios_ubicacion = data[ubicacion];
      obj[ubicacion].push(horarios_ubicacion);
      status=200;
    }
    else{
      status=400;
      mensaje=`No hay horarios para esa pista`
    }
  }
  res.setHeader('Content-Type','application/json'); 

  if(mensaje.length== 0)
    res.status(status).send(obj);
  else
    res.status(status).send(mensaje);

}