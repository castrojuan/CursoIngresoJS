/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()

{	

	//declaro variables
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let flag = 0

//hasta que el usuario quiera
do
{

numeroIngresado = parseInt(prompt("ingrese un numero"));

if(flag == 0)
{
	numeroMaximo = numeroIngresado;
	numeroMinimo = numeroIngresado;
	flag = 1
}

if(numeroIngresado > numeroMaximo)
	{
		numeroMaximo = numeroIngresado;
	}
else if(numeroIngresado < numeroMinimo)
	{
		numeroMinimo = numeroIngresado;
	}

respuesta = prompt("Desea agregar otro numero? ");

}while( respuesta == 'si');


document.getElementById("txtIdMaximo").value = numeroMaximo;
document.getElementById("txtIdMinimo").value = numeroMinimo;


/*// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;*/
}//FIN DE LA FUNCIÓN