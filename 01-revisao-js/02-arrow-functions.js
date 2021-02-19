// Função que eleva um número ao quadrado
// Se precisar disso em uma situação real, use Math.pow() ou o operador **
function quadrado(n) {
    return n * n;
}
console.log(quadrado(9));

// Caracteristicas da função acima:
// 1) Apenas um parâmetro;
// 2) Apenas uma linha de código, com return;
// 3) Candidata perfeita a virar ARROW FUNCTION.

// Transformando em Arrow Function
// a) Não precisa de parênteses envolvendo o parâmetro
// b) A palavra function é substituída pelo sinal =>, Depois do parâmetro
// c) Não são necessárias as chaves nem a palavra return
const quadrado2 = n => n * n;
console.log(quadrado2(8));

// Função com mais de um parâmetro
function potencia(b, e){ // b = base, e = expoente
    return b ** e;
}
console.log(potencia(2,8));

// Função equivalente em formato Arrow Function
// Quando temos mais de um parâmetro, os parênteses em volta dos argumentos
// voltam a ser obrigatórios.
let potencia2 = (b, e) => b ** e;
console.log(potencia2(2,8));

// Função sem parâmetro
function megasena(){
    // Esta função retorna um aleatório entre 1 e 60
    // Math.random() --> retorna um número aleatório entre 0 e 1.
    // * 60 --> ajusta a faixa de valores entre 0 e 59.
    // + 1  --> ajusta a faixa de valores entre 1 e 60.
    // Math.floor --> arredondar para o menor inteiro (tirar casas decimais).
    return Math.floor(Math.random() * 60 + 1);
}
console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena());

// No formato Arrow Function
// Quando a função não tem argumentos, é necessário deixar um par de parênteses vazios para marcar seu lugar
const megasena2 = () => Math.floor(Math.random() * 60 + 1)
console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena());

// Função com mais de uma linha de código no corpo
function somaVet(vet) {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet([12,42,-11,20,9,16]));

// No formato Arrow Function
// Quando a função tem mais de uma linha de código,
// retornam as chaves e também a palavra return, caso ela retorne valor.
const somaVet2 = vet => {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet2([12,42,-11,20,9,16]));

// CONCLUSÃO: arrow function foram concebidas para facilitar a escrita de
// funções de apenas uma linha, embora também possam ser usadas para funções
// de múltiplas linhas.