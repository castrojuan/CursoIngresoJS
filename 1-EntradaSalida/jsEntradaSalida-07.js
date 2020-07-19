/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var vNumUno;
	var vNumDos;
	var vResult;

	vNumUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNumDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	vResult = vNumUno + vNumDos;

	alert("la suma es " + vResult);

function restar()
{
	var vNumUno;
	var vNumDos;
	var vResult;

	vNumUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNumDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	vResult = vNumUno - vNumDos;

	alert("la resta es " + vResult);


}

function multiplicar()
{ 
	var vNumUno;
	var vNumDos;
	var vResult;

	vNumUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNumDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	vResult = vNumUno * vNumDos;

	alert("el producto es " + vResult);
}

function dividir()
{
	var vNumUno;
	var vNumDos;
	var vResult;

	vNumUno = parseFloat(document.getElementById("txtIdNumeroUno").value);
	vNumDos = parseFloat(document.getElementById("txtIdNumeroDos").value);
	vResult = vNumUno / vNumDos;

	alert("el cociente es " + vResult.toFixed(2));
}

