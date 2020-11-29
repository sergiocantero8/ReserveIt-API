const data = require("./horarios.json")
module.exports = (req, res) => {
  var obj = {};
  var ubicacion = req.query;
  if(ubicacion == undefined){
    res.status(400).send(`Debe indicar una ubicacion para informar sobre el horario`);
  }
  else{
    var claves=Object.keys(data);
    if(claves.includes(ubicacion)){
      var horarios_ubicacion = data[ubicacion];
      obj[ubicacion].push(horarios_ubicacion);
    }
    else{
      res.status(400).send(`No hay ningun horario para esa ubicacion`);
    }
  }
  res.setHeader('Content-Type','application/json'); 
  res.status(200).send(obj);
}