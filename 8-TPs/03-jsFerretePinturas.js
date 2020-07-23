/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let vTemperatura;
	let vResult;

	vTemperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
	vResult = (vTemperatura - 32) * 5 / 9; 
	alert (vResult);
}

function CentigradosFahrenheit () 
{
	let vTemperatura;
	let vResult;

	vTemperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
	vResult = (vTemperatura * 9 / 5 + 32); 
	alert ((vResult).toFixed(2));
}
