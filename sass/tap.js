// Función para abrir el tab correspondiente al hacer click en un botón
function openTab(evt, tabName) {
  // Obtiene todos los elementos con clase 'tabcontent' y los oculta
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  // Obtiene todos los botones con clase 'tablinks' y los desactiva
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Muestra el contenido del tab correspondiente y activa el botón correspondiente
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Función para mostrar el contenido de hotel al hacer click en el botón correspondiente
function mostrarContenido() {
  var contenidoHotel = document.getElementById("contenidoHotel");
  if (contenidoHotel.style.display === "none") {
    contenidoHotel.style.display = "block";
  } else {
    contenidoHotel.style.display = "none";
  }
}