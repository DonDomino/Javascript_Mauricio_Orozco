//Funciones de teclas
var teclas = document.getElementsByClassName('tecla');
for(i = 0; i < teclas.length; i++){
//Ingreso de numeros
  teclas[i].addEventListener('click', function(){
      var tecla = this.id;
      switch(tecla){
        case 'on':
          document.getElementById('display').innerHTML=0
          break;
        case '1':
          document.getElementById('display').innerHTML+=1
          break;
        case '2':
          document.getElementById('display').innerHTML+=2
            break;
        case '3':
          document.getElementById('display').innerHTML+=3
            break;
        case '4':
          document.getElementById('display').innerHTML+=4
            break;
        case '5':
          document.getElementById('display').innerHTML+=5
            break;
        case '6':
          document.getElementById('display').innerHTML+=6
            break;
        case '7':
          document.getElementById('display').innerHTML+=7
            break;
        case '8':
          document.getElementById('display').innerHTML+=8
            break;
        case '9':
          document.getElementById('display').innerHTML+=9
            break;
        case '0':
            function cero(){
              var display = document.getElementById('display').innerHTML;
              if (display==0) {
                document.getElementById('display').innerHTML="0"
              }
              else {
                document.getElementById("display").innerHTML+=0;
              }}
              cero();
            break;
        case 'punto':
          document.getElementById('display').innerHTML+='.'
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
