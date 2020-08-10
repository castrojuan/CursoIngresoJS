function mostrar()
{
	let Nombre;
	let Edad;
	let Sexo;
    let EstadoCivil;
    let Temperatura;
    let TempMax;
    let NombreTempMax;
    
    let ContadorViudosMayor = 0;
    let Respuesta = "s";
    let flag = 0;
    let ContadorV = 0;
    let ContadorTerceraEdad = 0;
    
    let conthombresolt = 0;
    let contVhombres = 0;
    let acumuladorhombreSolt = 0;


do
{

Nombre = prompt("ingrese Nombre");

Edad = parseInt(prompt("ingrese su edad"));

do{
  	Sexo = prompt ("ingrese su sexo f / m ");	
  }while(Sexo !="f" && Sexo !="m");

do{
	EstadoCivil = prompt("ingrese su estado civil");
}while(EstadoCivil != "soltero" && EstadoCivil !="casado" && EstadoCivil !="viudo");


if(Sexo == "m")

{

	if(EstadoCivil == "soltero")
{

	conthombresolt++;
	acumuladorhombreSolt = acumuladorhombreSolt + Edad;
}

	else if(EstadoCivil == "viudo");
	{
	contVhombres++;
}
} 


Temperatura = parseInt(prompt("ingrese temperatura corporal"));

if(flag== 0 || TempMax < Temperatura)
{
TempMax=Temperatura;
NombreTempMax=Nombre;
flag=1;
}


if(Edad >59 && Temperatura > 37)
{
	ContadorTerceraEdad++;
}

Respuesta = prompt("desea agregar otro pasajero ? : s / n ");

}while(Respuesta == "s");



alert("El nombre de la persona con mas temperatura es " + NombreTempMax);

+("hay " + ContadorViudosMayor + " mayores de edad qu estan viudos");

+("La cantidad de hombres que hay solteros o viudos es " + conthombresolt + " o " + contVhombres);

+("Hay " + ContadorTerceraEdad + " personas de la tercera edad que tienen mas de 38 de temperatura");

+parseInt(" El promedio de edad entre los hombres solteros es de " + acumuladorhombreSolt/conthombresolt);


}







