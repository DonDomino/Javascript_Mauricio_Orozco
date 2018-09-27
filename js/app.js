//Funciones de teclas
var teclas = document.getElementsByClassName('tecla');
for(i = 0; i < teclas.length; i++){
//Ingreso de numeros
  teclas[i].addEventListener('click', function(){
			var display = document.getElementById('display').innerHTML;
      var tecla = this.id;
      switch(tecla){
//Reinicia el display a 0
        case 'on':
          document.getElementById('display').innerHTML=0
          break;
//Valida 8 caracteres en display y no repeticion del 0 inicial
					function validar(num){
						if (display.length < 8) {
							if (display==0) {
								document.getElementById('display').innerHTML=num
								}
						else {
								document.getElementById("display").innerHTML+=num
							}}};
					function punto(){
            if (display.indexOf(".") == -1) {
                document.getElementById('display').innerHTML+= ".";
              }};
					function signo(){
						document.getElementById("display").innerHTML*= -1;
							}
        case '1':
				validar(1);
          break;
        case '2':
				validar(2);
            break;
        case '3':
				validar(3);
            break;
        case '4':
				validar(4);
            break;
        case '5':
				validar(5);
            break;
        case '6':
				validar(6);
            break;
        case '7':
				validar(7);
            break;
        case '8':
				validar(8);
            break;
        case '9':
				validar(9);
            break;
        case '0':
				validar(0);
            break;
        case 'punto':
				punto();
            break;
				case 'sign':
				signo()
						break;
      }
    });

//Operaciones

//Animacion de teclas
  teclas[i].addEventListener('mousedown', function(){
    this.style.padding = '2px';
  });

  teclas[i].addEventListener('mouseup', function(){
    this.style.padding = '0px';
  });

}
