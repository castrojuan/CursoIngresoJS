function mostrar()
{
let continente;
let metodo;
let precio = 100;


continente = document.getElementById("selecContinente").value; 
metodo = document.getElementById("selecPago").value; 

switch(continente)
{
case"África":
case"Oceania":

 
   if(metodo=="Efectivo")
 	{
 		alert(parseInt(precio-precio*0.45)); 
    }
    else
    	{alert(parseInt(precio-precio*0.30));
    	}
    break;

case"America": 
 
 if(metodo=="Débito")
 	{
 		alert(parseInt(precio-precio*0.25)); 
    }
    else
    	{alert(parseInt(precio-precio*0.15));
    }
    break;  

 case"Europa":
    
    if(metodo=="Débito")
    {
    	alert(parseInt(precio-precio*0.35)); 
    }
     else if(metodo=="Efectivo")
     {
     	alert(parseInt(precio-precio*0.25)); 
     }
     else if(metodo=="MercadoPago")
     	{
     	alert(parseInt(precio-precio*0.30)); 
        }
        else
        {
        	alert(parseInt(precio-precio*0.25));
        }
    break;

    default:

        {
        	alert(parseInt(precio+precio*0.20));
        }
        if(metodo=="Cheque")
        {
        	alert(parseInt(precio+precio*0.15));
        }

}



}





























