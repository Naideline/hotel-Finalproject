$(document).ready(function() {
  // Para obtener referencias a los elementos relevantes del DOM
  var $signupLink = $('#signup-link');
  var $signupModal = $('#signup-modal');
  var $signupModalClose = $signupModal.find('.logIn_btn-changes1');

  // Para manejar el evento click en el enlace de registro
  $signupLink.on('click', function(event) {
    event.preventDefault();
    $signupModal.fadeIn();
  });

  // para manejar el evento click en el botón de cerrar del formulario
  $signupModalClose.on('click', function(event) {
    event.preventDefault();
    $signupModal.fadeOut();
  });
});