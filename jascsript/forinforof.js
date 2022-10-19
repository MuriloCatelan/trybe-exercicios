// Exemplos com for/in

// let pizzas = {
//     sabor: "Palmito",
//     preco: 39.90,
//     bodaCatupiry: true,
// };

// for (let key in pizzas) {
//     // console.log(pizzas['bodaCatupiry']);
//     // console.log(pizzas);
//     console.log(pizzas[key]);
//     console.log(key);
// }

// let pizzasDoces = ['Chocolate', 'Banana', 'Morango'];

// for (let key in pizzasDoces) {
//     console.log(pizzasDoces);
// }


// let cars = ['Saab', 'Volvo', 'BMW'];

// for(let index in cars) {
//     console.log(cars[index]); // Saab Volvo BMW
// }

// console.log(cars); //[ 'Saab', 'Volvo', 'BMW' ]


// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'White',
// };

// for (let index in car) {
//     console.log(index, car[index]);
// }


//DIFF ENTRE FOR/IN E FOR/OF

//FOR/IN

// let food = ['hamburguer', 'bife', 'acarajé'];

// for(let position in food) {
//     console.log(position);
// };
//resultado: 0, 1, 2;

//FOR/OFF

// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };
//resultado: hamburguer, bife, acarajé;