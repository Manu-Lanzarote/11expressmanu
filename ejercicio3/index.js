//3.	Crea un array de 5 nombres. Define dos rutas: una será del tipo “/persona” y la otra será /persona/:parámetro’. Al entrar a la primera ruta nos devolverá la lista de personas y al entrar a la segunda nos devolverá la persona solicitada.
const personas = ["Javi", "Manu", "Pedro", "Pardo", "Angel"];

const express = require("express");
const app = express();

//Primera ruta devuelve la lista de personas, (el array)
app.get("/array", function (req, res) {
  res.send(personas);
});

//Segunda ruta devuelve la persona solicitada
app.get("/indice/:indice", function (req, res) {
  let personaSolicitada = req.params.indice;
  res.send(personas[personaSolicitada]);
});

app.listen(3000);
