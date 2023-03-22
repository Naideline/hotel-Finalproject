// Open the default tab
document.getElementById("hotels").style.display = "block";

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set the first card as active
var cards = document.getElementsByClassName("card");
cards[0].classList.add("active");

// Highlight the active card
function highlightCard(evt) {
  var i, cards;
  cards = document.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active");
  }
  evt.currentTarget.classList.add("active");
}

// Attach click event listeners to each card
for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", highlightCard);
}


function closeTabs() {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
}

document.getElementsByClassName("tablinks")[0].click();