window.addEventListener("load",() => {
    const hambutton = document.querySelector(".ham");
    const mainnav = document.querySelector("#navigation");
    const dateFooter = document.querySelector(".date");
    const banner = document.querySelector(".banner");

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]; 

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dayWeek = date.getDay();

    document.getElementById('lastupdated').innerHTML = `${days[dayWeek]}, ${day} ${months[month]} ${year}`;
    
    if (dayWeek !== 5) {
        banner.style.display = "none";
    } else {
        banner.style.display = "flex";
    }

    hambutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);
    // to solve the mid resizing issue with responsive class on
    // window.onresize = () => {if(window.innerWidth > 760) mainnav.classList.remove("responsive")};

});


const forcasturl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=89cee548a3df9c3f2b4ab9c1480baa99";

fetch(forcasturl)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let count = 0;
        var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday']
        jsObject.list.forEach(element => {
            // used the reference here at THAT exact time...
            if(element.dt_txt.includes('18:00:00')){
                document.querySelector('#forcastDay' + count).textContent = (dayNames[new Date(element.dt_txt.slice(0, 10)).getDay()]);

                document.querySelector('#forcast' + count).textContent = Math.round(element.main.temp_max) + " °F";

                document.querySelector('#forcastimg' + count).setAttribute('src', "http://openweathermap.org/img/wn/" + element.weather[0].icon + ".png")
                
                count = count + 1;
            };
        });
});