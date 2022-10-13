let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum=0;
for(let i=0; i<numbers.length; i+=1){
    sum+=numbers[i]    
}
console.log(sum);
console.log(sum/numbers.length)

// - passo 1: percorrer o array
// - passo 2: descobrir os impares

// let cont=0
// for(let c=0; c<numbers.length; c+=1) {
//     if (numbers[c] % 2 > 0) {
//         cont= cont+1;
//     }
    
// }


//Contando os números ímpares dentro de um array
if (cont=== 0) {
    console.log("nenhum valor ímpar encontrado")
}
else {
    console.log(`A quantidade de números ímpares é: ${cont}` ) 
}


//Descobrindo o menor número dentro de um array através de comparação
let menor = 999
for(let m = 0; m < numbers.length; m += 1) {
    if (numbers[m] < menor) {
        menor = numbers[m]
    }
}
console.log(`O menor número é: ${menor}`)


// Criando array atravé do for
let array = []
for(let cont = 1; cont <= 25; cont += 1) {
    array.push(cont)
}
console.log(array);

// let divArray = []
for(let d = 0; d < array.length; d += 1) {
    console.log(array[d]/2);
}