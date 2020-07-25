function mostrar()
{
	let vHora;

	vHora = parseInt(document.getElementById("txtIdHora").value);

	switch (vHora)
{
	//case (>=7 && <=11):
	case (7):
	case (8):
	case (9):
	case (10):
	case (11):
	alert ("es de mañana");
	break;

	//case (>=12 && <=19):
	case (12):
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


}//FIN DE LA FUNCIÓN