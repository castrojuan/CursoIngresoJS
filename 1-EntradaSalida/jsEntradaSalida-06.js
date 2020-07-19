/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	ar vNumUno;
	var vNumDos;
	var vResult;

	vNumUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNumDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	vResult = vNumUno + vNumDos;

	alert("la suma da " + vResult);
}

