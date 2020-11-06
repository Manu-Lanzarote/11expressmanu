// EXTRA
// Crea una aplicación que simule una tienda online. Crea una variable almacén en la que guardes un array con objetos. Cada objeto será un departamento de la tienda y tendrás varios productos en cada uno. Cada uno de estos productos será un objeto con las siguientes propiedades: nombre, precio y stock. Crea también una variable cesta.

let almacen = require("./almacen");
//console.log(almacen);

let cesta = require("./cesta");
//console.log(cesta);

//Pongo en marcha el servidor local
const express = require("express");
const app = express();

//************************************************************** */
// Crea las siguientes rutas:
// ●	Dos rutas diferentes para cada uno de los departamentos de la tienda.
// ○	Una ruta devolverá en la respuesta todos los productos que hay en ese departamento. Haz que se muestre en una tabla HTML.

// ○	La otra ruta servirá para comprar productos. Esta ruta recibirá dos parámetros: nombre del producto y cantidad. Añadir a la variable cesta el producto y la cantidad seleccionada Si la cantidad pedida es mayor que el stock, devolveremos un mensaje avisando de que no hay stock suficiente.

// ●	Una ruta para mostrar la cesta.
// ●	Una ruta para confirmar la compra. Esta ruta devolverá un mensaje de confirmación y vaciará la cesta.
//*************************************************************** */

//Dos rutas diferentes para cada uno de los departamentos de la tienda.
// Una ruta devolverá en la respuesta todos los productos que hay en ese departamento. Haz que se muestre en una tabla HTML.

app.get("/productos/:departamento", function (req, res) {
  let productos = req.params.departamento;
  let aux = "";

  for (let i = 0; i < almacen.length; i++) {
    aux = almacen[i].seccion;

    if (productos === aux) {
      res.send(almacen[i].productos);
      //Lo envío al front. (Creo index.html)
    }
  }
  if (productos !== aux) {
    res.send("El departamento no existe");
  }
});

//SIMPLIFICADO. SIN CONDICIONES. (Segur video de  la carpeta formularios express - minuto 10 donde se construye la tabla)

app.get("/seccion", function (req, res) {
  let contenidoTabla = "";
  for (let i = 0; i < almacen.length; i++) {
    contenidoTabla = `
        <p>${almacen[i].productos[i].nombre}</p>
        <p>${almacen[i].productos[i].precio}</p>
        <p>${almacen[i].productos[i].stock}</p>
        `;
  }
  res.send(contenidoTabla);
});

app.listen(3000);
