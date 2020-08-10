function mostrar()
{

let Num1;
let Num2;

Num1 = parseInt(prompt("ingrese un numero"));
Num2 = parseInt(prompt("ingrese otro numero"))


	if(Num1 == Num2)
		{ 
         alert(Num1 + "  " + Num2);
		}

	if(Num1>Num2)
	{
		alert(Num1 - Num2);
	}
	
	if(Num1- Num2 >=10) 
	{
		alert("la resta es " + (Num1 - Num2) + " y supero el 10 ");
	}

	if(Num1<Num2)
	{
		alert(Num1 + Num2);
	}






}
