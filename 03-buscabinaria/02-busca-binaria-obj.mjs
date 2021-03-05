let comps

function buscaBinaria(vetor, fnComp) {
   comps = 0
   let ini = 0
   let fim = vetor.length -1
   let meio
   while(fim >= ini) {
       meio = Math.floor((fim + ini) / 2) // Math.floor() arredonda para baixo.
       switch(fnComp(vetor[meio])){
           case 0: // Achou
               comps++
               return meio
           case 1:  // Valor de busca é Maior
               comps +=2
               ini = meio + 1
               break
           default:  // Valor de busca é Menor
               comps +=2
               fim = meio -1
       }
   }
   return -1 // Não Existe.
}

// A função de comparação para a busca binária precisa retornar um de três valores.
// retorno 0 (zero): o valor de busca e o valor no objeto são IGUAIS.
// retorno -1 (menos um): o valor de busca é MENOR que o valor no objeto.
// retorno 1 (um): o valor de busca é MAIOR que o valor no objeto.

const comparaNome = (obj, busca = 'JONAS') => {
    if (busca === obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}

import {objNomes} from '../includes/vetor-obj-nomes.mjs'

console.time('Buscando LAMARA')
console.log(buscaBinaria(objNomes, (obj, busca = 'LAMARA') => {
    if(busca === obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando LAMARA')

console.time('Buscando ZOZIMO')
console.log(buscaBinaria(objNomes, (obj, busca = 'ZOZIMO') => {
    if(busca === obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando ZOZIMO')

console.time('Buscando ORKUTILSON')
console.log(buscaBinaria(objNomes, (obj, busca = 'ORKUTILSON') => {
    if(busca === obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando ORKUTILSON')