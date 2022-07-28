const inputHeight = document.querySelector('.height');
const inputWeight = document.querySelector('.weight');
const inputResult = document.querySelector('.result');
const buttonSubmit = document.querySelector('.buttonSubmit');

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault()
  let imc = inputWeight.value / (inputHeight.value * inputHeight.value);
  imc = imc.toFixed(1)
  inputResult.style.display = "block"
  inputResult.innerHTML = checkImc(imc);
})

function checkImc(imc) {
  if(imc < 18.5) {
    return 'Seu imc é ' + imc + ' e você está abaixo do peso ideal.'
  }

  if(imc >= 18.5 && imc <= 24.9) {
    return 'Seu imc é ' + imc + ' e você está dentro do peso ideal.'
  }

  if(imc >= 25 && imc <= 29.9) {
    return 'Seu imc é ' + imc + ' e você está com sobrepeso'
  }

  if(imc >= 30 && imc < 39.9) {
    return 'Seu imc é ' + imc + ' e você está obeso'
  }

  if (imc >= 40) {
    return 'Seu imc é ' + imc + ' e você está com obesidade grave'
  }
}