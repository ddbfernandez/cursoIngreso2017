function Mostrar(){
	var numero;
	var contadorPositivo = 0;
	var contadorNegativo = 0;
	var contadorCero = 0;
	var contadorPar = 0;

	var acumuladorPositivo = 0;
	var acumuladorNegativo = 0;

	var promedioPositivo;
	var promedioNegativo;

	var diferencia;
	
	var respuesta = "si";

	while(respuesta != "no"){
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		/* if( numero == 0 ){
			contadorCero++;
		}
		else{
			if( numero > 0 ){
				acumuladorPositivo = acumuladorPositivo + numero;
				contadorPositivo++;
			}
			else{
				acumuladorNegativo = acumuladorNegativo + numero;
				contadorNegativo++;	
			}	
		} */

		if( numero > 0 ){
			acumuladorPositivo = acumuladorPositivo + numero;
			contadorPositivo++;
		}

		if( numero < 0 ){
			acumuladorNegativo = acumuladorNegativo + numero;
			contadorNegativo++;
		}

		if( numero == 0 ){
			contadorCero++;
		}

		if( numero % 2 == 0 && numero != 0){
			contadorPar++;
		}

		respuesta = prompt("Continuar [si|no]?: ");
	}

	promedioPositivo = acumuladorPositivo / contadorPositivo;
	promedioNegativo = acumuladorNegativo / contadorNegativo;
	diferencia = acumuladorPositivo + acumuladorNegativo;

	document.write("La suma de los negativos es: " + acumuladorNegativo + "</br>" );
	document.write("La suma de los positivos es: " + acumuladorPositivo + "</br>" );
	document.write("La cantidad de los positivos es: " + contadorPositivo + "</br>" );
	document.write("La cantidad de los negativos es: " + contadorNegativo + "</br>" );
	document.write("La cantidad de ceros es: " + contadorCero + "</br>" );
	document.write("La cantidad de los numeros pares es: " + contadorPar + "</br>" );
	document.write("El promedio de los positivos es: " + promedioPositivo + "</br>" );
	document.write("El promedio de los negativos es: " + promedioNegativo + "</br>" );
	document.write("La diferencia entre positivos y negativos es: " + diferencia );
}//FIN DE LA FUNCIÓN