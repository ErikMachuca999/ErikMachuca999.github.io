const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    const special = towns.filter(town => (town.name == 'Soda Springs') || (town.name == 'Fish Haven') || (town.name == 'Preston'));
    
    special.forEach(town => {
      let townContainer = document.createElement('div');
      let articleText = document.createElement('div');
      let townArticle = document.createElement('article');
      let h2 = document.createElement('h2');
      let motto = document.createElement('h3');
      let year = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');
      let image = document.createElement('img');

      image.setAttribute('src', `L9 images/${town.photo}`);
      image.setAttribute('alt', town.name);
      h2.textContent = town.name;
      motto.innerHTML = town.motto;
      if (town.name == 'Fish Haven') motto.innerHTML += "<br>";
      year.textContent = 'Year Founded: ' + town.yearFounded;
      population.textContent = 'Population: ' + town.currentPopulation;
      rainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;
    
      articleText.appendChild(h2);
      articleText.appendChild(motto);
      articleText.appendChild(year);
      articleText.appendChild(population);
      articleText.appendChild(rainfall);
      townArticle.appendChild(articleText);
      townArticle.appendChild(image);
      townContainer.appendChild(townArticle);

      document.querySelector('div.towns').appendChild(townContainer);      
    });
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
});




























