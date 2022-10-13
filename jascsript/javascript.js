//Exercicio 1 do dia 13-10-2022

// let fruits = [3, 4, 1, 1, 1];

// let sum = 0
// for(let p = 0; p < fruits.length; p +=1 ) {
//     sum += fruits[p];
// }

// if(sum > 15) {
//     console.log(sum)
// }
// else {
//     console.log("Valor menor que 16")
// }


//Exercicio 2

// const n = 5;

// let resultado = 0;
// for(let index = 0; index <= n; index += 1) {
//     resultado =+ index
// };
// console.log(resultado)


//Exercicios finais

//Calculo de fatorial

// var fatorial = 5;
// var resultado = fatorial;
// for(var i = 1; i < fatorial; i += 1) {
//     resultado *= i;
// }
// console.log(resultado)

// var fatorial = 10;
// var resultado = fatorial;
// for(var m = 1; m < fatorial; m += 1) {
//     resultado *= m;
// }
// console.log(resultado)


var numero = 50;
var resposta = numero;
var divisores=0;

  for(var count=1 ; count<=numero ; count++)
   if(numero % count == 0)
   	divisores++;
  
  if(divisores==2){
  	resposta ='É primo';
}
  else{
  	resposta ='Não é primo';
}