document.addEventListener('DOMContentLoaded', function () {
  procesarTitulo();
});

function procesarTitulo() {
  var titulo = "Encriptador de Mensajes";
  var tituloDiv = document.querySelector('.titulo-animado');
  tituloDiv.innerHTML = '';

  var i = 0;
  var intervalo = setInterval(function () {
    tituloDiv.innerHTML += titulo.charAt(i);
    i++;
    if (i > titulo.length) {
      clearInterval(intervalo);
    }
  }, 150);
}

function procesarTexto() {
  var texto = document.getElementById("texto").value.toLowerCase();
  var modo = document.getElementById("modo").value;
  var resultado = "";
  
  if (modo === "encriptar") {
    resultado = encriptar(texto);
  } else {
    resultado = desencriptar(texto);
  }
  
  document.getElementById("resultado").value = resultado;
}

function encriptar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function copiarTexto() {
  var resultado = document.getElementById("resultado");
  resultado.select();
  document.execCommand("copy");
}

  