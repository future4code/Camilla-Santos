//Exercício 1
  
function inverteArray(array) {
 
   array.reverse()
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
  let i= 0
  let numerosParesElevados = []
  while (i< array.length){
     if (array[i]%2===0){
       let numerosElevados = Math.pow(array[i],2)
       numerosParesElevados.push(numerosElevados)
     }
     i++
  }
  return numerosParesElevados
} 

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let i = 0
   let numerosPares = []
   while (i < array.length){
      if (array[i]%2===0){
        numerosPares.push(array[i]) 
      }
      i++
   }
return numerosPares
}


//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let i =0
   let maiorNumero = 0
   while (i < array.length){
      if (array[i]>maiorNumero){
           maiorNumero= array[i]
       
      } 
     i++
}
return maiorNumero}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const respostas = [false,false,true,true,true]
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   let i=0
   while(i<n){
      n = n[i]
      i++
   }   return n
   // implemente sua lógica aqui
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
     if (a===b && b === c && c===a){
     return "Equilátero"
  } else if ((a === b && a!=c)||(a===c && a!=b)||(b===a && b!=c)||(c===a && c!=b)){
     return  "Isósceles"
  } else if (a != b && b!=c && a!=c){
     return "Escaleno"
  }
}

// Exercício 9 

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let maiorNumero;
   let menorNumero;
   let maiorDivisivelporMenor;
   let diferenca;
  
     if (num1 > num2){
        maiorNumero= num1
        menorNumero=num2
     }else {
      maiorNumero= num2
      menorNumero=num1

     }
   
  if (maiorNumero%menorNumero === 0){
     maiorDivisivelporMenor = true
  } else {
     maiorDivisivelporMenor = false
  } 
  diferenca = maiorNumero - menorNumero
  let objeto = {
     maiorNumero: maiorNumero,
     maiorDivisivelporMenor: maiorDivisivelporMenor,
     diferenca: diferenca
  }
  return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   let i = 0
   let maiorValor=0
   let menorValor=0
   let segundoMaior = array[0]
   let segundoMenor  = array[0]
   let novoArray = []

   while (i < array.length){
      if (array[i]>maiorValor ){
         maiorValor = array [i]
      }
      
      if (array[i]<menorValor){
         menorValor = array [i]
      }
      i++
      
   } 
   console.log(maiorValor,menorValor)
   while (i< array.length){

      if ((array[i]< maiorValor) && ( array[i] > menorValor )&&(array[i]>segundoMaior)){
            segundoMaior = array[i]
      } 
      if ((array[i]< maiorValor) && (array[i] != menorValor)){
         segundoMenor = array[i]
      }
      i++

   }
}
 

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
 array.sort((a,b) => a-b)
return array
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
    let objeto = {
      nome:'O Diabo Veste Prada',
      ano: Number(2006),
      diretor:'David Frankel',
      atores:['Meryl Streep', 'Anne Hathaway', 'Emily Blunt','Stanley Tucci' ]  }
      

   
   return objeto }



// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   let objeto1 = {
      nome:'O Diabo Veste Prada',
      ano: 2006,
      diretor:'David Frankel',
      atores:['Meryl Streep', 'Anne Hathaway', 'Emily Blunt','Stanley Tucci' ] }

      return `Venha assistir ao filme ${objeto1.nome}, de ${objeto1.ano}, dirigido por ${objeto1.diretor} e estrelado por ${objeto1.atores[0]}, ${objeto1.atores[1]},${objeto1.atores[2]}, ${objeto1.atores[3]}` 


}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   let objeto1={
      largura:lado1,
      altura: lado2,
      perimetro:2*(lado1+lado2),
      area: lado1*lado2
   }
 return objeto1.largura, objeto1.altura, objeto1.perimetro, objeto1.area
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}