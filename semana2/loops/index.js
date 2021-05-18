//ex 001
/* ex 001 
ira contar os numeros de 0 ate 4 */
//ex 002
/* a) ira ler o array e se ele for maior que 18
imprime no console
b) seria usando indexof */
//ex 003
/*
0
00
000
0000
  
ex001

function petNome(){
let pet = Number (prompt ('Quantos bichinhos de estimacao voce tem?'))
if (pet === 0 ){
   console.log('Que pena! Você pode adotar um pet!')
} else { 
   
    for (let i = 0; i<pet ; i++ )
    {
     let nomePet = prompt ('Digite o nome do seu pet:')
     let arrayDeNome = new Array()
     arrayDeNome= arrayDeNome + nomePet
     console.log(arrayDeNome)
    }
    
}}
petNome()*/

//ex002
//         a)
/*
let arrayOriginal = [0,10,25,45,85,10,23,56]
function imprimirArrayOriginal (){
for (let i = 0; i<arrayOriginal.length; i++){
    console.log(arrayOriginal[i])
}}
imprimirArrayOriginal() 
// b


let arrayOriginal = [10,25,45,85,10,23,56]
function imprimeDivisao (){
   for (let i= 0 ; i<arrayOriginal.length; i++){
   let divisao = arrayOriginal[i]/10
   console.log(divisao)}

}
imprimeDivisao(arrayOriginal) 

//c

let arrayOriginal = [10,20,40,85,10,23,56]
function imprimePar(){
    for (let i =0; i<arrayOriginal.length ;i++)
    if (arrayOriginal[i] % 2 ===0){
        console.log(arrayOriginal[i])
    }
}
imprimePar()
//d
let arrayOriginal = [10,20,40,85,10,23,56]
function imprimeString(){
    for (let i =0; i<arrayOriginal.length ;i++){
        console.log(`o elemento do index ${i},sera: ${arrayOriginal[i]}`)
    }
    
}
imprimeString() 

//e
let arrayOriginal = [10,20,40,85,10,23,56]
maiorNumero1=0
menorNumero2=0
function maiorNumero(){
    for (let i =0; i<arrayOriginal.length ;i++){ 
        if (arrayOriginal[i]>maiorNumero1)
        maiorNumero1 = arrayOriginal[i]
    } 
    return maiorNumero1
}
const resultado1 = maiorNumero()

function menorNumero(){
    for (let i =0; i < arrayOriginal.length ;i++){ 
        if (arrayOriginal[i]<menorNumero2){
        menorNumero2 = arrayOriginal[i]}
    } 
    return menorNumero2
}
const resultado2= menorNumero()
console.log(resultado1)
console.log(resultado2)*/
//Desafio 1
let numeroPensando = Number (prompt('Digite o numero que esta pensando'))
console.log('Vamos Jogar')
let numeroJogado;
function numeroPensando1 (){
    while (numeroPensando!= numeroJogado){
        numeroJogado = Number(prompt('digite um numero'))
         if (numeroJogado>numeroPensando){
             console.log('numero menor')
         } else if ( numeroJogado< numeroPensando){
             console.log('numero maior')
         }
    }
   
}

numeroPensando1()
console.log('Acertou')