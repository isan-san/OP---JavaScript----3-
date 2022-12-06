var num = 10;
var resultado = 1;
while (true) {
  console.log("el numero por ahora es " + num);
  resultado = resultado * (num);
  num--;
  console.log("el resultado por ahora es " + resultado);
  if (num == 1) {
    break;
  }
}
console.log(resultado);
