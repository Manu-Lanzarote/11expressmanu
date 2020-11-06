//7.	Crea un módulo propio con un array de 10 ceros. Crea otro módulo con una función que devuelva un número aleatorio entre 0 y 9. Crea una ruta para que cada vez que se haga una petición de tipo get, se llame al método de número aleatorio y se sume 1 al valor del número en el índice del número aleatorio. Muestra el array con los valores en la respuesta.

//Importo express
const express = require("express");
const app = express();

//Importo aleatorio.js
const aleatorio = require("./aleatorio");

//Importo el array de ceros
const arrayCeros = require("./ceros");

//Crea una ruta para que cada vez que se haga una petición de tipo get, se llame al método de número aleatorio y se sume 1 al valor del número en el índice del número aleatorio. Muestra el array con los valores en la respuesta.
app.get("/numero", function (req, res) {
  //MI CÓDIGO
  //const numAleatorio = aleatorio();
  //console.log(numAleatorio);
  //   for (let i = 0; i < ceros.length; i++) {
  //     if (i === numAleatorio) {
  //       ceros[i] = ceros[i] + 1;
  //     }
  //   }
  //console.log(ceros);
  //EL CODIGO DE ANDER
  //arrayCeros[aleatorio()] = arrayCeros[aleatorio()] + 1;
  arrayCeros[aleatorio()] += 1;

  res.send(arrayCeros);
});

//8.	Con los dos módulos del ejercicio anterior, crea una aplicación en la que hacer peticiones de tipo get a la que le añadas “/borrar/:numero” para borrar el número (ponerlo a cero) indicado (si es que existe), no el índice en el que se encuentra.
app.get("/borrar/:numero", function (req, res) {
  //Recojo el número de la url y lo parseo
  let ponerACero = parseInt(req.params.numero);
  //Recorro el array para comprobar si tengo números en él que coincidan con el que quiero borrar
  for (let i = 0; i < arrayCeros.length; i++) {
    if (arrayCeros[i] === ponerACero) {
      arrayCeros[i] = 0;
    }
  }
  res.send(arrayCeros);
});

app.listen(3000);
