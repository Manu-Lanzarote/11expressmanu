//5.	Define un objeto con las propiedades siguientes: nombre, apellidos y edad. El objeto estará fuera de las rutas para que sea accesible por todas ellas. Crea una aplicación en la que se pueda modificar cualquiera de las propiedades de ese objeto utilizando peticiones de tipo get. Crea una ruta para cambiar el nombre, otra ruta para el apellido y otra ruta para la edad.

//Importo el objeto persona de objeto.js
let persona = require("./objeto");

//Enciendo el servidor
const express = require("express");
const app = express();

//Crea una ruta para cambiar el nombre, otra ruta para el apellido y otra ruta para la edad.

//NOMBRE
app.get("/nombre/:nombre", function (req, res) {
  let nuevoNombre = req.params.nombre;
  persona.nombre = nuevoNombre;
  res.send(persona);
});

//APELLIDO
app.get("/apellido/:apellido", function (req, res) {
  let nuevoApellido = req.params.apellido;
  persona.apellido = nuevoApellido;
  res.send(persona);
});

//EDAD
app.get("/edad/:edad", function (req, res) {
  let nuevaEdad = req.params.edad;
  persona.edad = nuevaEdad;
  res.send(persona);
});
console.log(persona);

app.listen(3000);
