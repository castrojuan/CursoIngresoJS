function mostrar()
{
	
	let Num;
	let i = 0;
	let Acumulador = 0;
	let Promedio;


    do
    {
    	Num= parseInt(prompt("ingrese un numero"));
    	Acumulador = Acumulador + Num
    	i++
    }while(i<5)

Promedio= Acumulador/5;

document.getElementById("txtIdSuma").value = Acumulador;
document.getElementById("txtIdPromedio").value = Promedio;










	/*var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;*/
}//FIN DE LA FUNCIÓN