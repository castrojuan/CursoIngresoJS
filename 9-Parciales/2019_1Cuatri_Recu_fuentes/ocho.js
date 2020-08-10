function mostrar()
{
let respuesta='s';
let color;
let valor;
let contadorrojo=0;
let contadormin=0;
let contadormax=0;
let contadorrojomax=0;
let acumvehiculo=0;
let contadortotal=0;
let colormax;
let preciomax;
let flag=0;

do
{

do{
color=prompt("ingrese el color");
}while(color!="rojo" && color!="verde" && color!="amarillo");


do{
	valor=parseInt(prompt("ingrese su valor"));
}while(valor<0 || valor>10000);


contadortotal++;
acumvehiculo = acumvehiculo + valor;

if(color=="rojo")

	{ if(valor>5000)
		{
         contadorrojomax++;
        } 

		contadorrojo++;
	}   
           

if(valor<5000)
{
	contadormin++;
}

if(flag==0 || preciomax<valor)
{
	preciomax=valor;
	colormax=color;
	flag=1;
}

respuesta=prompt("desea agregar mas datos?");

}while(respuesta =='s');


alert("La cantida de vehiculos rojos es: " + contadorrojo);
alert("La cantidad de rojos con precio mayor a 5000 es: " + contadorrojomax);
alert("La cantidad de vehiculos con precio inferior a 5000 es: " + contadormin);
alert("El promedio de todos los vehiculos ingresados es: " + parseInt(acumvehiculo/contadortotal));
alert("El mas caro y su color " + preciomax + colormax);


}
