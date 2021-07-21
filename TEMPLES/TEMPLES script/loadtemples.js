window.addEventListener('load',()=>{
    // const serverName = ""
    const requestURL = "TEMPLES script/temples2.json"
    fetch(requestURL)
    .then((response)=> {
        return response.json();
    })
    .then((jsonObject)=>{
        console.log(jsonObject);
        Object.entries(jsonObject).forEach(([key,temple])=>{
        // if(temple.state == "ID"){
            buildTempleCard(temple); 
        });
    });
});
function buildTempleCard(temple){
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2>
                                        <img src="${temple.imageurl}" alt="${temple.name}">
                                        <p>Phase Status: <b>${temple.phase}</b></p>
                                        <p>Services Available: <b>${temple.services[0]} and ${temple.services[3]} out of ${temple.services.length} possible services</b></p>
                                        <p>Services Unavailable: <b>${temple.services[1]} and ${temple.services[2]} </b></p>`;

    document.querySelector("#temples").appendChild(card);
}