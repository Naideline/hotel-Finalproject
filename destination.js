let api = "https://6400566763e89b0913ac7551.mockapi.io/destination";

function makeDestinys(destinys) {
  let {name, description, heroImage} = destinys;
  let cards = document.getElementById("prueba");

  let title = document.createElement("h5");
  title.textContent = name;

  let descrip = document.createElement ("p");
  descrip.textContent = description;

  let herImg = document.createElement("img");
  herImg.src = heroImage;
  herImg.width = 100;
  
  let card = document.createElement ("div");
  card.appendChild(title);
  card.appendChild(descrip);
  card.appendChild(herImg);
  card.style.backgroundColor = "grey";

  cards.appendChild(card);
}

async function getData(){
  try{
    
    let data = await fetch(api)
    let response = await data.json()

    for (let i = 0; i < response.length; i++) {
      makeDestinys(response[i]);
      
    }
    console.log(response);
  } catch(error){
    console.log(error)
  }
}

getData()