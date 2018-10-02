//Objeto calculadora
var calc = {
	display: document.getElementById("display"),
	valorDisplay: '0',
	operacion: '0',
	operando1: '0',
	operando2: '0',
	cache: '0',
	cacheIgual: false,
	resultado: '0',
//funcion que inicia la calculadora
  init: (function(){
		this.animacion();
		this.teclado();
	}),
//Animacion de botones
  animacion: function(){
    var teclas = document.getElementsByClassName('tecla');
      for(i = 0; i < teclas.length; i++){
        teclas[i].addEventListener('mousedown', function(){
          this.style.padding = '2px';
          });
        teclas[i].addEventListener('mouseup', function(){
          this.style.padding = '0px';
          });
  }},
//Asignacion de teclas
  teclado: function(){
  	document.getElementById("0").addEventListener("click", function() {calc.numeros("0");});
  	document.getElementById("1").addEventListener("click", function() {calc.numeros("1");});
  	document.getElementById("2").addEventListener("click", function() {calc.numeros("2");});
  	document.getElementById("3").addEventListener("click", function() {calc.numeros("3");});
  	document.getElementById("4").addEventListener("click", function() {calc.numeros("4");});
  	document.getElementById("5").addEventListener("click", function() {calc.numeros("5");});
  	document.getElementById("6").addEventListener("click", function() {calc.numeros("6");});
  	document.getElementById("7").addEventListener("click", function() {calc.numeros("7");});
  	document.getElementById("8").addEventListener("click", function() {calc.numeros("8");});
  	document.getElementById("9").addEventListener("click", function() {calc.numeros("9");});
  	document.getElementById("on").addEventListener("click", function() {calc.on();});
  	document.getElementById("sign").addEventListener("click", function() {calc.signo();});
  	document.getElementById("punto").addEventListener("click", function() {calc.punto();});
  	document.getElementById("igual").addEventListener("click", function() {calc.igual();});
  	document.getElementById("dividido").addEventListener("click", function() {calc.operaciones("/");});
  	document.getElementById("por").addEventListener("click", function() {calc.operaciones("*");});
  	document.getElementById("menos").addEventListener("click", function() {calc.operaciones("-");});
  	document.getElementById("mas").addEventListener("click", function() {calc.operaciones("+");});
  },
//Funciones de las teclas
//Actualiza el display segun las funciones
	newDisplay: function () {
		this.display.innerHTML = this.valorDisplay;
},
//Ingreso de numeros y validacion de no repetir 0 inicial ni sobrepasar 8 caracteres
	numeros: function(num){
    if (this.valorDisplay.length < 8) {
      if (this.valorDisplay == "0") {
					this.valorDisplay ="";
          this.valorDisplay = this.valorDisplay + num;
        }
      else {
          this.valorDisplay = this.valorDisplay + num;
        }
				this.newDisplay();
			}
	},
//Reinicia la calculadora
  on: function(){
    this.valorDisplay = '0';
		this.operacion = "",
		this.operando1 = 0,
		this.operando2 = 0,
		this.cache = 0,
		this.cacheIgual = false,
		this.resultado = 0,
		this.newDisplay();
  },
//Coloca el negativo
  signo: function(){
		if (this.valorDisplay !="0") {
			var temp;
			if (this.valorDisplay.charAt(0)=="-") {
				temp = this.valorDisplay.slice(1);
			}	else {
				temp = "-" + this.valorDisplay;
			}
		this.valorDisplay = "";
		this.valorDisplay = temp;
		this.newDisplay();
		}
  },
//Coloca el decimal y valida que no se repita el punto
  punto: function(){
		if (this.valorDisplay.indexOf(".")== -1) {
			if (this.valorDisplay == ""){
				this.valorDisplay = this.valorDisplay + "0.";
			} else {
				this.valorDisplay = this.valorDisplay + ".";
			}
			this.newDisplay();
		}
  },
//Ejecuta las operaciones
  igual: function(){
		if(!this.cacheIgual){
			this.operando2 = parseFloat(this.valorDisplay);
			this.cache = this.operando2;
			this.calculos(this.operando1, this.operando2, this.operacion);
		} else {
//Presionar igual consecutivamente
		this.calculos(this.operando1, this.cache, this.operacion);
		}
//Guarda el resultado como operando1 para continuar
		this.operando1 = this.resultado;
//Actualiza el display
		this.valorDisplay = "";
//valida la longitud de 8 caracteres
		if (this.resultado.toString().length < 9){
			this.valorDisplay = this.resultado.toString();
		} else {
			this.valorDisplay = this.resultado.toExponential(5);
		}
//Calcular sobre ultimo valor
		this.cacheIgual = true;
		this.newDisplay();
  },
//Toma el numero en pantalla como operando1
  operaciones: function(operador){
		this.operando1 = parseFloat(this.valorDisplay);
				this.valorDisplay = "";
				this.operacion = operador;
				this.cacheIgual = false;
				this.newDisplay();
  },
//Toma los operandos y ejecuta la operacion segun el parametro
	calculos: function (operando1, operando2, operacion) {
		switch(operacion){
			case "+":
				this.resultado = (operando1 + operando2);
			break;
			case "-":
				this.resultado = (operando1 - operando2);
			break;
			case "*":
				this.resultado = (operando1 * operando2);
			break;
			case "/":
				this.resultado = (operando1 / operando2);
			break;
		}
	},
//Fin de Objeto Calculadora
  };
//Funcion que inicializa todo el codigo.
  calc.init();
