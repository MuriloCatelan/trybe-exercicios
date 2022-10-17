//EXERCICIO DE PALINDROMOS

// function verificaPalindrome(word) {
//     for(index in word) {
//       if(word[index] != word[(word.length - 1) - index]) {
//         return false;
//       }
//     }
//     return true;
//   }

// console.log(verificaPalindrome('arara')); // true
// console.log(verificaPalindrome('desenvolvimento')); //false

// function verificaPalindrome(string) {
//    let reverse = string.split('').reverse('').join('');
//    if (reverse === string) {
//        return true;
//    } else {
//        return false;
//    }
// }

// console.log(verificaPalindrome('arara')); // true
// console.log(verificaPalindrome('desenvolvimento')); //false


// function indiceDoMaior(numeros) {
//     let indiceMaior = 0;
//     for (indice in numeros) {
//         if (numeros[indiceMaior] < numeros[indice]) {
//             indiceMaior = indice;
//         }
//     }
//     return indiceMaior;
// }

// console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); // 4

// function indiceDoMenor(numeros) {
//     let indiceMenor = 0;
//     for (let indice in numeros) {
//       if (numeros[indiceMenor] > numeros[indice]) {
//         indiceMenor = indice;
//       }
//     }
  
//     return indiceMenor;
//   }
  
//   console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6



function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
        if (maiorPalavra.length < palavras[indice].length) {
            maiorPalavra = palavras[indice]
        }
    }
    return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));





