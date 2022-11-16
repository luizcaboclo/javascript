let  sal, qf, medSal = 0, medF = 0, maiorS = 0 , percS = 0.0 

for(i = 1;  i<= 3; i ++){
    sal =prompt("diga seu salário")
    qf = prompt("quantos filhos você tem ?")
    medSal = medSal + sal
    medF = medF + qf
    if(sal > maiorS){
        maiorS = sal
    }
    if(sal <= 100){
        percS++
    }
}
alert("qual o maior salário " + maiorS)
alert("media de salário é " + medSal / 3)
alert("media de filhos é " + medF / 3)
alert("percentual de pessoas com salário até R$ 100 :" + (percS/20)* 100 +"%")

