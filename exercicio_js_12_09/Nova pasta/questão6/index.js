let x
x = prompt("diga sua idade")
console.log(x)

if(x >= 5 && x <= 7){
    alert("você é da categoria infantil A")
}else if(x >= 8 && x<= 11){
    alert("você é categoria infantil B")
}else if(x >= 12 && x<= 13){
    alert("você é da categoria juvenil A")
}else if(x >= 14 && x<= 17){
    alert("você é da categoria juvenil B")
}else if(x >= 18){
    alert("você é da categoria adulto ")
}