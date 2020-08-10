function mostrar()
{

let Continente;
let Dias;
let Estadia = 100;
let Metodopago;


Continente = document.getElementById("Marca").value;
Dias = prompt("cuantos dias quiere reservar?");
do
{
Metodopago = prompt("que metodo de pago desea usar")
}while(Metodopago != "debito" && Metodopago !="mercadoPago" && Metodopago !="efectivo")

switch(Continente)
{

case "América":


if(Metodopago == "debito")
 {
 	alert((Estadia - Estadia * 0.60) * Dias);
 }
 else
 {
 	alert((Estadia - Estadia * 0.50) * Dias);
 }
 break;

 case "África":

  if(Metodopago == "efectivo" || Metodopago =="mercadoPago")
 {
 	alert((Estadia - Estadia * 0.75) * Dias);
 }
 else
 {
 	alert((Estadia - Estadia * 0.60) * Dias);
 }
 break;

 case "Europa":
 
if(Metodopago == "debito")
 {
 	alert((Estadia - Estadia * 0.35) * Dias);
 }
   else if(Metodopago == "mercadoPago")
   	{
 	alert((Estadia - Estadia * 0.30) * Dias);
 }
  else if(Metodopago == "efectivo")
  {
  	alert((Estadia - Estadia * 0.25) * Dias);
  }
  else
  {
  	alert((Estadia - Estadia * 0.20) * Dias);
  }

 break;

 default:
 {
  	alert((Estadia + Estadia * 0.20) * Dias);
  }

}







}
