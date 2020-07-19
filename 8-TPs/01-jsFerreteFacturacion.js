/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	/*declaro las variables*/
	var vProductoUno;
	var vProductoDos;
	var vProductoTres;

	// asigno valores
vProductoUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
vProductoDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
vProductoTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

// resultado de la suma
alert(vProductoUno + vProductoDos + vProductoTres)
}


function Promedio () 
{
	var vProductoUno;
	var vProductoDos;
	var vProductoTres;
	var vPromedio;

	vProductoUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
vProductoDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
vProductoTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
vPromedio = (vProductoUno + vProductoDos + vProductoTres ) / 3;
alert(vPromedio.toFixed(2));

}
function PrecioFinal () 
{
	/*declaro las variables*/
	var vProductoUno;
	var vProductoDos;
	var vProductoTres;
	var vPrecioFinal

	// asigno valores
vProductoUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
vProductoDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
vProductoTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
vPrecioFinal = (vProductoUno + vProductoDos + vProductoTres);

alert(vPrecioFinal + vPrecioFinal * 0.21);
}



