// Objetos são estruturas que permitem armazenar diversos valores
// em uma mesma variável, permitindo acessá-los por meio de um nome

// Criação de um objeto vazio
let vazio1 = {}   // Forma "moderna"
let vazio2 = new Object()  // Forma "tradicional"

// Criação de um objeto já com dados
let pessoa = {
    // Os dados são armazenados no formato propriedade: valor
    // ou também chamado de atributo: valor
    nome: 'Orkutilson',
    sexo: 'Masculino',
    dataNasc: '2008-04-19',
    ocupacao: 'estudante',
    //Nome da propriedade pode ter espaços ou acento.
    //Nesse caso, o nome da propriedade precisa estar entre aspas
    'cidade de origem': 'Aeroporto/SP',
    gostos: ['jogos', 'doces', 'dormir'] // Vetor em uma posição de objeto.
}
console.log(pessoa);
console.table(pessoa);

// Exibindo apenas o valor de uma propriedade
console.log(pessoa.nome);
// Quando o nome da propriedadetem espaços ou acento, não é possível usar
// a sintaxe de ponto. É necessário usar a sintaxe de colchetes.
console.log(pessoa['cidade de origem']);

// A sintaxe dos colchetes SEMPRE funciona, mesmo se o nome da propriedade
// for uma única palavra sem acento.
console.log(pessoa['nome']);
console.log(pessoa['gostos'][1]); // Mostrando apenas o 'doces'.

// Outra consequência da sintaxe dos colchetes é a possibilidade de
// usar nomes de propriedades que estão dentro de variáveis
let x = 'sexo'
console.log(pessoa[x])
x = 'dataNasc'
console.log(pessoa[x])

// Criando uma nova propriedade para um objeto já existente
// Basta atribuir um valor a um nome de propriedade ainda não existente
pessoa.email = 'orkutilson@gmail.com'
pessoa.celular = '(16) 99999 XXXX'
console.table(pessoa);

// Criando um objeto vazio e só depois adicionando propriedades
let carro = {}
carro.marca = 'VW'
carro.modelo = 'Kombi'
carro.ano = '1990'
carro['combustível'] = 'gasolina'
carro.cor = 'laranja'
console.table(carro)

// Excluindo uma propriedade de um objeto
delete carro.ano
console.table(carro)