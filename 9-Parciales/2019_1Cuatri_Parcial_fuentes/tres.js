function mostrar()
{
let Precio;
let Porcentaje;
let Preciofinal;


Precio = prompt("ingrese un precio");
Porcentaje = prompt("ingrese el porcentaje de descuento")



Preciofinal = Precio - (Precio * Porcentaje / 100);

document.getElementById("elPrecioFinal").value = Preciofinal;


}
