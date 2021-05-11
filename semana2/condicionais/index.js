/*
Exercícios de interpretação de código

ex 001

a) o codigo ler um numero queo usuario quer testar
e se esse numero divido por dois o resto for
zero entao o usuario passou se nao ele nao passou

b) numero par passa no teste 
c)numero impar 

ex 003
a) serve para receber o nome de uma fruta e imprimir 
seu preco
b)2.25
C) o preco da pera seria 5 nao 5.50

ex 003
a) pedindo o usuario um numero
b) ira imprimir a mensagem secreta mas se fosse 
-10 nao iria imprimir nada
c) sim pq o escopo if nao esta no escopo global logo 
a variante mensagem nao esta definida no escopo global
*/
//ex 001

let idade = Number (prompt('Digite sua idade:'))
if (idade>=18){
    console.log('Voce esta autorizado a dirigir')
} else{
    console.log('Voce nao esta autorizado a dirigir')
} 

//ex002
let horarioDeEstudo = prompt('Digite o horario de estudo M para (matutino) V (vespertino) e N(noturno)').toLowerCase()

if (horarioDeEstudo === 'm'){
    console.log( 'Bom Dia')
} else if (horarioDeEstudo === "v"){
    console.log('Boa Tarde')
} else{ console.log('Boa Noite')}
 
//eX 003

let horarioDeEstudo = prompt('Digite o horario de estudo M para (matutino) V (vespertino) e N(noturno)').toLowerCase()
let frase = () => {
    switch (horarioDeEstudo){
    case 'm':
    return ' Bom Dia'
    break
    case 'v':
    return 'Boa Tarde'
    break
    case 'n':
    return 'Boa Noite'
    break
    default:
        return'Horario de aula nao existe'
    }
}
let horarioFinal = frase(horarioDeEstudo)
console.log(horarioFinal)
//ex004
let generoDoFilme = prompt('Digite o genero do filme').toLowerCase()

let precoDoFilme = Number(prompt ('Digite o preco do filme:'))
AssistirFilme =() =>
{if (generoDoFilme === 'fantasia' && precoDoFilme <= 15){
    let resposta = prompt ('Voce assistira o filme? Sim ou Nao').toLowerCase()
    if (resposta === 'sim' ){
        console.log('Bom filme')
    } else{ console.log('Escolha outro filme')}
} else {console.log('Escolha outro filme')}}
AssistirFilme() 
//Desafio 1
let generoDoFilme = prompt('Digite o genero do filme').toLowerCase()

let precoDoFilme = Number(prompt ('Digite o preco do filme:'))
AssistirFilme =() =>
{if (generoDoFilme === 'fantasia' && precoDoFilme <= 15){
    let resposta = prompt ('Voce assistira o filme? Sim ou Nao').toLowerCase()
    if (resposta === 'sim' ){
        let lanchinho = prompt ('Qual Snack voce ira querer agora?')
        console.log('Bom filme')
        console.log(`Aproveite o seu ${lanchinho}`)
    } else{ console.log('Escolha outro filme')}
} else {console.log('Escolha outro filme')}}
AssistirFilme() 







//desafio 2

let nomeCompleto = prompt('Digite seu nome completo:')
let tipoDeJogo = prompt ('Digite o tipo de jogo: IN ou DO').toLowerCase()
let etapaDoJogo = prompt('Digite a etapa do jogo: SF, DT ou FI').toLowerCase()
let categoria = Number (prompt('Digite a categoria?'))
let quantidadeDeIngressos = Number(prompt('Digite a quantidade de ingressos'))

calculosDeIngressos =() => {
   if (tipoDeJogo === 'do' && etapaDoJogo === 'sf' && categoria === 1) {
       valorFinal =Number(quantidadeDeIngressos*1320)
       console.log('O valor unitario desse ingresso sera R$1320,00 reais e o valor total da compra sera ', valorFinal)}


       else if (tipoDeJogo === 'do' && etapaDoJogo === 'sf' && categoria === 2){
        valorFinal =Number(quantidadeDeIngressos*880)
        console.log('O valor unitario desse ingresso sera R$880,00 reais e o valor total da compra sera ', valorFinal)}

        else if (tipoDeJogo === 'do' && etapaDoJogo === 'sf' && categoria === 3){
            valorFinal =Number(quantidadeDeIngressos*550)
            console.log('O valor unitario desse ingresso sera R$550,00 reais e o valor total da compra sera ', valorFinal)}

            else if (tipoDeJogo === 'do' && etapaDoJogo === 'sf' && categoria === 4){
                valorFinal =Number(quantidadeDeIngressos*220)
                console.log('O valor unitario desse ingresso sera R$220,00 reais e o valor total da compra sera R$', valorFinal, ',00 reais')}

                
            else if (tipoDeJogo === 'do' && etapaDoJogo === 'dt' && categoria === 1){
                valorFinal =Number(quantidadeDeIngressos*660)
                console.log('O valor unitario desse ingresso sera R$660,00 reais e o valor total da compra sera R$', valorFinal, ',00 reais')}

                else if (tipoDeJogo === 'do' && etapaDoJogo === 'dt' && categoria === 2){
                    valorFinal =Number(quantidadeDeIngressos*440)
                    console.log('O valor unitario desse ingresso sera R$440,00 reais e o valor total da compra sera R$', valorFinal, ',00 reais')}

                    else if (tipoDeJogo === 'do' && etapaDoJogo === 'dt' && categoria === 3){
                        valorFinal =Number(quantidadeDeIngressos*330)
                        console.log('O valor unitario desse ingresso sera R$330,00 reais e o valor total da compra sera R$', valorFinal, ',00 reais')}
                        else if (tipoDeJogo === 'do' && etapaDoJogo === 'dt' && categoria === 4){
                            valorFinal =Number(quantidadeDeIngressos*170)
                            console.log('O valor unitario desse ingresso sera R$170,00 reais e o valor total da compra sera R$', valorFinal, ',00 reais')}
                            else if (tipoDeJogo === 'do' && etapaDoJogo === 'fi' && categoria === 1){
                                valorFinal =Number(quantidadeDeIngressos*1980)
                                console.log('O valor unitario desse ingresso sera R$1980,00 reais e o valor total da compra sera R$', valorFinal, ',00 reais')}
                                else if (tipoDeJogo === 'do' && etapaDoJogo === 'fi' && categoria === 2){
                                    valorFinal =Number(quantidadeDeIngressos*1320)
                                    console.log('O valor unitario desse ingresso sera R$1320,00 reais e o valor total da compra sera R$', valorFinal, ',00 reais')}
                                    else if (tipoDeJogo === 'do' && etapaDoJogo === 'fi' && categoria === 3){
                                        valorFinal =Number(quantidadeDeIngressos*880)
                                        console.log('O valor unitario desse ingresso sera R$880,00 reais e o valor total da compra sera R$', valorFinal, ',00 reais')}
                                        else if (tipoDeJogo === 'do' && etapaDoJogo === 'fi' && categoria === 4){
                                            valorFinal =Number(quantidadeDeIngressos*330)
                                            console.log('O valor unitario desse ingresso sera R$330,00 reais e o valor total da compra sera R$', valorFinal, ',00 reais')}
    

   }
  calculosDeIngressos() 
