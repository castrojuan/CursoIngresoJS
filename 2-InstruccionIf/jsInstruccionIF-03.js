function mostrar()
{
		let vEdad;

vEdad = parseInt(document.getElementById("txtIdEdad").value);

if (vEdad >= 18)
{
	alert("mayor de edad");
}
else 
{
	alert("menor de edad");
}

}