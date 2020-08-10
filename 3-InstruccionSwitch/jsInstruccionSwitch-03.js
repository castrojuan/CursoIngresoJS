function mostrar()
{
	let vMes;
	
	vMes = document.getElementById("txtIdMes").value;

	switch(vMes)
{
        case "Febrero":
{alert("este mes no tiene mas de 29 dias");	
}
        break;

        default:
        alert("este mes tiene 30 dias o mas");
}
	


}//FIN DE LA FUNCIÓN