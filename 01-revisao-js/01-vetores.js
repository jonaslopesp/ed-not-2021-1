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

// Inserindo no final do vetor
frutas.push('amora');  // pode inserir mais de um elemento ao mesmo tempo.
// por exemplo: frutas.push('amora','jaca');
console.log(frutas);

// Inserir no início do vetor
frutas.unshift('jabuticaba');  // Também pode inserir mais de um elemento ao mesmo tempo.
// por exemplo: frutas.unshift('jabuticaba','mexerica');
console.log(frutas);

// Inserindo no meio do vetor
// Parâmetros do splice() para inserção
// 1º -> Posição para inserção;
// 2º -> Número de elementos a serem excluídos (para inserção, usa-se 0)
// 3º em diante -> elemento(s) que será(ão) inserido(s)
frutas.splice(2, 0, 'pêssego');  // inserindo na terceira posição, não irá apagar ninguém 0, será inserido o pêssego.
// Também funciona para inserir vários elementos ao mesmo tempo.
// frutas.splice(2, 0, 'pêssego', 'jaca', 'tomate')
console.log(frutas);

// Usando splice() para substituição
// Parâmetros:
// 1º -> posição para substituição
// 2º -> quantidade de elementos que serão excluídos (para substituição, 1)
// 3º -> o elemento que será incluído no lugar
frutas.splice(4, 1, 'ameixa');  // Substituição na 5ª posição
console.log(frutas);

// Inserção múltipla com splice()
frutas.splice(1, 0, 'nectarina', 'jaca');
console.table(frutas);


//*****************************//
// PERCURSO DE VETOR  //
// 1) Percurso com FOR tradicional
// a) A contagem começa em zero (0 - primeiro elemento);
// b) Ocorre enquanto o contador for MENOR que o número de elementos do vetor.
// c) length termina com TH
// d) É o método mais flexível pois, se necessário, é possível fazer um percurso parcial.
for(let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i]);
}

console.log('--------------------------------------------')

// 2) FOR tradicional, em ordem inversa
// a) O contador inicia-se em length -1
// b) A condição é contador MAIOR OU IGUAL a zero (0 - primeiro elemento)
for(let i = frutas.length - 1; i >= 0; i--) {
    console.log(i, frutas[i]);
}

console.log('--------------------------------------------')

// 3) Percurso com FOR..OF
// a) Sempre percorre o vetor inteiro, na ordem natural, sem necessidade de uma variável contadora.
// Variáveis:
// f -> variável que receberá cada elemento do vetor(pode ser qualquer nome válido de variável)
// frutas -> é o vetor a ser percorrido.

// let x = 0
for(let f of frutas) {
    console.log(f);
    //console.log(x, f)
    //x++
}

console.log('--------------------------------------------')

// 4) Percurso com forEach()
// forEach() recebe como parametro uma função que recebe como parametro cada elemento do vetor.
// O nome do parâmetro da função pode ser qualquer nome válido de identificados.
frutas.forEach(function(elemento){
    console.log(elemento)
})

console.log('--------------------------------------------')

// O mesmo forEach(), usando uma arrow function como parâmetro.
frutas.forEach(elemento => console.log(elemento))