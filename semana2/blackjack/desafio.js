 
 console.log('Bem Vindo (a) Ao Jogo BlackJack')
 let vamosJogar = confirm('Quer iniciar uma nova rodada?')

 darCartasUsuario = () =>
 {   let cartasDoUser =[]
     cartasDoUser [0]=comprarCarta()
     cartasDoUser [1]=comprarCarta()
     return cartasDoUser }


 darCartaComputador = () =>{
    let cartaDoPc = []
     cartaDoPc [0] = comprarCarta()
     cartaDoPc[1] = comprarCarta()
       return cartaDoPc
 }
 let usuarioCartas = darCartasUsuario()
 let pcCartas = darCartaComputador()

 funcaoChecarCartas = () => {
    while ((usuarioCartas[0].valor===11 && usuarioCartas[1].valor===11) || (pcCartas[0].valor===11 && pcCartas[1].valor===11)) {
       console.log('Cartas Repitidas')
       darCartasComputador()
       darCartasUsuario()
    } }

funcaoDarNovasCartasUsuario = () =>{
   usuariocartas =usuarioCartas.push(comprarCarta())
}

funcaoDarNovasCartasPc= () =>{
   pcCartas =pcCartas.push(comprarCarta())
}
comprarCartas = () =>{ 
   while (comprarCartas1 === true && usuarioCartas.valor<22 && pcCartas.valor <22)
   {
   funcaoDarNovasCartasPc()
   funcaoDarNovasCartasUsuario()
   let i =2
   let resultado1 = usuarioCartas[0].valor+usuarioCartas[1].valor+usuarioCartas.valor[i]
   let resultado2 = pcCartas[0].valor +pcCartas[1].valor + pcCartas[i].valor
   console.log(`O usuario - cartas: ${usuarioCartas[0].texto}  ${usuarioCartas[1].texto} ${usuarioCartas[i].texto}- ${resultado1} }`)
   console.log(`O computador - cartas: ${pcCartas[0].texto}${pcCartas[1].texto}${pcCartas[i].texto} - ${resultado2} `)
   i++
}

}
if (vamosJogar){
    darCartasUsuario()
    darCartasComputador()
    funcaoChecarCartas()
    console.log(`O usuario - cartas: ${cartasDoUser[0].texto}  ${cartasDoUser[1].texto} - ${cartasDoUser[0].valor+cartasDoUser[1].valor}`)
    console.log(`O computador - cartas: ${carta1doPc[0].texto}`)
    let conprarCartas1= confirm('Deseja comprar mais cartas?')
            if (comprarCartas1){
            funcaoDarNovasCartasUsuario()
            funcaoDarNovasCartasPc()
            comprarCartas()
       

    } else {console.log(`o jogo acabou`)}
    
    
    

}
else{ console.log(`O jogo acabou`) }

  

    


/*
 funcaoResultado1 =() =>{
    resultadoUsuario = Number(usuarioCartas1[0].valor+usuarioCartas1.valor[1])//+usuarioCartas1.valor[i]
    return resultadoUsuario
 }


 funcaoResultado2 =() =>{
   resultadoPC = Number(pcCartas2[0].valor+pcCartas2[1].valor)//+pcCartas2[2]
   return resultadoPC
  
}
let resultadoFinalUsuario = funcaoResultado1()
let resultadoFinalDoPc = funcaoResultado2()

 comprarCarta = () =>{
    let comprar = confirm('Gostaria de comprar uma carta?')
    let i = 2
    while ((comprar) &&(resultadoFinalDoPc[0,1,i]<21)&&(resultaFinalUsuario[0,1,i]<21) ) {
       funcaoChecarCartas(funcaoDarNovasCartas())
       i++
    }
 }*/