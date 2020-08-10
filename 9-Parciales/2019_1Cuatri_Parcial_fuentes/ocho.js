function mostrar()
{

let letra;
let num;
let respuesta ="s";
let contadorpares=0;
let contadorimpares =0;
let contadorcero=0;
let contadorpositivo=0;
let acumpositivos=0;
let acumuladorneg =0;
let flag= 0;
let min;
let max;
let letramax;
let letramin;




do
{
 letra = prompt("ingrese un caracter");

 do{
 	num = parseInt(prompt("ingrese un numero"));
 }while(!(num >= -100 && num <=100));


    if(num == 0)

	{
		contadorcero++;

    }


     else if(num > 0)

{
	acumpositivos = acumpositivos + num;
    contadorpositivo++;

}	


else if(num < 0)
 {
 	acumuladorneg = acumuladorneg + num;
 }



if(flag==0)

	min=num;
    letramin=letra;
    max=num;
    letramax=letra;
    flag=1;


    if(num > max)
	{
		max = num;
		letramin=letra;
	}
else if(num < min)
	{
		min = num;
		letramax = letra;
	}


  

  if(num%2 == 0)
	{
		contadorpares++;
	}

	else
	{
		contadorimpares++;
	}




respuesta= prompt("desea agregar mas datos? ");

}while(respuesta =="s");


alert("La cantidad de números pares es " + contadorpares);
alert(" La cantidad de números impares " + contadorimpares);
alert(" La cantidad de ceros es " + contadorcero);
alert(" El promedio de todos los números positivos ingresados " + acumpositivos/contadorpositivo;
alert(" La suma de todos los números negativos es " + acumuladorneg);
alert(" El número y la letra del máximo son :" + max +"  "+ letramax + " El número y la letra del minimo son : " + min +"  "+ letramin);




}



