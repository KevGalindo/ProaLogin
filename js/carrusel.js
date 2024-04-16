var imagenes = [
    "../assets/img/caso2.jpeg",
    "../assets/img/caso3.jpg"
    // Agrega tantas URLs de imágenes como desees
  ];

  var indiceImagen = 0;
  var imagenCarrusel = document.getElementById("imagen-carrusel");

  // Función para cambiar la imagen del carrusel
  function cambiarImagen() {
    imagenCarrusel.src = imagenes[indiceImagen];
    indiceImagen = (indiceImagen + 1) % imagenes.length; // Avanzar al siguiente índice circularmente
  }

  // Cambiar la imagen cada 3 segundos (3000 milisegundos)
  setInterval(cambiarImagen, 3000);