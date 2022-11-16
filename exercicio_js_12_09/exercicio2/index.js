let cod, numH, sal, exc = 0.0, salExc = 0.0;
        
		cod = prompt("qual seu codigo do trabalho:")
        numH = prompt("digite horas trabalhadas")
        sal = nnumH * 10;
        if(numH > 50){
            exc = numH - 50
            salExc = sal + (exc * 20);
            alert("seu salrário é R$" + sal)
            alert("seu salário excedente é R$" + salExc)
        }

        