~~~ javascript
//Esta linha de codigo esta em javascript
function calculaSalario(carrosVendidos, valorVendas) {
 let salario = 2000+(carrosVendidos*100)+(valorVendas*0.05)
 return salario
}

function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let valor;
  if (quantidade <12){
   valor = 1.3*quantidade
  } else{
    valor = 1*quantidade
  }
  return valor
}