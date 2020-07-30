function mostrar()
{
	let vHora;

	vHora = parseInt(document.getElementById("txtIdHora").value);


if(vHora >=7 && vHora <=11)
	{alert("es de mañana");
}
else if(vHora >=12 && vHora <=19)
	{alert("es de tarde");
}
else if((vHora >=0 && vHora <=6) || (vHora >=19 && vHora <=24))
	{
		alert("es de noche");
}
/*	switch (vHora)
{
	//case (>=7 && <=11):
	case (7):
	case (8):
	case (9):
	case (10):
	case (11):
	alert ("es de mañana");
	break;

	//case git(>=12 && <=19):
	case 12:
	case (13):
	case (14):
	case (15):
	case (16):
	case (17):
	case (18):
	case (19):
	alert("es de tarde");
	break;

  //case (>=0 && <=6):
	case (20):
	case (24):
	case (0):
	case (1):
	case (2):
	case (3):
	case (4):
	case (5):
	case (6):
	alert("es de noche");
	break;

//case (>24):
	default:
	alert("la hora no existe");
	break;
}

*/
}//FIN DE LA FUNCIÓN