/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	const Precio = 35;
 	let Cantidad;
 	let Marca;
 	let Descuento;
 	let ImporteFinal;
 	let IiBb;
    let PrecioDescuento;


Cantidad = parseInt(document.getElementById("txtIdCantidad").value);
Marca = document.getElementById("Marca").value;

switch (Cantidad)      
{
	case (1):
	case (2):
	Descuento = 0;
	break;

	case (3):     
	if (Marca == "ArgentinaLuz")
		{
			Descuento = 15;
		}
	else if ( Marca == "FelipeLamparas")
		{ 
			Descuento = 10;
		}
		else
			{Descuento = 5;
			}
			break;

	case (4):
	if (Marca == "ArgentinaLuz" || Marca == "FelipeLamparas")
		{
			Descuento = 25;
		}

	else 
		{
			Descuento = 20;
		}

	break;

	case (5):
	if (Marca == "ArgentinaLuz")
		{
			Descuento = 40;
		}
	else
		{
			Descuento = 30;
		}
break;

 default :
Descuento = 50

}

PrecioDescuento = Precio - Precio * Descuento / 100;

document.getElementById("txtIdprecioDescuento").value = PrecioDescuento;

ImporteFinal = PrecioDescuento * Cantidad;
if (ImporteFinal > 120)
{
	IiBb = ImporteFinal * 0.1;
	ImporteFinal = ImporteFinal + IiBb;

alert ("Usted pago " + ImporteFinal + " siendo " + IiBb + " el impuesto que se pago");


}

	else
	alert ("Pecio final " + ImporteFinal)		

}
