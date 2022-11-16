let peso, altura, imc
peso = prompt("diga seu peso ")
altura = prompt("diga sua altura ")

function saude(imc){
imc = peso / (altura * altura)
return alert("seu indice de massa corporal é " + imc)
}
saude(imc)