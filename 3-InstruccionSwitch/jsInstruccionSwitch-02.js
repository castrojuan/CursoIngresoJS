function mostrar()
{

	let vMes;

	vMes = document.getElementById("txtIdMes").value;

	switch(vMes)

{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
    case "Mayo":
    case "Junio":
alert ("falta para el invierno");
    break;


	case "Julio":
	case "Agosto":

alert("abrigate que hace frio");
	break;

	default:
alert("ya pasamos el frio, ahora calor");
	
}

	




}//FIN DE LA FUNCIÓN