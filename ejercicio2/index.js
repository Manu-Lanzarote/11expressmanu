//2.	Crea una aplicación con una ruta a la que le puede llegar un parámetro en la url. Al hacer una petición get a esa ruta, el servidor devolverá como respuesta un número aleatorio entre 1 y el número que llega como parámetro.
const express = require("express");
const app = express();

//Prueba. Mando un número por parámetro y lo imprimo en html
app.get("/numero/:numero", function (req, res) {
  let numero = req.params.numero;
  res.send(`<h1>${numero}</h1>`);
});

//Número aleatorio. (EJERCICIO)
app.get("/random/:random", function (req, res) {
  let random = req.params.random;
  let aleatorio = Math.floor(Math.random() * random) + 1;
  res.send(console.log("Tu número es el " + aleatorio));
});

app.listen(3000);
