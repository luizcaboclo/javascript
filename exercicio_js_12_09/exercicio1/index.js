let pesoTomates, excesso, multa = 4, limite = 50
    
pesoTomate = prompt("quantos quilos de tomate ?");


if(pesoTomate > limite){
    excesso = pesoTomate - limite
    multa = excesso * 4

    alert("você pagará multa de " + multa);
}
    else{ alert("você não ultrapassou o limite de peso");

    }




