// Números
let a = 10, b = 8, c = 10
console.log(a > b);
console.log(a < b);
console.log(a == c);
console.log(a != c);

console.log('--------------------------')

// Strings
a = 'CATIFUNDA'
b = 'FELISBINO'
c = 'CATIFUNDA'
console.log(a > b);
console.log(a < b);
console.log(a == c);
console.log(a != c);

console.log('--------------------------')

// Booleanos
a = true
b = false
c = true
console.log(a > b);
console.log(a < b);
console.log(a == c);
console.log(a != c);

console.log('--------------------------')

// Vetores
// Comparações diretas de vetores dão resultados inconsistentes.
// Não é possível comparar diretamente dois vetores.
a = [10, 20, 30, 40, 50]
b = [-3, -2, -1]
a = [10, 20, 30, 40, 50]
console.log(a > b);
console.log(a < b);
console.log(a == c);
console.log(a != c);

console.log('--------------------------')

// Objetos
// Objetos também naõ podem ser diretamente comparados entre si.
a = {marca: 'Fiat', modelo: '147', ano: 1979};
b = {marca: 'Chevrolet', modelo: 'Chevette', ano: 1982};
c = {marca: 'Fiat', modelo: '147', ano: 1979};
console.log(a > b);
console.log(a < b);
console.log(a == c);
console.log(a != c);

// CONCLUSÃO: apenas os seguintes tipos de dados são diretamente compáveis
// * number
// * string
// * boolean