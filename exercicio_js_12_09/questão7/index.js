let altura, base, area

altura = prompt("fale o valor da altura");
base = prompt("fale o valor para base");
if(altura > 0 && base > 0){
    area = base * altura / 2
    alert("a área do triângulo é" + area);
}else{
    alert("você conseguiu")
}