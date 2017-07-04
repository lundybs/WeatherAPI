
const weatherAPIURL = "http://api.openweathermap.org/data/2.5/";
const london = "weather?lat=51.5074&lon=-0.1278";
const seattle = "weather?lat=47.6762&lon=-122.3182";
const apiKey = "&APPID=df630ddcd4d316d08e414796f044e775";
let londonWeatherRequest = new XMLHttpRequest();

function LondonWeather() {
    console.log(weatherAPIURL + london + apiKey);
    londonWeatherRequest.open("GET", weatherAPIURL + london + apiKey, true)

    londonWeatherRequest.onload = function () {
        let displayWeather = document.getElementById("weather-container");
        let response = JSON.parse(this.response);
        //console.log("i am in the onload");
        console.log(response.weather.main);
        displayWeather.innerHTML = response.main.temp;
    }

    londonWeatherRequest.onerror = function () {
        console.log("Error in accessing weather data");
    }

    londonWeatherRequest.send();
}

function OnloadLondon() {
 let response = JSON.parse(this.response);
        console.log("i am in the onload");
        console.log(response.body);
        displayWeather.innerHTML = response.body;
}

function SeattleWeather() {
    let seattleWeatherRequest = new XMLHttpRequest();
    console.log(weatherAPIURL + seattle + apiKey);
    seattleWeatherRequest.open("GET", weatherAPIURL + seattle + apiKey, true)

    seattleWeatherRequest.onload = function () {
        let displayWeather = document.getElementById("weather-container");
        let response = JSON.parse(this.response);
        //console.log("i am in the onload");
        console.log(response.weather.main);
        displayWeather.innerHTML = response.main.temp;
    }

    seattleWeatherRequest.onerror = function () {
        console.log("Error in accessing weather data");
    }

    seattleWeatherRequest.send();
}