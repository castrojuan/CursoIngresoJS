
function mostrar()
{
let CantJabon;
let ContadorJabon = 0;
let MinAlcohol;
let CantMinAlc;
let MinFabric;
let Tipo;
let Precio;
let Cantidad;
let Max;
let Promedio;
let flagalc = 0;
let ContadorAlc;

for(let i=0 ;i<5 ; i++)

do
{
	
Tipo = prompt("ingrese el tipo de producto");

}while(Tipo != "barbijo" && Tipo != "jabon" && Tipo !="alcohol");


do
{
	Precio = parseInt(prompt("Ingrese el precio"));
}while(Precio >299 && Precio ==300);



do
{
	Cantidad = parseInt(prompt("Ingrese la cantidad"));
}while(Cantidad >0 && Cantidad <1001);





}
