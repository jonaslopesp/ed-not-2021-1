let totTrocas, pass, comps

function bubbleSort(vetor, fnComp) {
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do{
        trocas = 0  // Iniciando uma nova passada.
        pass++

        // Percurso do vetor, da primeira até a Penúltima posição.
        for(let i = 0; i <= vetor.length -2; i++) {
            //if(vetor[i] > vetor[i + 1]) {
            if(fnComp(vetor[i], vetor[i + 1])) {
                    
                // Troca direta em JS via desestruturação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
            }
            comps++
        }
        totTrocas += trocas

    } while (trocas > 0)
}

import {candidatos} from '../includes/candidatos-2018.mjs'

console.log('Antes:', candidatos)
console.time('Ordenando candidatos...')
bubbleSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj1.NM_URNA_CANDIDATO)
console.timeEnd('Ordenando candidatos')
console.log('Depois:', candidatos)
console.log({totTrocas, pass, comps})