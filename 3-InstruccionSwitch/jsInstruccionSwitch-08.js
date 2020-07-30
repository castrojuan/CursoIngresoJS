function mostrar()
{
	
let vDestino;


vDestino = document.getElementById("txtIdDestino").value;


switch ( vDestino )
{
case "Cataratas":
case "Mar del plata":
alert ("Calor");
break;

case "Ushuaia":
case "Bariloche":
alert ("Frio");
break;

default:
alert ("no es valido");
break

}

}//FIN DE LA FUNCIÓN