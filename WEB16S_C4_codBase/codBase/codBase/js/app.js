
var formNro1 = document.getElementsByClassName('Nro1')[0],
    formNro2 = document.getElementsByClassName('Nro2')[0],
    formNro3 = document.getElementsByClassName('Nro3')[0],
    formNro4 = document.getElementsByClassName('Nro4')[0],
    formNro5 = document.getElementsByClassName('Nro5')[0],
    formNro6 = document.getElementsByClassName('Nro6')[0],
    formNro7 = document.getElementsByClassName('Nro7')[0],
    formNro8 = document.getElementsByClassName('Nro8')[0],
    formNro9 = document.getElementsByClassName('Nro9')[0],
    formNro0 = document.getElementsByClassName('Nro0')[0];

/*
// Almacenamos el objeto localStorage en una variable
var Storage = window.localStorage
// Verificar si localStorage tiene alguna
if (Storage.length > 0 && Storage.hasOwnProperty('usuario')) {
  // Si la llave usuario existe en localStorage mostrar el formulario de Nro2
  formReserva.className = "Nro2"
  formRegistro.className = "Nro hide"
} else {
  // Si no existe se debe mostrar el formulario de regisro
  formRegistro.className = "Nro1"
  formReserva.className += "Nro2 hide"
}
*/

var botonNro1 = document.getElementById('1'),
    botonNro2 = document.getElementById('2'),
    botonNro3 = document.getElementById('3'),
    botonNro4 = document.getElementById('4'),
    botonNro5 = document.getElementById('5'),
    botonNro6 = document.getElementById('6'),
    botonNro7 = document.getElementById('7'),
    botonNro8 = document.getElementById('8'),
    botonNro9 = document.getElementById('9'),
    botonNro0 = document.getElementById('0');
/*    inputDocumento = document.getElementById('numDocRes'); */


function guardarDatos() {
  var calculo = {
    num1: document.getElementById('1').value,
    num2: document.getElementById('2').value,
    num3: document.getElementById('3').value,
    num4: document.getElementById('4').value,
    num5: document.getElementById('5').value,
    num6: document.getElementById('6').value,
    num7: document.getElementById('7').value,
    num8: document.getElementById('8').value,
    num9: document.getElementById('9').value,
    num0: document.getElementById('0').value
  }
  localStorage.setItem('calculo', JSON.stringify(calculo))
  formReserva.className = "reserva"
  formRegistro.className = "registro hide"
}


public class Operacion {

    double n1;
    double n2;
    double res;
    char operacion;


    public Operacion(double n1, double n2, char operacion) {

        this.n1 = n1;
        this.n2 = n2;
        this.operacion = operacion;
    }


    public void mostrarResultado(){

        System.out.println(this.n1+" "+this.operacion+" "+this.n2+" = "+this.res);

    }
}

public class Suma extends Operacion{

    double suma;

    public Suma(double n1, double n2) {

        super(n1, n2, '+');
        this.suma = n1 + n2;
        this.setRes(this.suma);
    }
}


/* Capturar números en pantalla*/
/*
var calendario = document.getElementById("calendario");

calendario.addEventListener("click",function(event){
  var ls_mes = 'Enero';
  var ln_posX = 0 ;
  var ln_posY = 0 ;

  var ls_mensaje = "Hiciste click en la posicion ->  X: "+event.clientX+" Y: "+event.clientY;
  ln_posX = event.clientX ;
  ln_posY = event.clientY ;

  if ((ln_posX >= 240 && ln_posX <= 340) && (ln_posY >= 50 && ln_posY <= 150)) {
    ls_mes = 'Enero' ;
  } else if ((ln_posX >= 370 && ln_posX <= 470) && (ln_posY >= 50 && ln_posY <= 150)) {
    ls_mes = 'Febrero' ;
  } else if ((ln_posX >= 510 && ln_posX <= 610) && (ln_posY >= 50 && ln_posY <= 150)) {
    ls_mes = 'Marzo' ;
  } else if ((ln_posX >= 640 && ln_posX <= 740) && (ln_posY >= 50 && ln_posY <= 150)) {
    ls_mes = 'Abril' ;
  } else if ((ln_posX >= 240 && ln_posX <= 340) && (ln_posY >= 230 && ln_posY <= 330)) {
    ls_mes = 'Mayo' ;
  } else if ((ln_posX >= 370 && ln_posX <= 470) && (ln_posY >= 230 && ln_posY <= 330)) {
    ls_mes = 'Junio' ;
  } else if ((ln_posX >= 510 && ln_posX <= 610) && (ln_posY >= 230 && ln_posY <= 330)) {
    ls_mes = 'Julio' ;
  } else if ((ln_posX >= 640 && ln_posX <= 740) && (ln_posY >= 230 && ln_posY <= 230)) {
    ls_mes = 'Agosto' ;
  } else if ((ln_posX >= 240 && ln_posX <= 340) && (ln_posY >= 400 && ln_posY <= 500)) {
    ls_mes = 'Septiembre' ;
  } else if ((ln_posX >= 370 && ln_posX <= 470) && (ln_posY >= 400 && ln_posY <= 500)) {
    ls_mes = 'Octubre' ;
  } else if ((ln_posX >= 510 && ln_posX <= 610) && (ln_posY >= 400 && ln_posY <= 500)) {
    ls_mes = 'Noviembre' ;
  } else if ((ln_posX >= 640 && ln_posX <= 740) && (ln_posY >= 400 && ln_posY <= 500)) {
    ls_mes = 'Diciembre' ;
  } else {
    ls_mes = 'NaN' ;
  }

  switch (ls_mes) {
    case 'Enero':
      ls_mensaje = ls_mensaje + ' Mes: ' + ls_mes;
      break;
    case 'Febrero':
      ls_mensaje = ls_mensaje + ' Mes: ' + ls_mes;
      break;
    case 'Marzo':
      ls_mensaje = ls_mensaje + ' Mes: ' + ls_mes;
      break;
    case 'Abril':
      ls_mensaje = ls_mensaje + ' Mes: ' + ls_mes;
      break;
    case 'Mayo':
      ls_mensaje = ls_mensaje + ' Mes: ' + ls_mes;
      break;
    case 'Junio':
      ls_mensaje = ls_mensaje + ' Mes: ' + ls_mes;
      break;
    case 'Julio':
      ls_mensaje = ls_mensaje + ' Mes: ' + ls_mes;
      break;
    case 'Agosto':
      ls_mensaje = ls_mensaje + ' Mes: ' + ls_mes;
      break;
    case 'Septiembre':
      ls_mensaje = ls_mensaje + ' Mes: ' + ls_mes;
      break;
    case 'Octubre':
      ls_mensaje = ls_mensaje + ' Mes: ' + ls_mes;
      break;
    case 'Noviembre':
      ls_mensaje = ls_mensaje + ' Mes: ' + ls_mes;
      break;
    case 'Diciembre':
      ls_mensaje = ls_mensaje + ' Mes: ' + ls_mes;
      break;
    default:
      ls_mensaje = ' [' + ls_mes + ']';
      console.log('Lo lamentamos, debe seleccionar un mes nos a incluido: ' + ls_mensaje + '.');
  }
  console.log(ls_mensaje);
})
*/
