// Seleccionamos los elementos del DOM que necesitamos
const carousel = document.querySelector('.carousel-items');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');


//Función para el consumo de la información del API

async function getData(){
  try{
    const api =
    "https://6400566763e89b0913ac7551.mockapi.io/destination"
    const data = await fetch(api)
    const response = await data.json()
    console.log(response)
  } catch(error){
    console.log(error)
  }
}

getData()

// Establecemos el número de elementos por página y el índice actual
const itemsPerPage = 4;
let currentPage = 1;

// Calculamos el número total de páginas
const totalPages = Math.ceil(carousel.children.length / itemsPerPage);

// Función que actualiza el carrusel al cambiar de página
function updateCarousel() {
  // Ocultamos todos los elementos
  for (let i = 0; i < carousel.children.length; i++) {
    carousel.children[i].style.display = 'none';
  }

  // Mostramos los elementos de la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  for (let i = startIndex; i < endIndex && i < carousel.children.length; i++) {
    carousel.children[i].style.display = 'flex';
  }
}

// Inicializamos el carrusel mostrando la primera página
updateCarousel();

// Evento del botón "Siguiente"
nextBtn.addEventListener('click', function() {
  if (currentPage < totalPages) {
    currentPage++;
    updateCarousel();
  }
});

// Evento del botón "Anterior"
prevBtn.addEventListener('click', function() {
  if (currentPage > 1) {
    currentPage--;
    updateCarousel();
  }
});

// Get the modal element
var modal = document.getElementById("modal");

// Get the button that opens the modal
var showModalBtn = document.getElementById("show-modal-btn");

// When the user clicks the button, open the modal
showModalBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function() {
  // Obtener referencias a los elementos relevantes del DOM
  var $signupLink = $('#signup-link');
  var $signupModal = $('#signup-modal');
  var $signupModalClose = $signupModal.find('.logIn_btn-changes1');

  // Manejar el evento click en el enlace de registro
  $signupLink.on('click', function(event) {
    event.preventDefault();
    $signupModal.fadeIn();
  });

  // Manejar el evento click en el botón de cerrar del formulario
  $signupModalClose.on('click', function(event) {
    event.preventDefault();
    $signupModal.fadeOut();
  });
});


