const imagesToLoad = document.querySelector("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => { 
        });
    }, imgOptions);

    imagesToLoad.forEach((img)) => {
        imgObserver.observe(img);
    });
}
else {
}

// window.addEventListener("load", (event)=>{
//     const lu = document.querySelector('#lastupdated');
//     lu.textContent = document.lastModified;

//     const cry = document.querySelector('#copyrightyear');
//     cry.textContent = new Date().getFullYear();
// })



// document.getElementById("cur-date").textContent = " | " + dayName + ", " +  date.getDate() + " " + month + " " + date.getFullYear();
