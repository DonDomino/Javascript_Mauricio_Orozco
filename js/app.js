//Objeto Calculadora
//Seleccion de teclas
var teclas = document.getElementsByClassName('tecla');
for(i = 0; i < teclas.length; i++){
  teclas[i].addEventListener('click', function(){
      var display = document.getElementById('display').innerHTML;
      var tecla = this.id;
      switch(tecla){
            //Borra la pantalla y la deja en 0
        case 'on':
          document.getElementById('display').innerHTML=0
          break;
            //Validar y borrar el 0 inicial
        function qcero(num){
          if (display==0) {
              document.getElementById('display').innerHTML=num
            }
          else {
              document.getElementById("display").innerHTML+=num
            }};
            //Ingreso de numeros
        case '1':
          qcero(1);
          break;
        case '2':
          qcero(2);
            break;
        case '3':
          qcero(3);
            break;
        case '4':
          qcero(4);
            break;
        case '5':
          qcero(5);
            break;
        case '6':
          qcero(6);
            break;
        case '7':
          qcero(7);
            break;
        case '8':
          qcero(8);
            break;
        case '9':
          qcero(9);
            break;
        case '0':
          qcero(0);
            break;
        case 'punto':
          function punto(){
            if (display.indexOf(".") == -1) {
                document.getElementById('display').innerHTML+= ".";
              }}
              punto();
            break;
        case 'sign':
          function signo(){
            document.getElementById("display").innerHTML*= -1;
              }
              signo();
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
