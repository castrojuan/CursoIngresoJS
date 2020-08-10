function mostrar()
{

let nombre;
let edad;
let sexo;
let nota;
let respuesta='s';
let contadorvarones=0;
let contadormenores=0;
let acummenores=0;
let contadoradol=0;
let acumadol=0;
let contadormay=0;
let acummayor=0;
let contm=0;
let acumm=0;
let contf=0;
let acumf=0;






do
{

nombre = prompt("ingrese su nombre");

do
{
edad=parseInt(prompt("ingrese su edad"));
}while(edad<12 || edad>80);

do{
sexo=prompt("ingrese sexo");
}while(sexo!="m" && sexo!="f");

do{
nota=parseInt(prompt("ingrese su nota"));	
}while(nota<1 || nota>10);

if(sexo=="m" && nota>=4)
{
 contadorvarones++;
}
if(edad<18)
{
 contadormenores++;
 acummenores= acummenores+nota;	
}

if(edad>12 && edad<18)
{
	contadoradol++;
	acumadol=acumadol+nota;
}
else if(edad>18)
{
	contadormay++;
	acummayor=acummayor+nota;
}

if(sexo=="m")
{
	contm++;
	acumm=acumm+nota;
}
else if(sexo=="f")
{
	contf++;
	acumf=acumf+nota;
}

respuesta=prompt("desea agregar otro alumno? s/n ");

}while(respuesta=='s');

document.write("La cantidad de varones aprobados es: " + contadorvarones +"<br>");
document.write("El promedio de notas de los menores de edad " + acummenores/contadormenores +"<br>");
document.write("El promedio de notas de los adolescentes " + (acumadol/contadoradol) +"<br>");
document.write("El promedio de notas de los mayores es " + acummayor/contadormay.toFixed(2) +"<br>");
document.write("El promedio de notas de los varones es " + acumm/contm.toFixed(2) + " y el promedio de notas de las mujeres es " + acumf/contf.toFixed(2) + "<br>");

}
