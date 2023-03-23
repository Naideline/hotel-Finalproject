//Seleccionamos los elementos del DOM que necesitamos
const carousel = document.querySelector('.carousel-items');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

//Establecemos el número de elementos por página y el índice actual
const itemsPerPage = 4;
let currentPage = 1;

//Calculamos el número total de páginas
const totalPages = Math.ceil(carousel.children.length / itemsPerPage);

//Función que actualiza el carrusel al cambiar de página
function updateCarousel() {
//Ocultamos todos los elementos
for (let i = 0; i < carousel.children.length; i++) {
carousel.children[i].style.display = 'none';
}
//Mostramos los elementos de la página actual
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
for (let i = startIndex; i < endIndex && i < carousel.children.length; i++) {
carousel.children[i].style.display = 'flex';
}
}

//Inicializamos el carrusel mostrando la primera página
updateCarousel();

//Evento del botón "Siguiente"
nextBtn.addEventListener('click', () => {
if (currentPage < totalPages) {
currentPage++;
updateCarousel();
}
});

//Evento del botón "Anterior"
prevBtn.addEventListener('click', () => {
if (currentPage > 1) {
currentPage--;
updateCarousel();
}
});

//Obtener referencia al modal y el botón que lo abre
const modal = document.getElementById('modal');
const showModalBtn = document.getElementById('show-modal-btn');

//Abrir el modal cuando se hace clic en el botón
showModalBtn.addEventListener('click', () => {
modal.style.display = 'block';
});

//Cerrar el modal cuando se hace clic fuera de él
window.addEventListener('click', (event) => {
if (event.target == modal) {
modal.style.display = 'none';
}
});

//Manejar el evento click en el enlace de registro
$('#signup-link').on('click', (event) => {
event.preventDefault();
$('#signup-modal').fadeIn();
});

//Manejar el evento click en el botón de cerrar del formulario
$('#signup-modal .logIn_btn-changes1').on('click', (event) => {
event.preventDefault();
$('#signup-modal').fadeOut();
});