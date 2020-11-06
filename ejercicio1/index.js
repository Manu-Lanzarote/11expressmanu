//1.	Crea una aplicación express con una llamada de tipo get que devuelva el siguiente HTML:
// con h1: 'Hola mundo', con h2: 'desde express'

//Enciendo el servidor express
const express = require("express");
const app = express();

//Hola mundo
app.get("/", function (req, res) {
  res.send(`
  <h1>Hola mundo</h1>
  <h2>desde express</h2>`);
});

//Saluda a Mady
app.get("/mady", function (req, res) {
  res.send(`<h1>Hello MADY!</h1>
    <h2>from express</h2>
    <h2>and node.js</h2>
    <h3>Manu ;)</h3>`);
});

//Mando un objeto
app.get("/objeto", function (req, res) {
  res.send({
    nombre: "Manu",
    edad: 50,
  });
});

app.listen(3000);
