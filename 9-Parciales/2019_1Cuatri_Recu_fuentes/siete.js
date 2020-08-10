function mostrar()
{
let bolsa;
let kilos;
let sabor;
let liviano;
let saborliviano;
let contkilos=0;
let acumkilos=0;
let flag=0;
let acumcarne=0;
let contadorcarne=0;




for(let i=0 ; i<4 ; i++)
{
   
   do
   {
  kilos =parseInt(prompt("ingrese kilos"));
  acumkilos = acumkilos + kilos;
  }while(kilos<0 || kilos>500 || isNaN(kilos));




 do{
 	sabor=prompt("ingrese un sabor");
 }while(sabor!="carne" && sabor!="vegetales" && sabor!="pollo");

 if(flag==0 || liviano > kilos)
{
	liviano = kilos;
	saborliviano = sabor;
	flag=1;
} 

 
if(sabor == "carne")
{
    acumcarne = acumcarne + kilos;
 	contadorcarne++;

}

 

}

alert("El promedio de los kilos totales es: " + parseInt(acumkilos/4));
alert("El mas liviano pesa " + liviano + " kilos, y su sabor es " + saborliviano);
alert("La cantidad de sabor carne es " + contadorcarne + " ,y el promedio de kilos de sabor carne: " + (acumcarne/contadorcarne + " kg."));



}
