
document.getElementById("nro1").addEventListener("click", nro1);
document.getElementById("nro2").addEventListener("click", nro2);
document.getElementById("nro3").addEventListener("click", nro3);
document.getElementById("nro4").addEventListener("click", nro4);
document.getElementById("nro5").addEventListener("click", nro5);
document.getElementById("nro6").addEventListener("click", nro6);
document.getElementById("nro7").addEventListener("click", nro7);
document.getElementById("nro8").addEventListener("click", nro8);
document.getElementById("nro9").addEventListener("click", nro9);
document.getElementById("nro0").addEventListener("click", nro0);

document.getElementById("on").addEventListener("click", on);
document.getElementById("sign").addEventListener("click", sign);
document.getElementById("raiz").addEventListener("click", raiz);
document.getElementById("dividido").addEventListener("click", dividido);
document.getElementById("por").addEventListener("click", por);
document.getElementById("menos").addEventListener("click", menos);
document.getElementById("punto").addEventListener("click", punto);
document.getElementById("igual").addEventListener("click", igual);
document.getElementById("mas").addEventListener("click", mas);

/*
function capturarTecla (as_tecla) {
  let actual = document.getElementById('display').innerHTML;
  if (actual.length == 1) {
    actual = "";
  }
  let sumado = document.getElementById(as_tecla).alt;
  document.getElementById('display').innerHTML = actual + sumado;
}
*/
function nro1 () {
  let actual = document.getElementById('display').innerHTML;
  if (actual.length == 1 && actual == '0') {
    actual = "";
  }
  let sumado = document.getElementById('nro1').alt;
  document.getElementById('display').innerHTML = actual + sumado;
}

function nro2 () {
  let actual = document.getElementById('display').innerHTML;
  if (actual.length == 1 && actual == '0') {
    actual = "";
  }
  let sumado = document.getElementById('nro2').alt;
  document.getElementById('display').innerHTML = actual + sumado;
}
function nro3 () {
  let actual = document.getElementById('display').innerHTML;
  if (actual.length == 1 && actual == '0') {
    actual = "";
  }
  let sumado = document.getElementById('nro3').alt;
  document.getElementById('display').innerHTML = actual + sumado;
}
function nro4 () {
  let actual = document.getElementById('display').innerHTML;
  if (actual.length == 1 && actual == '0') {
    actual = "";
  }
  let sumado = document.getElementById('nro4').alt;
  document.getElementById('display').innerHTML = actual + sumado;
}
function nro5 () {
  let actual = document.getElementById('display').innerHTML;
  if (actual.length == 1 && actual == '0') {
    actual = "";
  }
  let sumado = document.getElementById('nro5').alt;
  document.getElementById('display').innerHTML = actual + sumado;
}
function nro6 () {
  let actual = document.getElementById('display').innerHTML;
  if (actual.length == 1 && actual == '0') {
    actual = "";
  }
  let sumado = document.getElementById('nro6').alt;
  document.getElementById('display').innerHTML = actual + sumado;
}
function nro7 () {
  let actual = document.getElementById('display').innerHTML;
  if (actual.length == 1 && actual == '0') {
    actual = "";
  }
  let sumado = document.getElementById('nro7').alt;
  document.getElementById('display').innerHTML = actual + sumado;
}
function nro8 () {
  let actual = document.getElementById('display').innerHTML;
  if (actual.length == 1 && actual == '0') {
    actual = "";
  }
  let sumado = document.getElementById('nro8').alt;
  document.getElementById('display').innerHTML = actual + sumado;
}
function nro9 () {
  let actual = document.getElementById('display').innerHTML;
  if (actual.length == 1 && actual == '0') {
    actual = "";
  }
  let sumado = document.getElementById('nro9').alt;
  document.getElementById('display').innerHTML = actual + sumado;
}
function nro0 () {
  let actual = document.getElementById('display').innerHTML;
  if (actual.length == 1 && actual == '0') {
    actual = "";
  }
  let sumado = document.getElementById('nro0').alt;
  document.getElementById('display').innerHTML = actual + sumado;
}


function on () {
  let actual = document.getElementById('display').innerHTML;
  let sumado = document.getElementById('on').alt;
  document.getElementById('display').innerHTML = 0;
}
function sign () {
  let actual = document.getElementById('display').innerHTML;
  let sumado = operadorUnitario(actual, 's');
  document.getElementById('display').innerHTML = sumado ;
}
function raiz () {
  let actual = document.getElementById('display').innerHTML;
  let sumado = operadorUnitario(actual, 'r');
  document.getElementById('display').innerHTML = sumado ;
}
function dividido () {
  let actual = document.getElementById('display').innerHTML;
  let sumado = document.getElementById('dividido').alt;
  document.getElementById('display').innerHTML = actual + sumado ;
}
function por () {
  let actual = document.getElementById('display').innerHTML;
  let sumado = document.getElementById('por').alt;
  document.getElementById('display').innerHTML = actual + sumado ;
}
function menos () {
  let actual = document.getElementById('display').innerHTML;
  let sumado = document.getElementById('menos').alt;
  document.getElementById('display').innerHTML = actual + sumado ;
}
function mas () {
  let actual = document.getElementById('display').innerHTML;
  let sumado = document.getElementById('mas').alt;
  document.getElementById('display').innerHTML = actual + sumado ;
}
function punto () {
  let actual = document.getElementById('display').innerHTML;
  let sumado = document.getElementById('punto').alt;
  document.getElementById('display').innerHTML = actual + sumado ;
}

// Clase Stack
class Pila {

    // Un arreglo es usado para implementar la pila
    constructor() {
        this.items = [];
    }

    // Funciones implementadas
    // Push: agrega un elemento a la pila
    push(elemento) {
        // ingresar un elemanto en la pila de items
        this.items.push(elemento);
    }

    // Pop (): elimina un elemento de la pila, si la función se llama en una pila vacía, indica "Underflow"
    pop() {
        // Este método devuelve el elemento superior de la pila y lo elimina. Devuelve el flujo inferior
        // cuando se llama en una pila vacía.
        // retorna "Underflow" si la pila está vacía
        if (this.items.length == 0){
            return "Underflow";
        }
        return this.items.pop();
    }

    // Peek (): devuelve la mayoría de los elementos superiores en la pila, pero no lo elimina.
    peek()
    {
        // Devuelve el elemento superior sin eliminarlo de la pila.
        // pero no lo borra.
        return this.items[this.items.length - 1];
    }

    // isEmpty (): devuelve verdadero si la pila está vacía
    isEmpty()
    {
        // Devuelve verdadero si la pila está vacía.
        return this.items.length == 0;
    }

  //  printStack (): este método devuelve una cadena en la que se concatenan todos los elementos de una pila.
    printStack()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

function igual () {

  var la_indices_niv1 = [], la_indices_niv2 = [], la_indices_niv3 = [];
  var la_indices_nivel_1 = [];
  var la_indices_nivel_2 = [];
  var la_indices_nivel_3 = [];
  var la_orden_indices_niv1 = [];
  var la_orden_indices_niv2 = [];
  var la_orden_indices_niv3 = [];
  var la_orden_indices_nivel_1 = [];
  var la_orden_indices_nivel_2 = [];
  var la_orden_indices_nivel_3 = [];
  var la_operacion = ['r', 's', '*', '/', '+', '-'];
  var la_operacion_nivel_1 = ['r', 's'];
  var la_operacion_nivel_2 = ['*', '/'];
  var la_operacion_nivel_3 = ['+', '-'];
  var la_operadores_niv1 = [];
  var la_operadores_niv2 = [];
  var la_operadores_niv3 = [];
  var la_operadores_nivel_1 = [];
  var la_operadores_nivel_2 = [];
  var la_operadores_nivel_3 = [];
  var la_orden_operadores_niv1 = [];
  var la_orden_operadores_niv2 = [];
  var la_orden_operadores_niv3 = [];
  var la_orden_operadores_nivel_1 = [];
  var la_orden_operadores_nivel_2 = [];
  var la_orden_operadores_nivel_3 = [];
  var pila = new Pila();

  let ls_cadena = document.getElementById('display').innerHTML;
  operadorNivel(la_operacion_nivel_1, la_operadores_nivel_1, la_indices_nivel_1, ls_cadena);
  operadorNivel(la_operacion, la_operadores_niv1, la_indices_niv1, ls_cadena);
  cargarOperadorNivel(la_operadores_nivel_1, la_indices_nivel_1, la_orden_operadores_nivel_1, la_orden_indices_nivel_1);
  cargarOperadorNivel(la_operadores_niv1, la_indices_niv1, la_orden_operadores_niv1, la_orden_indices_niv1);
  ordenarOperadorNivel(la_indices_nivel_1, la_orden_indices_nivel_1, la_orden_operadores_nivel_1);
  ordenarOperadorNivel(la_indices_niv1, la_orden_indices_niv1, la_orden_operadores_niv1);
  ls_cadena = operacionNivel (pila, la_orden_indices_niv1, la_orden_indices_nivel_1, la_orden_operadores_niv1, la_orden_operadores_nivel_1, 1, ls_cadena) ;

  operadorNivel(la_operacion_nivel_2, la_operadores_nivel_2, la_indices_nivel_2, ls_cadena);
  operadorNivel(la_operacion, la_operadores_niv2, la_indices_niv2, ls_cadena);
  cargarOperadorNivel(la_operadores_nivel_2, la_indices_nivel_2, la_orden_operadores_nivel_2, la_orden_indices_nivel_2);
  cargarOperadorNivel(la_operadores_niv2, la_indices_niv2, la_orden_operadores_niv2, la_orden_indices_niv2);
  ordenarOperadorNivel(la_indices_nivel_2, la_orden_indices_nivel_2, la_orden_operadores_nivel_2);
  ordenarOperadorNivel(la_indices_niv2, la_orden_indices_niv2, la_orden_operadores_niv2);
  ls_cadena = operacionNivel (pila, la_orden_indices_niv2, la_orden_indices_nivel_2, la_orden_operadores_niv2, la_orden_operadores_nivel_2, 2, ls_cadena) ;

  operadorNivel(la_operacion_nivel_3, la_operadores_nivel_3, la_indices_nivel_3, ls_cadena);
  operadorNivel(la_operacion, la_operadores_niv3, la_indices_niv3, ls_cadena);
  cargarOperadorNivel(la_operadores_nivel_3, la_indices_nivel_3, la_orden_operadores_nivel_3, la_orden_indices_nivel_3);
  cargarOperadorNivel(la_operadores_niv3, la_indices_niv3, la_orden_operadores_niv3, la_orden_indices_niv3);
  ordenarOperadorNivel(la_indices_nivel_3, la_orden_indices_nivel_3, la_orden_operadores_nivel_3);
  ordenarOperadorNivel(la_indices_niv3, la_orden_indices_niv3, la_orden_operadores_niv3);
  ls_cadena = operacionNivel (pila, la_orden_indices_niv3, la_orden_indices_nivel_3, la_orden_operadores_niv3, la_orden_operadores_nivel_3, 3, ls_cadena) ;

  document.getElementById('display').innerHTML = pila.pop();
}

// Se geneara identificador de raíz para el primer nivel
function operadorUnitario(as_cadena_operacion, as_tipo_operador){
  var ls_operador1="" ;
  var ls_operador2="" ;
  var ln_resultado = 0;
  var la_indices = [];
  var la_orden_indices = [];
  var la_operadores = [];
  var la_orden_operadores = [];
  var la_operacion = ['*', '/', '+', '-'];

  operadorNivel(la_operacion, la_operadores, la_indices, as_cadena_operacion);
  cargarOperadorNivel(la_operadores, la_indices, la_orden_operadores, la_orden_indices);
  ordenarOperadorNivel(la_indices, la_orden_indices, la_orden_operadores);

  ls_operador1 = as_cadena_operacion.substring(0, la_orden_indices[la_indices.length - 1] + 1);
  ls_operador2 = ")";
  ln_resultado = as_cadena_operacion.substring(la_orden_indices[la_indices.length - 1] + 1, as_cadena_operacion.length);
  return ls_operador1 + as_tipo_operador + "(" + ln_resultado + ls_operador2;

}

// Carga los arreglos según la prelación de los operadores por cada nivel
function operadorNivel(aa_operacion_nivel, aa_operadores_nivel, aa_indices_nivel, as_cadena_operacion){

  for (var li_k = 0; li_k < aa_operacion_nivel.length; li_k++) {
    var ls_operacion = aa_operacion_nivel[li_k];
    var idx = as_cadena_operacion.indexOf(ls_operacion);

    while (idx != -1) {
      aa_operadores_nivel.push(ls_operacion);
      aa_indices_nivel.push(idx);
      idx = as_cadena_operacion.indexOf(ls_operacion, idx + 1);
    }
  }
}

// Carga los arreglos que será utilizados para ordenar los operadores por cada nivel
function cargarOperadorNivel(aa_operadores_nivel, aa_indices_nivel, aa_orden_operadores_nivel, aa_orden_indices_nivel){
  for (var li_i = 0; li_i < aa_operadores_nivel.length; li_i++) {
    aa_orden_operadores_nivel[li_i] = aa_operadores_nivel[li_i];
    aa_orden_indices_nivel[li_i] = aa_indices_nivel[li_i];
  }
}

// Ordena los operadores por cada nivel
function ordenarOperadorNivel(aa_indices, aa_orden_indices, aa_orden_operadores){
  var li_i=0;
  var li_j=1;
  var li_k=0;
  var li_l=0;
  var la_orden_ind_temp=[];
  var la_orden_ope_temp=[];
  var lb_operador = false;

  while (!lb_operador) {
    if (li_j < aa_indices.length){
      if (aa_orden_indices[li_i] > aa_orden_indices[li_j]){

        la_orden_ind_temp[li_k]=aa_orden_indices[li_i];
        aa_orden_indices[li_i]=aa_orden_indices[li_j];
        aa_orden_indices[li_j]=la_orden_ind_temp[li_k];

        la_orden_ope_temp[li_k]=aa_orden_operadores[li_i];
        aa_orden_operadores[li_i]=aa_orden_operadores[li_j];
        aa_orden_operadores[li_j]=la_orden_ope_temp[li_k];

        li_i++;
        li_j++;
      } else {
        if (li_j > aa_indices.length){
          li_i=0;
        } else {
          li_i=li_j;
        }
        li_j=li_i+1;
      }
    } else {
      li_i=0;
      li_j=1;
      li_l++;
    }
    if (li_l > aa_indices.length){
      lb_operador = true;
    }
  }
}

// Evalua operación
function evaluacionItemsPila(pila, as_cadena){

  if (!isNaN(as_cadena)) {
      pila.push(as_cadena - '0');
  } else {
    var val1 = pila.pop();
    var val2 = pila.pop();
    if (val1 == "Underflow" || val2 == "Underflow")
        return "No se puede ejecutar esta evaluación";
    switch (as_cadena) {
    case '+':
        pila.push(val2 + val1);
        break;

    case '-':
        pila.push(val2 - val1);
        break;

    case '/':
        pila.push(val2 / val1);
        break;

    case '*':
        pila.push(val2 * val1);
        break;

    case 'r':
        pila.push(Math.sqrt(val2));
        break;

    case 's':
        pila.push((-1)*(val2));
        break;
    }
  }
  return pila.peek();
}

function operacionNivel (pila, aa_orden_indices, aa_orden_indices_nivel, aa_orden_operadores, aa_orden_operadores_nivel, an_nivel, as_cadena_operacion) {
  var li_k = 0;
  var li_l = 0;
  var li_m = 0;
  var li_n = 0;
  var ln_idx_ini = 0;
  var ln_idx_fin = 0;
  var ls_operador1="";
  var ls_operador2="";
  var ln_resultado = 0.00;
  var ls_cadena = as_cadena_operacion;
  var ls_cadena_tmp = "";

  for (var li_i = 0; li_i < aa_orden_indices.length; li_i++) {
    for (var li_j = 0; li_j < aa_orden_indices_nivel.length; li_j++) {

      li_m=li_i-1;
      if (li_i == 0) {
        li_k=0;
      } else {
        li_k=aa_orden_indices[li_m]+1;
      }

      li_n=li_i+1;
      if (li_n == aa_orden_indices.length){
        li_l=as_cadena_operacion.length
      } else {
        li_l=aa_orden_indices[li_n];
      }

      if (aa_orden_indices[li_i] == aa_orden_indices_nivel[li_j]) {
        switch (an_nivel) {
        case 1:
          if ((aa_orden_operadores[li_i] == 'r') || (aa_orden_operadores[li_i] == 's')) {
            ln_idx_ini = as_cadena_operacion.indexOf('(', li_k);
            ln_idx_fin = as_cadena_operacion.indexOf(')', li_k);
            ls_operador1 = as_cadena_operacion.substring(ln_idx_ini + 1, ln_idx_fin);
          } else if (((aa_orden_operadores[li_m] == '*') || (aa_orden_operadores[li_m] == '/')) && (li_i > 0) && (!pila.isEmpty())) {
            ls_operador1 = pila.pop();
          } else {
            ls_operador1 = as_cadena_operacion.substring(li_k, aa_orden_indices[li_i]);
          }
          break;

        case 2:
          if (((aa_orden_operadores[li_m] == '*') || (aa_orden_operadores[li_m] == '/')) && (li_i > 0) && (!pila.isEmpty())) {
            ls_operador1 = pila.pop();
          } else {
            ls_operador1 = as_cadena_operacion.substring(li_k, aa_orden_indices[li_i]);
          }
          break;

        case 3:
          if (((aa_orden_operadores[li_m] == '+') || (aa_orden_operadores[li_m] == '-')) && (li_i > 0) && (!pila.isEmpty())) {
            ls_operador1 = pila.pop();
          } else {
            ls_operador1 = as_cadena_operacion.substring(li_k, aa_orden_indices[li_i]);
          }
          break;
        }

        if ((aa_orden_operadores[li_i] == 'r') || (aa_orden_operadores[li_i] == 's')) {
          ls_operador2 = ""
        } else {
          ls_operador2 = as_cadena_operacion.substring(aa_orden_indices[li_i]+1, li_l);
        }

        ln_resultado = evaluacionItemsPila(pila, ls_operador1);
        ln_resultado = evaluacionItemsPila(pila, ls_operador2);
        ln_resultado = evaluacionItemsPila(pila, aa_orden_operadores_nivel[li_j]);

        if ((aa_orden_operadores[li_i] == 'r') || (aa_orden_operadores[li_i] == 's')) {
          ln_idx_ini = ls_cadena.indexOf('(');
          ln_idx_fin = ls_cadena.indexOf(')');
          ls_cadena_tmp = ls_cadena.substring(ln_idx_ini - 1, ln_idx_fin + 1);
        } else {
          ls_cadena_tmp = ls_operador1 + aa_orden_operadores_nivel[li_j] + ls_operador2;
        }

        ls_cadena = ls_cadena.replace(ls_cadena_tmp,ln_resultado);

        break;
      }
    }
  }

  return ls_cadena;
}
