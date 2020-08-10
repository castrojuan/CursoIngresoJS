function mostrar()
{

let num;
let cont=0;

num = parseInt(prompt("ingrese la cantidad de numeros"));

for(let i = 0 ; i<num ; i++)
{
	if(i%2 == 0)
	{
		alert("el numero " + i + " es par");
		cont++;
	}
}

alert("se encontraron " + cont + " numeros par");

}//FIN DE LA FUNCIÓN