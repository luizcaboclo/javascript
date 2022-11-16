let celsius, firenheit
celsius = prompt ("quanto quer em firenheit ")
 
function converter(celsius){
    firenheit = (celsius* 9/5) + 32
    return alert("temperatura em firenheit é " + firenheit +"°")
}
converter(celsius)