// Esperar a que el documento esté listo
$(function() {

  // Obtener referencias a los elementos relevantes del DOM
  const $signupLink = $('#signup-link');
  const $signupModal = $('#signup-modal');
  const $signupModalClose = $signupModal.find('.logIn_btn-changes1');
  
  // Manejar el evento click en el enlace de registro
  $signupLink.click(function(event) {
  event.preventDefault();
  $signupModal.fadeIn();
  });
  
  // Manejar el evento click en el botón de cerrar del formulario
  $signupModalClose.click(function(event) {
  event.preventDefault();
  $signupModal.fadeOut();
  });
  
  });