// Exemplos

// Exercício 0A

function soma(num1, num2) {
   return num1 + num2
}
soma()

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   let altura = Number(prompt('Digite a altura do triangulo:'))
   let largura = Number (prompt('Digite a largura do triangulo'))
   let areaDoTriangulo = altura*largura
   console.log( areaDoTriangulo)
}
calculaAreaRetangulo()

//Exercício 2

function imprimeIdade() {
   // implemente sua lógica aqui
   let anoAtual =Number(prompt('Digita o ano atual'))
   let anoDeNascimento =Number(prompt('Digite seu ano de nascimento'))
   let idade = anoAtual - anoDeNascimento
   console.log(idade)
}
imprimeIdade

//Exercício 3

function calculaIMC(peso, altura) {
   let imc = peso / (altura * altura)
   return imc
   // implemente sua lógica aqui

}

//Exercício 4

function imprimeInformacoesUsuario() {
   let nomeDoUsuario = String (prompt('Digite seu nome'))
   let idadeDoUsuario = String (prompt('Digite sua idade'))
   let emailDoUsuario = prompt ('Digite seu email')
   console.log (`Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuario}`)
   // implemente sua lógica aqui

}
imprimeInformacoesUsuario()

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   let novoArrayDeCores=[]
    novoArrayDeCores[0] = prompt('Digita sua primeira cor favorita')
    novoArrayDeCores[1]= prompt('Digita a sua segunda cor favorita')
    novoArrayDeCores[2] = prompt('Digite a sua terceira cor favorita')
    console.log(novoArrayDeCores)
   
}
 imprimeTresCoresFavoritas()




//Exercício 6

function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   let frase = prompt('Digite uma string')
   let fraseEmMaiuscula = frase.toUpperCase()
   return fraseEmMaiuscula
}
retornaStringEmMaiuscula()

//Exercício 7

 function calculaIngressosEspetaculo(custo, valorIngresso) {
   let semPrejuizo = custo / valorIngresso
   return semPrejuizo

   // implemente sua lógica aqui
}
calculaIngressosEspetaculo(custo, valorIngresso)

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
   let stringTamanho = string1.length === string2.length
   return stringTamanho
  // implemente sua lógica aqui
}
checaStringsMesmoTamanho(string1,string2)

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
   let novoArray = array[0]
   return novoArray
}
retornaPrimeiroElemento(array)

// Exercício 10

function retornaUltimoElemento(array) {
   let arrayUltimo = array[array.length -1]
   return arrayUltimo
   // implemente sua lógica aqui
}
retornaUltimoElemento(array)
//Exercício 11

function trocaPrimeiroEUltimo(array) {
   let novoArray = array [0]
   let arrayUltimo = array [array.length-1]
   array.splice(0,1,arrayUltimo)
   array.splice(arrayUltimo,1,novoArray)
   let newArray = array
   return newArray

   // implemente sua lógica aqui
}
trocaPrimeiroEUltimo(array)
// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
   // implemente sua lógica aqui
}