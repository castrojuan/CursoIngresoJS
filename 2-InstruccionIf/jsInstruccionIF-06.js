function mostrar()
{
let vEdad;

vEdad = parseInt(document.getElementById("txtIdEdad").value);

if (vEdad > 18)
{
	alert("mayor de edad");
}
if (vEdad >=13 && vEdad <=17)

{
	alert("adolescente");

}
if (vEdad < 13)
	
	{alert ("niño");
}
}

