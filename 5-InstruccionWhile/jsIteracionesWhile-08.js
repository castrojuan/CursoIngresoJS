/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{ 
let numero;
let positivos = 0;
let negativos = 1;
let respuesta;
let contadorneg = 0

do
{
	numero = parseInt(prompt("ingrese un numero "));
     if(numero >= 0)
     {
     	positivos = positivos + numero;
     }
     else
     {
     	contadorneg++;
     	negativos = negativos * numero;
     }

	respuesta = prompt("Desea ingresar otro numero? ")
}while(respuesta == 's');

if (contadorneg == 0)
	{negativos = 0};
document.getElementById("txtIdSuma").value = positivos
document.getElementById("txtIdProducto").value = negativos

}//FIN DE LA FUNCIÓN