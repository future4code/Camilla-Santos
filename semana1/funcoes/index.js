/* Exercicio de interpretacao de codigo 
    Q1.
function minhaFuncao(variavel) {
	return variavel * 5
}
a.
console.log(minhaFuncao(2)) // Resposta sera 10 pq 2 * 5
console.log(minhaFuncao(10)) resposta sera 50 pq 5 * 10 
b. se apenas invocasse a funcao ele ia correr mas nao ia imprimir
no console 

    Q2 
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) 

a. Eu acho que nesse programa ele ira pegar o texto que o usuario digitou 
botar em lowercase e ver se o programa tem a palavra cenoura no texto se nao
tiver ele retorna false por causa das funcoes lowercase() e includes()
i. volta verdadeiro
ii. volta verdadeiro 
iii.volta verdadeiro tambem

*/
/*      Questao 1 letra A

function imprimirInformacao(){
    console.log('Eu sou Camilla, tenho 25 anos, moro em Salvador e sou estudante da labenu')
}    
imprimirInformacao() 

//      Questao 1 letra  B
function imprimirInformacao(nomeDoUsuario, idade, cidade, profissao)
{
  console.log(`eu sou ${nomeDoUsuario}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao} `)  
}
imprimirInformacao('Hosana',25, 'Londres','Dentista')
//      Questao 2 letra A
function recebaNumero (numero1, numero2){
    let soma = numero1 +numero2
    return soma
}
const resultadoFinal = recebaNumero(2,5)
console.log(resultadoFinal)
//      Questao 2 Letra B
function receberNumero (numero1, numero2){
    const booleano = numero1 >= numero2
    return booleano
}
let booleanoFinal = receberNumero(2,2)
console.log('o primeiro numero sera maior igual ao segundo?', booleanoFinal)

        //Questao 2 Letra C
    function numero (n1){
const numeroPar = (n1%2 === 0)
return numeroPar
    }
    const resultadoFinal = numero(3)
    console.log('o numero é par?', resultadoFinal)
        Questao 2 letra D
    function receberMensagem(){
        const tamanho = receberMensagem.length
        let emMinusculo = receberMensagem.toLowerCase
        console.log('O tamanho da mensagem sera',tamanho, 'para a frase', emMinusculo)

    }
    let suaMensagem = prompt('Digite uma mensagem:')
    receberMensagem(suaMensagem) */
        /* Questao 3
    let n1 = Number (prompt('digite o primeiro numero:'))
    let n2 = Number (prompt ('digite o segundo numero:'))
    function divisao (n1,n2){
        let divisao1 = n1/n2
        return divisao1

    }
    let divisaoFinal = divisao (n1, n2)

    function multiplicacao (n1,n2)
    {   let multiplicacao1 = n1*n2
        return multiplicacao1

    }
    let multiplicacaoFinal = multiplicacao(n1,n2)

    function subtracao (n1,n2){
        let subtracao1 = n1-n2
        return subtracao1
    }
    let subtracaoFinal = subtracao(n1,n2)

    function soma (n1,n2) {
        let soma1= n1+n2
        return soma1
    }
    let somaFinal = soma(n1,n2)
    console.log(` a soma sera ${somaFinal}, a divisao sera ${divisaoFinal}, a multiplicacao sera ${multiplicacaoFinal} e a divisao sera ${divisaoFinal}`)

    */