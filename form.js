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

const nameUser = document.getElementById("input_name");
const lastName = document.getElementById("input_lastname");
const email = document.getElementById("input_email");
const password = document.getElementById("input_password");
const repeatPassword = document.getElementById("input_repeatPassword");
const form = document.getElementById("formSignIn");
const listInputs = document.querySelectorAll(".form-input");
const signup = document.querySelector('#signup-link');
const modal = document.querySelector('#signup-modal');

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nameUser.value.length < 1 || nameUser.value.trim() == "") {
    mostrarMensajeError("input_name", "Invalid Name*");
    condicion = false;
  }
  if (lastName.value.length < 1 || lastName.value.trim() == "") {
    mostrarMensajeError("input_lastname", "Invalid lastname");
    condicion = false;
  }
  if (email.value.length < 1 || email.value.trim() == "") {
    mostrarMensajeError("input_email", "Invalid email*");
    condicion = false;
  }
  if (password.value.length < 1 || password.value.trim() == "") {
    mostrarMensajeError("input_password", "Invalid password*");
    condicion = false;
  }
  if (repeatPassword.value != password.value) {
    mostrarMensajeError("input_repeatPassword", "Password error*");
    condicion = false;
  }
  return condicion;
}

// BOTÓN CERRAR CIERRA EL MODAL
function close(closeForm)  {
  closeForm.style.display = 'none'
}

// EVENTO INICIO DE SESIÓN
const user = {
  name: "",
  lastname: ""
};

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  user.name = nameUser.value;

  sessionStorage.setItem('user', JSON.stringify(user));

  signup.innerHTML = `Bienvenid@, ${user.name}!`
  modal.style.display = 'none'
});

(function verificar(){
  const userJSON = sessionStorage.getItem('user');

if (userJSON) {
  const user = JSON.parse(userJSON);
  signup.innerHTML = `Bienvenid@, ${user.name}`
}
})();