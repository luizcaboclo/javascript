let firenheit, celsius

firenheit = prompt("quanto quer em celsius ");

function converter(firenheit){
    celsius = (firenheit-32) * 5/9
    return alert("sua temperetura em celsius é" + celsius + "°");
}
 converter(firenheit);