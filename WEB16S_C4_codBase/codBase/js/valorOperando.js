var arrayData = new Array();
var archivoTxt = new xmlHttpRequest();
var fileRuta = 'txt/valorOperando.txt';

// Abre archivo en el servidor
archivoTxt.open("GET", fileRuta, false);

// Realiza la petición al servidor
archivoTxt.send(null);

//
var txt = archivoTxt.responseText;

for (var i=0; i < txt.length; i++){
  arrayData.push(txt[i]);
}

arrayData.forEach(function(data){
  console.log(data);
});



valorOperando.js
