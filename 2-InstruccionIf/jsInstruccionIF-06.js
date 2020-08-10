function mostrar()
{
let vEdad;

vEdad = parseInt(document.getElementById("txtIdEdad").value);

if (vEdad > 18)
{
	alert("mayor de edad");
}
else if (vEdad >=13 && vEdad <=17)

{
	alert("adolescente");

}
else 
	
	{alert ("niño");
}
}

