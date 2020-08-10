function mostrar()
{

let num;
let cont=0;

num = parseInt(prompt("ingrese la cantidad de numeros"));

for(let i = 0 ; i<num ; i++)
{
	if(num%i == 0)
	{
		alert("el numero " + i + " es dividendo de " + num);
		cont++;
	}
}

alert("se encontraron " + cont + " numeros dividendos");

}//FIN DE LA FUNCIÓN