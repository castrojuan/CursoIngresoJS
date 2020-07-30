function mostrar()
{
let vEstacion;
let vDestino;
const vEstadia = 15000
let vPrecioFinal;


vEstacion = document.getElementById("txtIdEstacion").value;
vDestino = document.getElementById("txtIdDestino").value;
	
switch (vEstacion)

{

case "Invierno" :

if ( vDestino == "Bariloche")
{
	alert(vEstadia + (vEstadia * 0.20));

}

else if ( vDestino == "Mar del plata")
{
	alert(vEstadia - (vEstadia * 0.20));
}

else
		{
			alert(vEstadia - (vEstadia * 0.10));
	}
break;

case "Verano":

if (vDestino == "Bariloche")
{
	alert(vEstadia - (vEstadia * 0.20));
}
else if (vDestino == "Mar del plata")
{
	alert(vEstadia + (vEstadia * 0.20));
}
else 

	{
		alert(vEstadia + (vEstadia * 0.10));
		}
break;


case "Otoño":

 if (vDestino == "Cordoba")
{
	alert(vEstadia)
}
else

	{
		alert(vEstadia + (vEstadia * 0.10));
}
break;


}

}//FIN DE LA FUNCIÓN