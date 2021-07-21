window.addEventListener('load',()=>{
    // const serverName = ""
    const requestURL = "TEMPLES script/hotels.json"
    fetch(requestURL)
    .then((response)=> {
        return response.json();
    })
    .then((jsonObject)=>{
        console.log(jsonObject);
        Object.entries(jsonObject).forEach(([key,hotel])=>{
        // if(temple.state == "ID"){
            buildHotelCard(hotel); 
        });
    });
});
function buildHotelCard(hotel){
    console.log(hotel);
    let card = document.createElement("section");
    card.classList.add("hotel");
    card.innerHTML = `<h2>${hotel.name}</h2>
                                        <img src="${hotel.imageurl}" alt="${hotel.name}">
                                        <p>Services Available: <b>${hotel.services[0]}, ${hotel.services[1]}, ${hotel.services[2]} and ${hotel.services[3]} out of ${hotel.services.length} possible services</b></p>
                                        <p>Services Unavailable: <b>${hotel.services[4]} </b></p>`;

    document.querySelector("#hotels").appendChild(card);
}