// pedidos de pizza com for/in

let pizzas = {
    sabor: "Palmito",
    preco: 39.90,
    bodaCatupiry: true,
};

for (let key in pizzas) {
    // console.log(pizzas['bodaCatupiry']);
    // console.log(pizzas);
    console.log(pizzas[key]);
    console.log(key);
}

let pizzasDoces = ['Chocolate', 'Banana', 'Morango'];

for (let key in pizzasDoces) {
    console.log(pizzasDoces);
}

