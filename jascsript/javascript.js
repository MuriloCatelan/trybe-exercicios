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


// Exercicios de numeros primos

// let inicio = 2;
// let fim = 50;
// const arrayDosCria = [];
// let divisores;
// let resultado;
// for(let count = 2; count <= fim; count += 1) {
//   divisores=0;
//   for(let aux = 2; aux <= count; aux += 1){
//     if(count % aux === 0){
//       divisores += 1;
//     }
//   }
//   if(divisores <= 1){
//     arrayDosCria.push(count)
//   }
// }
// console.log(arrayDosCria);


//Inversão de string

// let word = 'banana';
// let stringAux = '';
//     for(let index = word.length - 1; index >= 0; index -= 1) {
//       stringAux = stringAux.concat(word[index]);
//     }
// console.log(stringAux);


//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maior = '';
// let menor = array[0];
//   for(let index = 0; index <= array.length - 1; index += 1) {
//     if(array[index].length > maior.length){
//       maior = array[index];
//     }
//     if(array[index].length < menor.length){
//       menor = array[index];
//     }
    
//   }
// console.log(maior);
// console.log(menor);



  
