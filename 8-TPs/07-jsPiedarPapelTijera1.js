/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;
let maximo = 3;
let minimo = 1;
let resultado;
let opcion;

function comenzar()
{
	

eleccionMaquina = Math.round(Math.random() * (maximo - minimo) + minimo);


}//FIN DE LA FUNCIÓN
function piedra()
{

	switch(opcion)
        {
        case 1:

             {
             	alert("piedra.empate");
         }
             break;
        case 2:
        {
        	alert("tijera.ganaste ");
        }
             break;
        case 3:
{
	alert("papel.perdiste")
}
}

}
//FIN DE LA FUNCIÓN
function papel()
{


}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN