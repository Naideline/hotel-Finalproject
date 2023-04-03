 // Obtenemos los botones y las tarjetas
      const formButton = document.getElementById("form");
      const detailsButton = document.getElementById("details");
      const card1 = document.getElementById("card1");
      const card2 = document.getElementById("card2");
      const card3 = document.getElementById("card3");

      // Agregamos eventos a los botones
      formButton.addEventListener("click", function() {
        // Aquí puedes agregar la funcionalidad para el botón "form"
        console.log("Haz clic en el botón 'form'");
      });

      detailsButton.addEventListener("click", function() {
        // Mostramos las tarjetas al hacer clic en el botón "details"
        card1.style.display = "block";
        card2.style.display = "block";
        card3.style.display = "block";
      });

      // Get the button that opens the modal
var btn = document.getElementById("form");

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Get the close button
const closeButton = document.getElementById("close");

//Add an event listener to the close button
closeButton.addEventListener("click", function() {
    //Hide the cards
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
});