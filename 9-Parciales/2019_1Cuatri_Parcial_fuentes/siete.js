function mostrar()
{
let Altura;
let Sexo;
let ContadorAltura = 0;
let AcumAlt = 0;
let flag= 0;
let AlturaMin;
let SexoMinimo;
let ContMujeres=0;

for(let i=0 ; i<5 ; i++)
{
	do

{
	Altura= parseFloat(prompt(" Ingrese la altura "));
    ContadorAltura++;
    AcumAlt = AcumAlt + Altura;

}while(!(Altura >=0 && Altura <=250));



do{
	Sexo = prompt("ingrese su sexo");
}while(!(Sexo =="f" || Sexo =="m"));


if(flag == 0 || AlturaMin > Altura)
{
	AlturaMin = Altura;
	SexoMinimo = Sexo;
	flag=1
}


if(Sexo =="f" && Altura >190)
{
	parseInt(ContMujeres++);
}

}




alert(" El promedio de las alturas totales es " + AcumAlt/ContadorAltura);

alert("La altura más baja es " + AlturaMin + " y el sexo de esa persona es " + SexoMinimo);  

alert("La cantidad de mujeres que su altura supera los 190 centimetros es " + ContMujeres);

}

