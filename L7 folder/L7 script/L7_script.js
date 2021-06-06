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








// window.addEventListener("load", (event)=>{
//     const lu = document.querySelector('#lastupdated');
//     lu.textContent = document.lastModified;

//     const cry = document.querySelector('#copyrightyear');
//     cry.textContent = new Date().getFullYear();
// })



// document.getElementById("cur-date").textContent = " | " + dayName + ", " +  date.getDate() + " " + month + " " + date.getFullYear();
