console.log('Bem Vindo (a) Ao Jogo BlackJack')


 let vamosJogar = confirm('Quer iniciar uma nova rodada?')
 darCartasUsuario = () =>
 { 
    let usuarioCartas = [comprarCarta(), comprarCarta()]
    return usuarioCartas
 }



 darCartasDoPc= () =>{
    let pcCartas = [comprarCarta(),comprarCarta()]
    return pcCartas
 }


 let usuarioCartas1 = darCartasUsuario()
 let pcCartas2 = darCartasDoPc()

 funcaoChecarCartas = (novascartas) => {
    while ((usuarioCartas1[0].valor===11&& usuarioCartas1[1].valor===11) || (pcCartas2[0].valor===11 && pcCartas2[1].valor===11)) {
       console.log('Cartas Repitidas')
       darCartasDoPc()
       darCartasUsuario()
    } }

funcaoDarNovasCartas = () =>{
   usuariocartas1 =usuarioCartas1.push(comprarCarta())
   pcCartas2 = pcCartas2.push(comprarCarta())
}

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
 }

 if (vamosJogar){

   funcaoChecarCartas()
   

  console.log(usuarioCartas1,pcCartas2)
 console.log(resultadoFinalDoPc)
 console.log(resultadoFinalUsuario)

    }

   