function Mostrar()
{

	/* var contador=0;
	var acumulador=0;
	var respuesta='si';


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador; */

var contador=0;
	var acumulador=0;
	var respuesta=true;
	var numero;
	while(respuesta == true)

	//while(respuesta=='si')
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		acumulador=numero+acumulador;//acumulador+=numero;
		contador++;
		//respuesta=prompt("desea ingresar otro numero?si/no");
	    respuesta=confirm("desea ingresar otro numero?");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN