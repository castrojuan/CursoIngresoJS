/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let num;
let numeroSecreto;
let Maximo = 100;
let Minimo = 1;
let intentos= 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	numeroSecreto = Math.round(Math.random() * (Maximo - Minimo) + Minimo);
	
	
alert("adivina el numero secreto entre el 1 y el 100 ");


}

function verificar()
{
	
	num = parseInt(document.getElementById("txtIdNumero").value);
	intentos++;

	
	if(num > numeroSecreto)
	{
		alert("se pasó del numero secreto ");
	}

else if(num < numeroSecreto)
{
	alert("falta para llegar al numero secreto");
}

	if(num == numeroSecreto && intentos == 1)
	{
		alert("usted es un Psíquico");
}

if(num == numeroSecreto && intentos == 2)
	{
		alert("excelente percepción");
}

if(num == numeroSecreto && intentos == 3)
	{
		alert("Esto es suerte");
}

if(num == numeroSecreto && intentos == 4)
	{
		alert("Excelente técnica");
}
if(num == numeroSecreto && intentos == 5)
	{
		alert("usted está en la media");
}

if(num == numeroSecreto && intentos >= 6 && intentos <=10)
	{
		alert("falta técnica");
}

if(num == numeroSecreto && intentos > 10)
	{
		alert("afortunado en el amor!!");
}
}