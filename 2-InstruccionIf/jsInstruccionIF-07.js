function mostrar()
{
	let vEdad;
	let vEstadoCivil;

	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	vEstadoCivil = document.getElementById("estadoCivil").value;

	if(vEdad <18 && vEstadoCivil != "Soltero")

{ 
		alert("Es muy pequeño para NO ser soltero");
}



}//FIN DE LA FUNCIÓN