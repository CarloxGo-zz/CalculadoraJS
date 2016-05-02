var previo,numero,suma,resta,multiplica,divide,caso,activo_viejo,cifra="";
var acumulado=0,memAcu=0;

window.onload = function() {
        document.onkeypress = detectarTecla;
}

function detectarTecla(evObject){
        var teclaPulsada = evObject.which;
        if(teclaPulsada>=42 && teclaPulsada<=57){
        	numero = String.fromCharCode(teclaPulsada);
	        switch (teclaPulsada){
	        	case 42:
	        		caso='multiplicar';
	        		operacion(caso);
	        	break;
	        	case 43:
	        		caso='sumar';
	        		operacion(caso);
	        	break;
	        	case 45:
	        		caso='restar';
	        		operacion(caso);
	        	break;
	        	case 47:
		        	caso='dividir';
	        		operacion(caso);
	        	break;
	        	default:
	        		num(numero);
	        	break;
	        }
	    }

	    switch (teclaPulsada){
	        case 13:
	        	parametro='';
	        	total(parametro);
	        break;
	        case 77:
	        	document.getElementById('activo').className = 'memactiva';
	        	parametro='M';
	        	memoria(parametro);
	        break;
	         case 109:
	        	document.getElementById('activo').className = 'memactiva';
	        	parametro='M';
	        	memoria(parametro);
	        break;
	        case 81:
	        	document.getElementById('activo').className = 'meminactiva';
		        parametro='MC';
	        	memoria(parametro);
	        break;
	        case 113:
	        	document.getElementById('activo').className = 'meminactiva';
	        	parametro='MC';
	        	memoria(parametro);
	        break;
	        case 99:
		        parametro='';
	        	limpiar(parametro);
	        break;
	        case 67:
		        parametro='';
	        	limpiar(parametro);
	        break;
	        case 82:
		        parametro='MR';
	        	memoria(parametro);
	        break;
	       	case 114:
		        parametro='MR';
	        	memoria(parametro);
	        break;
	        case 83:
	        	parametro='+';
	        	memoria(parametro);
	        break;
	        case 115:
	        	parametro='+';
	        	memoria(parametro);
	        break;
	    }
}

function num(numero) {
	cifra = cifra + numero;
	previo="numb";
	document.getElementById('pantalla').value = cifra;
}

function limpiar() {
	document.getElementById('pantalla').value="";
	cifra ="";
	acumulado=0;
	activo="";
	activo_viejo="";
	previo="oper";
}

function operacion(caso) {
	previo="oper";
	cifra = document.getElementById('pantalla').value;
	if(cifra==''){
		cifra=0;
	}
	switch(activo_viejo){
		case "sumar":
			acumulado = acumulado + parseFloat(cifra);
		break;
		case "restar":
			acumulado = acumulado - parseFloat(cifra);
		break;
		case "multiplicar":
			acumulado = acumulado * parseFloat(cifra);
		break;
		case "dividir":
			acumulado = acumulado / parseFloat(cifra);
		break;
		default:
			switch(caso){
				case "sumar":
					acumulado =  acumulado + parseFloat(cifra);
				break;
				case "restar":
					acumulado = parseFloat(cifra);
				break;
				case "multiplicar":
					acumulado = parseFloat(cifra);
				break;
				case "dividir":
					acumulado = parseFloat(cifra);
				break;
			}
		break;
	}

	switch (caso){
		case "sumar":
			activo="sumar";
			activo_viejo="sumar";
		break;

		case "restar":
			activo="restar";
			activo_viejo="restar";
		break;

		case "multiplicar":
			activo="multiplicar";
			activo_viejo="multiplicar";
		break;

		case "dividir":
			activo="dividir";
			activo_viejo="dividir";
		break;
	}
	document.getElementById('pantalla').value=acumulado;
	cifra = "";
}

function total () {
	cifra = document.getElementById('pantalla').value;
	if(cifra==''){
		cifra=0;
	}
	//document.getElementById('resultado').innerHTML= previo + ' -- activo: ' + activo + ' -- acumulado: ' + acumulado + ' -- cifra: ' + cifra;
	cifra = parseFloat(cifra);
	if(previo=="oper"){
		acumulado=cifra;
	}else{
		switch (activo){
			case "sumar":
				acumulado = acumulado + cifra;
			break;

			case "restar":
				acumulado = acumulado - cifra;
			break;

			case "multiplicar":
				acumulado = acumulado * cifra;
			break;

			case "dividir":
				acumulado = acumulado / cifra;
			break;

			default:
				acumulado = cifra;
			break;
		}			
	}
	//document.getElementById('resultado2').innerHTML= ' acumulado: ' + acumulado + ' cifra: ' + cifra; 
	activo="total";
	document.getElementById('pantalla').value = acumulado;
	cifra = "";
	acumulado=0;
	activo_viejo = "total";
	previo = "oper";
}

function memoria(parametro){
	switch (parametro){
		case "M":
			memAcu = parseFloat(document.getElementById('pantalla').value);
			document.getElementById('pantalla').value = 0;
			cifra = "";
		break;
		case "+":
			memAcu = memAcu + parseFloat(document.getElementById('pantalla').value);
			document.getElementById('pantalla').value = 0;
			cifra = "";
		break;
		case "MC":
			memAcu = 0;
		break;
		case "MR":
			document.getElementById('pantalla').value = memAcu;
			cifra = "";
			acumulado = document.getElementById('pantalla').value;
		break;
	}
}

function raiz(){
			cifra = document.getElementById('pantalla').value;
			if (parseFloat(document.getElementById('pantalla').value) == NaN) {
				cifra = 0;
			}
			document.getElementById('pantalla').value = sqrt(parseFloat(cifra));
}

// Este código solo esta para efectos académicos
function acu() {
	//document.getElementById('resultado').innerHTML='<p style="font-size:20;color:#29FD2C;">'+cifra+'</p>';
	document.getElementById('resultado').innerHTML=acumulado;
}