function mostrar()
{

let vDestino;


vDestino = document.getElementById("txtIdDestino").value;


switch (vDestino)
{
case "Cataratas":
alert ("Norte");
break;

case "Mar del plata":
alert ("Este");
break;

case "Ushuaia":
alert("Sur");
break;

default:
alert ("Oeste");
break;
}


/*
if (vDestino == "Cataratas")
{
	alert("Norte");
}
else if (vDestino == "Mar Del Plata")
{
	alert("Este");
}
else if (vDestino == "Bariloche");
{
	alert("Oeste");

}
else 
{
	alert("Sur");
}
*/
}//FIN DE LA FUNCIÓN