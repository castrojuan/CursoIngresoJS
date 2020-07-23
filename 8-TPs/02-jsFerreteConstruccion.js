/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var vLargo
var vAncho
var vPerimetro

vLargo = parseFloat(document.getElementById("txtIdLargo").value);
vAncho = parseFloat(document.getElementById("txtIdAncho").value);
vPerimetro = (vLargo + vAncho) * 2;

alert("la cantidad de alambre requerida es " + vPerimetro * 3);

}
function Circulo () 
{
var vCirculo;
	var vRadio;
	var vPi;
	vPi = 3.14;
    vCirculo = parseFloat(document.getElementById("txtIdRadio").value);
    vRadio = ((vCirculo * vCirculo ) * vPi) * 3;

    alert("la cantidad de alambre requerida es de " + vRadio );	
}
function Materiales () 
{
	
	var vBase
	var vAltura
	var vArea
	var vCemento
    var vCal

	vBase = parseInt(document.getElementById("txtIdLargo").value);
    vAltura = parseInt(document.getElementById("txtIdAncho").value);
    vArea = (vBase * vAltura) * (vBase * vAltura)
    vCemento = vArea * 2;
    vCal = vArea * 3;
    alert("se requieren " + vCemento + " bolsas de cemento y " + vCal " bolsas de cal"); 

}