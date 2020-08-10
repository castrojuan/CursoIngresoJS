/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	let Num;
	let i = 0;
	let Acumulador = 0;
	let respuesta = "si"


    while(respuesta == "si")
    {
    	Num= parseInt(prompt("ingrese un numero"));
    	Acumulador = Acumulador + Num
    	i++
    
    	respuesta = prompt("ingresa otro numero?");
    }


document.getElementById("txtIdSuma").value = Acumulador;
document.getElementById("txtIdPromedio").value = Acumulador/i;


}//FIN DE LA FUNCIÓN