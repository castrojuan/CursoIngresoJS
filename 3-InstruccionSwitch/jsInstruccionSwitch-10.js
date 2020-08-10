function mostrar()
{
let vEstacion;
let vDestino;


vEstacion = document.getElementById("txtIdEstacion").value;
vDestino = document.getElementById("txtIdDestino").value;


if((vEstacion == "Invierno" && vDestino == "Bariloche") || (vEstacion == "Verano" && (vDestino == "Mar del plata" || vDestino == "Cataratas")) || (vEstacion == "Otoño") || (vEstacion == "Primavera" && vDestino != "Bariloche"))

//else if(vEstacion == "Verano" && (vDestino == "Mar del plata" || vDestino == "Cataratas"))

//else if(vEstacion == "Otoño")

//else if(vEstacion == "Primavera" || vDestino != "Bariloche")
{
	alert("Se viaja");
}
	else
	{
		alert("No se viaja");

}	
	/*
	switch (vEstacion)
	{
		case "Invierno":
		if(vDestino == "Bariloche")
        {
			alert ("se Viaja");
		}
		else
		{
			alert("No se viaja");
		}
		break;

		case "Verano":
		if(vDestino != "Mar del plata" && vDestino != "Cataratas")
			{alert("No se viaja");
	}
	else
	{
		alert("Se viaja");
	}
	break;


case "Primavera":

if(vDestino == "Bariloche")
{
	alert("No se viaja");
	}
	else
	{
		alert("Se viaja");
	}
	break;

	default:
	{
		alert("se viaja");
	}
}
*/

}//FIN DE LA FUNCIÓN