const data = require('./horarios.js')
module.exports = (req, res) => {
  var obj = {};
  var keys = Object.keys(data);
  if(req.query.ubicacion == undefined){
    res.status(400).send(`Debe indicar una ubicacion para informar sobre el horario`);
  }
  else{
    var ubicacion=req.query.ubicacion;
    if(keys.includes(ubicacion)){
      var horarios_ubicacion = data[ubicacion];
      obj[ubicacion] = horarios_ubicacion;
    }
    else{
      res.status(400).send(`No hay ningun horario para esa ubicacion`);
    }
  }
  res.setHeader('Content-Type','application/json'); 
  res.status(200).json(obj);
};