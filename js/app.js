//Objeto Calculadora
var calc = {
	display: document.getElementById("display").innerHTML,


	init: (function(){
		this.animacion();
		this.teclado();
	}),
//Animacion de teclas
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
	numeros: function(num){
    if (this.display.length<8) {
      if (this.display==0) {
          document.getElementById('display').innerHTML=num
        }
      else {
          document.getElementById("display").innerHTML+=num
        }}
	},
  on: function(){
    document.getElementById('display').innerHTML=0;
  },
  signo: function(){
    document.getElementById('display').innerHTML*=-1;
  },
  punto: function(){

  },
  igual: function(){

  },
  operaciones: function(){

  },

//Fin de Calculadora
};
calc.init();
