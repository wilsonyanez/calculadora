
function cambiarColorBotonesAccion(elemento){
  elemento.style.background = "#4d62d0";
  if (elemento.children[0]) {
    elemento.children[0].style.background = "inherit";

  }
}
function retornarColorBotonesAccion(elemento){
  elemento.style.background = "#9b9b9b";
  if (elemento.children[0]) {
    elemento.children[0].style.background = "inherit";
  }
}

function AumentarTamañoBotonAccion(elemento){
  elemento.style.width = "22%";
  elemento.style.height= "19%";
  if (elemento.children[0]) {
    elemento.children[0].style.background = "inherit";

  }
}

function ReducirTamañoBotonAccion(elemento){
  elemento.style.width = "20%";
  elemento.style.height= "17%";
  if (elemento.children[0]) {
    elemento.children[0].style.background = "inherit";
  }
}

/*-------------------------------------------------------------------------------*/

var Eventos = {
  init: function(){
    document.onkeypress = this.eventoSonido;
    this.asignarEventosBotones('tecla');
  },
  asignarEventosBotones: function(selector){
    var botonesPagina = document.getElementsByClassName(selector);
    for (var i = 0; i < botonesPagina.length; i++) {
      botonesPagina[i].onmouseover = this.eventoColorBotones;
      botonesPagina[i].onmouseleave = this.eventoRetornarColorBotones;
      botonesPagina[i].onmouseover = this.eventoReducirTamañoBotonAccion;
      botonesPagina[i].onmouseleave = this.eventoAumentarTamañoBotonAccion;
    }
  },
  eventoColorBotones: function(event){
    cambiarColorBotonesAccion(event.target);
  },
  eventoRetornarColorBotones: function(event){
    retornarColorBotonesAccion(event.target);
  },
  eventoAumentarTamañoBotonAccion: function(event){
    AumentarTamañoBotonAccion(event.target);
  },
  eventoReducirTamañoBotonAccion: function(event){
    ReducirTamañoBotonAccion(event.target);
  },
}

Eventos.init();
