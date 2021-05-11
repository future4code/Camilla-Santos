/* Analise de codigo 
ex 001 letra b
Sera impresso o primeiro e o ultimo ator do elenco do filme
localizado no array elenco e sera impresso as tramissoes hoje do array na posicao 
2

ex 002 letra a

todas as informacoes do cachorro como nome, idade e raca logo depois
todas as informacoes do gatoso trocando o nome juca por juba
depois todas as informacoes da tartaruga trocando juba por jubo
ex 002 letra b
copia todas as informacoes contidas dentro do objeto


ex 003 letra a
backender falso
altura indefinido

ex 003 letra b
porque pediu para ser impresso dentro de pessoa a opcao backender
e dentro de pessoa a altura que no caso nao existia


Exercicio de escrita de codigo
ex 001 
let pessoa = {
    nome: 'Camilla',
    apelidos:['Mia', 'Milla','Milinha'],
}
let novaPessoa = {
    ...pessoa,
    apelidos:['Miloka', 'Milona', 'Camilinha'],
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${novaPessoa.apelidos}`)

Ex003

let Carrinho = []
let frutas = {
    nome: 'uva',
    disponibilidade:true,}
    frutas2 ={
        ...frutas,
        nome:'goiaba',
        disponibilidade:false,}
        frutas3 = {
            ...frutas2,
            nome:'laranja',
            disponibilidade:false }
    

function receberFrutas () {
    Carrinho.push(frutas),
    Carrinho.push(frutas2),
    Carrinho.push(frutas3),
    console.log(Carrinho)}
    receberFrutas()
*/
//ex 002
let objeto1 = {
    nome: 'Joao',
    idade:23,
    profissao:'estudante',
}/*
let objeto2 = {
    ...objeto1,
    nome:'Camilla',
    idade: 25,
    profissao:'empresaria',
}
ex 002
function arraydeobjetos () {
    console.log(`${objeto1.nome}, ${objeto1.nome.length},${objeto1.idade},${objeto1.profissao},${objeto1.profissao.length}`)
}

arraydeobjetos() */

//Desafios

function receberInformacao (){
    let informacoes {
    nome : prompt('qual seu nome?'),
    idade: prompt ('Qual sua idade?'),
    profissao : prompt ('Qual a sua profissao?'),
}

}
  
