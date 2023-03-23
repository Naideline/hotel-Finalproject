let apiHotel = "https://6400566763e89b0913ac7551.mockapi.io/hotel";

function makeDestinys(hotels) {
  let {hotelName,description,characteristics,image,roomList,roomList2} = hotels;
  let cards = document.getElementById("prueba-hoteles");

  let title = document.createElement("h5");
  title.textContent = hotelName;

  let descrip = document.createElement ("p");
  descrip.textContent = description;

  let charac = document.createElement ("p");
  descrip.textContent = characteristics;

  let roomL = document.createElement ("p");
  descrip.textContent = roomList;

  let roomLl = document.createElement ("p");
  descrip.textContent = roomList2;

  let herImg = document.createElement("img");
  herImg.src = image;
  herImg.width = 100;
  
  let card = document.createElement ("div");
  card.appendChild(title);
  card.appendChild(descrip);
  card.appendChild(herImg);
  card.appendChild(charac);
  card.appendChild(roomL);
  card.appendChild(roomLl);
  card.style.backgroundColor = "grey";

  cards.appendChild(card);
}

async function getData(){
  try{
    
    let data = await fetch(apiHotel)
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