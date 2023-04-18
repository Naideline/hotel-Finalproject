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

  //Intento del saludo en el formulario
  // Selecciona el campo de usuario y el botón "Create an account"
  const userInput = document.getElementById("userInput");
  const createAccountBtn = document.getElementById("createAccountBtn");
  
  // Agrega un evento onclick al botón "Create an account"
  createAccountBtn.onclick = function() {
    // Obtiene el valor ingresado en el campo de usuario
    const userName = userInput.value;
    
    // Muestra un mensaje con el valor ingresado
    alert("Welcome, " + userName + "!");
  };