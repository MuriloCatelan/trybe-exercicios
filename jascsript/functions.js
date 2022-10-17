//Aula sobre funções.

// var statusCarro = "desligado";
// var aceleracao = 0;
// var rotacaoDoVolante = 0;


// function ligarDesligar () {
//     if (statusCarro === "desligado") {
//         statusCarro = "ligado";
//     }
//     else {
//         statusCarro = "desligado";
//     }
//     return statusCarro;
// }

// function acelerar(incremento) {
//     aceleracao = aceleracao + incremento;
//     return "Acelerando a " + aceleracao + "m/s²";
// }

// function frear(decremento) {
//     aceleracao = aceleracao - decremento;
//     return "Desacelerando para " + aceleracao + "m/s²";
// }

// function giraVolante(anguloRotacao) {
//     rotacaoDoVolante = anguloRotacao;

//     return rotacaoDoVolante + "º";
// }

// ligarDesligar
// console.log(ligarDesligar);



// Sem função
// let nome = 'João';

// console.log('Bom dia, ' + nome);



// Com função
// function bomDiaTryber(nome) {
//   console.log('Bom dia, ' + nome);
// }

// bomDiaTryber('João'); // Bom dia, João
// bomDiaTryber('Julia'); // Bom dia, Julia
// bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// function bomDia() {
//     return 'Bom dia!';
// }

// console.log(bomDia());




// let status = 'deslogado';

// function logarDeslogar() {
//     if (status === 'deslogado') {
//         status = 'logado';
//     } else {
//         status = 'deslogado';
//     }

// }

// console.log(status); //deslogado

// logarDeslogar();
// console.log(status); // logado

// logarDeslogar();
// console.log(status); // deslogado

// console.log('O usuário está ' + status); // O usuários está deslogado



// FUNÇÕES USANDO PARAMETROS

// function soma(a, b) {
//     return a + b;
// }

// console.log(soma(5, 2));


// function maiorNum(primeiroNum, segundoNum) {
//     if (primeiroNum  > segundoNum) {
//         return primeiroNum + ' é maior que ' + segundoNum;
//     } else if (segundoNum > primeiroNum) {
//         return segundoNum + ' é maior que ' + primeiroNum;
//     } else {
//         return 'Os numeros são iguais!';
//     }
// }

// console.log(maiorNum(10, 20)); // 20 é maior que 10
// console.log(maiorNum(2, -5)); // 2 é maior que -5
// console.log(maiorNum(1, 1)); // Os numeros são iguais



// EXERCICIOS PRELIMINARES

//SOMA, SUBTRAÇÃO, DIVISÃO, MULTIPLICAÇÃO E MÓDULO
// function soma(a, b) {
//     return a + b;
// }
// function subtracao(a, b){
//     return a - b;
// }
// function divisao(a, b){
//     return a / b;
// }
// function multiplicacao(a, b){
//     return a * b;
// }
// function modulo(a, b){
//     return a % b;
// }

// console.log(soma(1, 10));
// console.log(subtracao(10, 1));
// console.log(divisao(10, 2));
// console.log(multiplicacao(10, 10));
// console.log(modulo(10, 10));


//MAIOR NUMERO
// const a = 10;
// const b = 8;

// function maior(a, b){
//     if (a > b) {
//         return a + " maior que " + b;
//     }
//     else if (b > a) {
//         return b + " maior que " + a;
//     }
//     else {
//         return "São iguais motofoca";
//     }
// }

// console.log(maior(a, b));


// function maiorDeTres(a, b, c) {
//     if (a > b && a > c) {
//         return 'O maior numero é ' + a;
//     }
//     else if (b > a && b > c) {
//         return 'O maior numero é ' + b;
//     }
//     else if (c > b && c > a) {
//         return 'O maior numero é ' + c;
//     }
//     else {
//         return 'Os numeros são iguais';
//     }
// }

// console.log(maiorDeTres(2, 2, 4));


// function positive(numero) {
//     if (numero > 0){
//         return 'positive';
//     } else if (numero < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }

// }

// console.log(positive(10));
// console.log(positive(-5));
// console.log(positive(0));


//SOMA DE 3 ANGULOS

// function triangleAnglesValidate(angleA, angleB, angleC){
//     let sumOfAngles = angleA + angleB + angleC;
//     let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;

//     if (allAnglesArePositives) {
//         if (sumOfAngles === 180){
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     else {
//         return 'Erro: ângulo inválido';
//     }
// }

// console.log(triangleAnglesValidate(-100, 40, 40));


