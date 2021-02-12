let frutas = ['maçã', 'laranja', 'pera', 'uva', 'mamão', 'banana'];

// Vetor original
console.log(frutas);

// Retirar o último elemento de um vetor em javascript
let ultimaFruta = frutas.pop();

// Vetor alterado
console.log(frutas);
console.log(ultimaFruta);

// Remoção do primeiro elemento do vetor
let primeriaFruta = frutas.shift();

console.log(frutas);
console.log(primeriaFruta);

// Remoção em uma posição intermediária
// 1º Parâmetro -> a posição de remoção (contagem começa em 0)
// 2º Parâmetro -> a quantidade de elementos a remover.
let terceiraFruta = frutas.splice(2, 1);

// O Splice, sempre retornará um vetor (de tudo que ele conseguir tirar, mesmo que seja um vetor nulo).

console.log(frutas);
console.log(terceiraFruta);