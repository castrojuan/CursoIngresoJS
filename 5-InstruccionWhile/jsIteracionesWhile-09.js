/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()

{	

let numero;
let numeroMaximo;
let numeroMinimo;
let bandera=0;
let respuesta='s';

	do
	{

	numero=parseInt(prompt("ingrese un numero"));

	while(bandera==0)
	{
		numeroMinimo=numero;
		numeroMaximo=numero;
		bandera=1;
	}


	if(numeroMaximo<numero)
	{
		numeroMaximo=numero;
	}

	else if(numeroMinimo>numero)
	{
		numeroMinimo=numero;
	}

	respuesta=prompt("desea agregar un numero?");


	}while(respuesta=='s');


document.getElementById("txtIdMinimo").value=numeroMinimo;
document.getElementById("txtIdMaximo").value=numeroMaximo;

}