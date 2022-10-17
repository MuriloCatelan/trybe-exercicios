// let diasDaSemana = {
//     1: 'Domingo',
//     2: 'Segunda',
//     3: 'Terça',
//     4: 'Quarta',
//     5: 'Quinta',
//     6: 'Sexta',
//     7: 'Sabado',
// };

// console.log(diasDaSemana['2']);
//Resultado: Segunda.


// Objetos dentro de objetos e meios de chamá-los

// let conta = {
//     agencia: '0000',
//     banco: {
//         cod: '012',
//         id: 4,
//         nome: 'TrybeBank',
//     },
// };

// let infoDoBanco = 'banco';
// console.log(conta[infoDoBanco]); //{con: '012', id: 4, nome: 'TrybeBank' }
// console.log(conta[infoDoBanco]['nome']); //TrybeBank

// console.log(conta.agencia); //0000
// console.log(conta['agencia']); //0000

// console.log(conta.banco.cod); // 012
// console.log(conta['banco']['id']); // 4


// Exemplo 2

// let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//         nome: 'Jake',
//         sobrenome: 'Peralta',
//         endereco: {
//             rua: 'Smith Street',
//             bairro: 'Brooklyn',
//             cidade: 'Nova Iorque',
//             estado: 'Nova Iorque',
//         },
//     },
// };

// console.log(usuario['id']); // 99
// console.log(usuario.email); // jakeperalta@gmail.com

// console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque


// OBJETOS DENTRO DE UM ARRAY

// let moradores = [
//     {
//         nome: 'Luiza',
//         sobrenome: 'Guimarães',
//         andar: 10,
//         apartamento: 1005,
//     },
//     {
//         nome: 'William',
//         sobrenome: 'Albuquerque',
//         andar: 5,
//         apartamento: 502,
//     },
//     {
//         nome: 'Murilo',
//         sobrenome: 'Catelan',
//         andar: 8,
//         apartamento: 804,
//     },
//     {
//         nome: 'Zoey',
//         sobrenome: 'Brooks',
//         andar: 1,
//         apartamento: 101,
//     },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// console.log(primeiroMorador['andar']);

// let ultimoMorador = moradores[moradores.length -1];
// console.log(ultimoMorador);
// console.log(ultimoMorador['andar']);
// console.log(ultimoMorador.nome);


// let player = {
//         nome: 'Marta',
//         lastName: 'Silva',
//         age: 34,
//         medals: 
//         {
//             golden: 2,
//             silver: 3,
//         },
// };

// let pessoa = player.nome + '' + player.lastName
// let medalInfo = 'medals'
// console.log(player.medals);
// console.log(pessoa);


// EXERCICIOS FINAIS DO DIA SOBRE OBJETOS

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'NAmorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log('Bem-vinda, ' + info.personagem);


// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// info.recorrente = 'Sim';
// // info['recorrente'] = 'Sim'

// // console.log(info);

// for(let properties in info){
//     console.log(properties);
//     console.log(info[properties]);
// }


// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
// };
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
// };

// for (let properties in info) {
//     if (
//         properties === 'recorrente' &&
//         info[properties] === 'Sim' &&
//         info2[properties] === 'Sim'
//     ) {
//         console.log('Ambos recorrentes');
//     }
//     else {
//         console.log(info[properties] + ' e ' + info2[properties]);
//     }
// };



let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "'
 + leitor.livrosFavoritos[0].titulo + '"');


leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
});

console.log(leitor.nome + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos.');

