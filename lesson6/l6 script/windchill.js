window.addEventListener('load', () => {

    var t = parseInt(document.getElementById('temp').innerHTML, 10);
    var s = parseInt(document.getElementById('windSpeed').innerHTML, 10);

    var chill = Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)));

    document.getElementById('windChill').innerHTML = chill;
});