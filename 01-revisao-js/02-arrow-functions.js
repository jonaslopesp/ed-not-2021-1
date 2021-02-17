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