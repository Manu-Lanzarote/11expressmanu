// función que devuelva un número aleatorio entre 0 y 9.
function aleatorio() {
  let numero = Math.floor(Math.random() * 10);
  return numero;
}
//console.log(aleatorio());
module.exports = aleatorio;
