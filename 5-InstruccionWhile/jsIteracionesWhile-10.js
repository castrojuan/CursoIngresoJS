/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let contadorNegativo=0;
	let contadorCero=0;
	let contadorpositivo=0;
	let sumapositivos;


	respuesta='s';

do
	{
      numeroIngresado = parseInt(prompt("ingrese un numero"));

	if(numeroIngresado <= 0)
	{
		sumaNegativos = sumaNegativos + numeroIngresado;
		contadorNegativo++;
	}

	else if(numeroIngresado > 0)

{
	sumapositivos = sumapositivos + numeroIngresado;
    contadorpositivo++;
}


  else if(numeroIngresado == 0)

	{
		contadorCero++;
	}

	respuesta=prompt("desea continuar?");

	} while(respuesta=='s');   //fin del while




document.write("el promedio de negativos es :" + sumaNegativos / contadorNegativo);

document.write("la suma de negativos es :"+sumaNegativos);

document.write("la cantidad de positivos" + contadorpositivo);

document.write("la cantidad de negativos" + contadorNegativo);


document.write("Promedio de positivos:" + sumapositivos / contadorpositivo);

document.write("la suma de positivos es :"+sumapositivos);

document.write("cantidad de ceros :" + contadorCero);

document.write(" cantidad de  numeros pares :" );

document.write(" Diferencia entre positivos y negativos "+ sumaNegativos + sumaNegativos);












}//FIN DE LA FUNCIÓN