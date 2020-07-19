/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var vDividendo;
	var vDivisor;
	var vResult;

	vDividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	vDivisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	vResult = vDividendo % vDivisor;

	alert("El resto es " + vResult);

}
