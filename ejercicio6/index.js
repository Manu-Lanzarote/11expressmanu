//6.	Declara un array con los nombres de l@s estudiantes del Bootcamp. Crea una aplicación en la que se puedan añadir elementos a ese array mediante el método get. Agrega los nombres de los profesores.
const bootcamp = ["Elena", "Diego", "Rafa", "Maialen", "Roberto"];

const express = require("express");
const app = express();

app.get("/anyadir/:anyadir", function (req, res) {
  let anyadirNombre = req.params.anyadir;
  bootcamp.push(anyadirNombre);
  res.send(bootcamp);
});

app.listen(3000);
