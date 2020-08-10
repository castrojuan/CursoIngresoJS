
let num;
let i;
let numeroSecreto;
let Maximo = 100;
let Minimo = 1;
let intentos= 0;


function comenzar()
{
	
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

	if(num == numeroSecreto)
	{
		alert("Felicitaciones, usted es el ganador !!, y en solo " + intentos + " intentos");
	}
	
}
