function mostrar()
{

let numA;
let numB;
let resto;
let suma;
let resta;

numA=parseFloat(prompt("ingrese un numero"));
numB=parseFloat(prompt("ingrese un numero"));


//Si son iguales los muestro el cuadrado del numero.
if(numA==numB)
{
 alert("el cuadrado es igual a: " + parseFloat(numA * numB));
}

if(numA%numB == 0)
 {
 alert("la resta es igual a: " + parseFloat(numA - numB));
 }

if(numA%numB != 0)
 {
 alert("el resto es: " + parseFloat(numA%numB));
 }
if(numA%numB >= 3)
{
alert("el resto es mayor a 3");
}

/*Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert.*/

}
