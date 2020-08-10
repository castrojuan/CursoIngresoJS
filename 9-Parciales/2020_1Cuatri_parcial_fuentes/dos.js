function mostrar()
{
  let Tipo;
  let Precio;
  let PrecioMax;
  let NombrePrecioMax;
  let CantidadMax;
  let NombreCantidadMax;
  let Respuesta = "s";
  let Cantidad;
  let AcumArena = 0;
  let AcumCal = 0;
  let AcumCemento = 0;
  let Flag = 0;
  



do
{

  do{
  	Tipo = prompt("Ingrese un producto (arena , cal, cemento) ");
}while(Tipo !="arena" && Tipo !="cal" && Tipo !="cemento");
   
do{
	Precio = parseInt(prompt("Ingrese el precio"));
}while(Precio <= 0);


Cantidad = parseInt(prompt("Ingrese la cantidad"));


switch(Tipo)
{
case "arena":
 AcumArena = AcumArena + Cantidad;
 break;

 case "cemento":
  AcumCemento = AcumCemento + Cantidad;

break;

default:
AcumCal = AcumCal + Cantidad;
break;
}  


//   el tipo con mas cantidad de bolsas.

if(AcumArena > AcumCal && AcumArena > AcumCemento)
{
  NombreCantidadMax = "arena";
}
else if(AcumCal > AcumArena && AcumCal > AcumCemento)
{
  NombreCantidadMax = "cal";
}
else
{
  NombreCantidadMax = "cemento";
}


if(Flag=0 || PrecioMax < Precio)
{
  PrecioMax = Precio;
  NombrePrecioMax = Tipo;
  Flag=1;
}

if(Cantidad > 9 && Cantidad < 30)
{
  Precio = Precio - (Precio * 0.15) * Cantidad;
}
else if(Cantidad >= 30)
{
  Precio = Precio - (Precio * 0.25) * Cantidad;
}
 

Respuesta = prompt("desea agregar otro producto? ");

}while(Respuesta == "s");



alert("El importe total a pagar , bruto sin descuento es " + Precio * Cantidad);

alert("El importe total a pagar , bruto sin descuento es " + Precio * Cantidad - Precio * Cantidad * 0.15);

alert("el tipo con mas cantidad de bolsas es " + NombreCantidadMax);

alert("el tipo mas caro es " + NombrePrecioMax);








/*

function mostrar() {
  let tipo;
  let cantidad;
  let precio;
  let dto;
  let acumCantidad = 0;
  let precioBruto = 0;
  let preciodto;
  let aArena = 0;
  let aCal = 0;
  let aCem = 0;
  let flag = 0;
  let mayorTipo;
  let tipoCaro;
  let precioCaro;
  respuesta = "s";
  do {
    do {
      tipo = prompt("Ingrese tipo: ");
    } while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento"));
    cantidad = parseInt(prompt("Ingrese cantidad de bolsas: "));
    do {
      precio = parseInt(prompt("Ingrese precio: "));
    } while (precio <= 0)
    respuesta = prompt("Desea continuar? s/n");

    acumCantidad = acumCantidad + cantidad;
    precioBruto = (precio * cantidad) + precioBruto;
    switch (tipo) {
      case "arena":
        aArena = aArena + cantidad;
        break;
      case "cal":
        aCal = aCal + cantidad;
        break;
      case "cemento":
        aCem = aCem + cantidad;
        break;

    }
    if (flag == 0 || precio>  precioCaro) {
      precioCaro = precio ;
      tipoCaro = tipo ;
      flag = 1;
   
    }
  } while (respuesta == "s");

  if (acumCantidad >= 10 && acumCantidad < 30) {
    dto = 0.85;
  } else if (acumCantidad >= 30) {
    dto = 0.75;
  } else {
    dto = 1
  }

  if (aArena>aCal && aArena>aCem) {
    mayorTipo = "Arena";
  } else if (aCal>=aArena && aCal>aCem ) {
    mayorTipo = "Cal";
  } else {
    mayorTipo = "Cemento";
  }
  alert(tipoCaro);
  alert(precioBruto);
  alert((precioBruto*dto)) 
  alert(mayorTipo);
}
*/

}
