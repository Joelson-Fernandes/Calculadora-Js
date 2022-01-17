//Realiza a operação matematica
function calcular(operador){

  var equacao = eval(display1.value + display2.value)
 
  if (operador === '=') {
    display1.value = ''
    display2.value = equacao
  } else {
    display1.value = equacao += operador
    display2.value = ''
  }
}
//realiza a troca de valores no display
function transfereValor(num){
  display1.value += display2.value + num
  display2.value = '' 
}
//Reseta todos os valores
function resetar() {
  display2.value = ''
  display1.value = ''
} 

//Seleciono todos os botoes 
const num = document.querySelectorAll('.btn, .btnIgual')
//Seleciono todos os operadores
const operadores = document.querySelectorAll('#operador')
//Seleciono os displays
var display2 = document.querySelector('.display2')
var display1 = document.querySelector('.display1')

//percorro o Array num (botoes)
num.forEach(botao => {
    botao.addEventListener('click', calculadora)
});

//Pego o valor do botão pressionado
function calculadora(event) {
    var botaoValue = event.target.value
    inserirValorTela(botaoValue)   
}

//insiro o valor do botao na tela
function inserirValorTela(num) {
    var valor = num
    if (valor === '/' || valor === '*' || valor === '-' || valor === '+') {

        if (display1.value == '') {
          transfereValor(valor)
        } else {         
          calcular(valor)
        }

    } else if(valor === 'c') {
        resetar()
    } else if(valor === '=') {
        calcular(valor)
    } else {
        display2.value += num
    } 
}
