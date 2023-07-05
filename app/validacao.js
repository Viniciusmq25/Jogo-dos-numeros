function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute

  if (chuteForInvalido(numero)){
    if(chute.toUpperCase()=== "GAME OVER"){
    document.body.innerHTML = `
    <h3>o numero secreto era ${numeroSecreto} </h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `} else {
      elementoChute.innerHTML += '<div>valor inválido</div>'
    }
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
    elementoChute.innerHTML += `<div>Valor invalido. o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
    return 
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!!</h2>
    <h3>o numero secreto era ${numeroSecreto} </h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i> </div>`
  } else {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i> </div>`
  }

}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click",  e =>{
  if (e.target.id == "jogar-novamente") {
    window.location.reload()
  }
})
