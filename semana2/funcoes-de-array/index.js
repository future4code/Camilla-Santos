         // Ex
//Interpretação de codigos
// 1
/* Sera impresso o elemento dentro do objeto,
 indice do elemento, e o array completo */

// 2 
/* sera impresso só os nomes */
// 3
/*
ira imprimir todos os que nao tem o apelido chijo */
// ex001
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 let novoArray = pets.map((elemento)=>{
            return elemento.nome
 })
 console.log(novoArray)

 let novoArray2 = pets.filter((elemento1)=>{
     return elemento1.raca === 'Salsicha'
 })
 console.log(novoArray2)
 let novoArray3 = pets.filter((elemento2)=>{
     return elemento2.raca === 'Poodle'
 }).map((elemento2)=>{
     return elemento2.nome
 })
 console.log(novoArray3)

 
// ex 002

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }]
    
    //ex002 a

    let novoArrayDeProdutos = produtos.map((elementoProdutos)=>{
        return elementoProdutos.nome
    })
    console.log(novoArrayDeProdutos) 
    //ex002 b
    let novoArrayDeProdutos1 = produtos.map((elementoProdutos1)=>{ return{ ...elementoProdutos1, preco: elementoProdutos1.preco*0.95}})
    let novoArrayDeProdutos2 = novoArrayDeProdutos1.map((elementoProdutos2)=>{
        return `O produto ${elementoProdutos2.nome} com 5% de desconto ficara ${elementoProdutos2.preco}`
    })
    console.log(novoArrayDeProdutos2)
    //ex002 c
    let novoArrayDeProdutos3 = produtos.filter((elementoProdutos3)=>{
        return elementoProdutos3.categoria === 'Bebidas'
    })
    console.log(novoArrayDeProdutos3)
    //ex002 d
    let novoArrayDeProdutos4 = produtos.filter((elementoProdutos4)=>{
        return elementoProdutos4.nome.includes('Ypê')
    })
    console.log(novoArrayDeProdutos4) 
    //ex002 e
    let novoArrayDeProdutos5 = produtos.filter((elementoProdutos5)=>{
        return elementoProdutos5.nome.includes('Ypê')
    }).map((elementoProdutos5)=>{ return ` O ${elementoProdutos5.nome} esta no valor de ${elementoProdutos5.preco}`})

    console.log(novoArrayDeProdutos5)  

    //desafio 1

    const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
     ]
     
     let ordemAlfabetica = pokemons.map((elemento)=>{
         return  elemento.nome
     }).sort()
     console.log(ordemAlfabetica) 

     //desafio 2

     let tipoPokemon = pokemons.filter((elemento)=>{
         let i =0
         while(elemento.tipo[i] != elemento.tipo[i+1]){
            console.log(elemento.tipo)  
            i++
         }

     })
    