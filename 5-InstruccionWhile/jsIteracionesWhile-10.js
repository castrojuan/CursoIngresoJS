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
	let numero;
	let positivos;
	let negativos;
	let acumuladorPositivos=0;
	let contadorPositivos=0;
	let acumuladorNegativos=0;
	let contadorNegativos=0;
	let contadorCeros=0;
	let contadorPares=0;
	let respuesta='s';
	let promedioPositivo;
	let promedioNegativo;


	do
	{
		numero=parseInt(prompt("ingrese un numero"));
	
        
        if(numero>0)
        {
        	contadorPositivos++;
        	acumuladorPositivos=acumuladorPositivos+numero;
        }

        else if(numero==0)
        {
        	contadorCeros++;
        	
        }
        
        else
        {
        	contadorNegativos++;
        	acumuladorNegativos=acumuladorNegativos+numero;
        }

        if(numero%2==0)
        {
        	contadorPares++;
        }



     respuesta=prompt("desea agregar mas numeros? ");

	}while(respuesta=='s');
	
promedioPositivo=acumuladorPositivos/contadorPositivos;
promedioNegativo=acumuladorNegativos/contadorNegativos;

console.log("Suma de los negativos es " + acumuladorNegativos);
console.log("Suma de los positivos " + acumuladorPositivos);
console.log("Cantidad de positivos "+ contadorPositivos);
console.log("Cantidad de negativos " + contadorNegativos);
console.log("Cantidad de ceros " + contadorCeros);
console.log("Cantidad de números pares " + contadorPares);
console.log("Promedio de positivos " + promedioPositivo.toFixed(2));
console.log("Promedios de negativos " + promedioNegativo.toFixed(2));
console.log("Diferencia entre positivos y negativos "+ (acumuladorPositivos - acumuladorNegativos));

}//FIN DE LA FUNCIÓN