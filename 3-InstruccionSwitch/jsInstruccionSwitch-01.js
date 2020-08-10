function mostrar()
{

let Mes;

Mes = document.getElementById("txtIdMes").value;

switch(Mes)
{ 
	case "Enero":
	{
		alert("Que comiences bien el año");
	}
		break;

	case "Marzo":
	{
		alert("A Clases!!");
	}	
	break;

	case "Julio":
	{
		alert("Se vienen las vacaciones!!!");
	}
	break;
	case "Diciembre":
	{
		alert("Felices Fiestas!!!");
	}
	break;

	default:
	{
		alert("");
	}
	break;


}



}//FIN DE LA FUNCIÓN