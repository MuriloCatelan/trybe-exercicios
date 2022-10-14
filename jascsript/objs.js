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
