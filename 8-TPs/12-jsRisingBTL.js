/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
    let sueldoBruto;
    let legajo;
    let nacionalidad;



    do{
    edadIngresada=prompt("ingrese su edad");
    }while(edadIngresada<18 && edadIngresada>90);


    do{
    sexoIngresado=prompt("sexo M / F");
    }while(sexoIngresado != "M" && sexoIngresado != "F");

    do{
    estadoCivil=prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
    }while(estadoCivil <1 && estadoCivil >4);

    do{
    sueldoBruto=prompt("Sueldo bruto");
    }while(sueldoBruto<8000);

    do{
    legajo=prompt(" Número de legajo, numérico de 4 cifras, sin ceros a la izquierda");
    }while(legajo<1000 && legajo>9999);

    do{
    nacionalidad= prompt("Nacionalidad, A para argentinos, E para extranjeros, N para nacionalizados.");
    }while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N");



   document.getElementById("txtIdEdad").value =edadIngresada;
   document.getElementById("txtIdSexo").value =sexoIngresado;
   document.getElementById("txtIdEstadoCivil").value =estadoCivil;
   document.getElementById("txtIdSueldo").value =sueldoBruto;
   document.getElementById("txtIdLegajo").value =legajo;
   document.getElementById("txtIdNacionalidad").value =nacionalidad;


}