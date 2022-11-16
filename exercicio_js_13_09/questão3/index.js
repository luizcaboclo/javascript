let num = 0.0, soma = 0.0, media, total = 0.0;

    while(num >= 0){
        num = prompt("Digite o numero: ");

       if(num >= 0){
          soma = parseInt(soma) + parseInt(num)
          total++ 
      }
    }

    media = soma / total;

   alert("Soma de todos numeros digitados: " + soma);
   alert("Media de todos numeros digitados: " + media);
   alert("Total de numeros digitados: " + total);


