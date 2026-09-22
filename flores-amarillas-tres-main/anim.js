// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");



// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Me encantas", time: 15 },
  { text: "Te adoro chiquis", time: 18 },
  { text: "Eres la mejor", time: 21 },
  { text: "Me fascinas", time: 24 },
  { text: "Preciosa", time: 27 },
  { text: "FELIZ 22!", time: 27, fontSize: "70px" },
  { text: "FELIZ 22!", time: 30, fontSize: "70px" },
  { text: "FELIZ 22!", time: 33, fontSize: "70px" },
  { text: "FELIZ 22!", time: 36, fontSize: "70px" },
  { text: "FELIZ 22!", time: 39, fontSize: "70px" },
  { text: "FELIZ 22!", time: 42, fontSize: "70px" },
  { text: "FELIZ 22!", time: 45, fontSize: "70px" },
  { text: "FELIZ 22!", time: 48, fontSize: "70px" },
  { text: "FELIZ 22!", time: 52, fontSize: "70px" },
  { text: "FELIZ 22!", time: 55, fontSize: "70px" },
  { text: "FELIZ 22!", time: 58, fontSize: "70px" },
  { text: "FELIZ 22!", time: 61, fontSize: "70px" },
  { text: "FELIZ 22!", time: 64, fontSize: "70px" },
  { text: "FELIZ 22!", time: 67, fontSize: "70px" },
  { text: "FELIZ 22!", time: 70, fontSize: "70px" },
  { text: "FELIZ 22!", time: 73, fontSize: "70px" },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.8; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

//AQUI EMPIEZA
document.addEventListener("DOMContentLoaded", () => {

    const fotos = document.querySelectorAll(".foto-lateral");

    console.log("Fotos encontradas:", fotos.length);

    if (fotos.length === 0) {
        console.error("NO se encontraron las fotos.");
        return;
    }

    let fotoActual = 0;

    function cambiarFoto() {

        fotos.forEach((foto) => {
            foto.classList.remove("activa");
        });

        fotos[fotoActual].classList.add("activa");

        fotoActual++;

        if (fotoActual >= fotos.length) {
            fotoActual = 0;
        }
    }

    cambiarFoto();

    setInterval(cambiarFoto, 5000);
});


//AQUI TERMINA

setInterval(updateLyrics, 1000);



//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);