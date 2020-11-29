const data = require("./horarios.json")
module.exports = (req, res) => {
  var obj = {};
  var ubicacion = req.query;
  if(ubicacion == undefined){
    res.status(400).send(`Debe indicar una ubicacion para informar sobre el horario`);
  }
  else{

      res.status(400).send(`No hay ningun horario para esa ubicacion`);
  }

  
  res.status(200).send(obj);
}