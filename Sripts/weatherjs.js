const weatherAPIURL = "http://api.openweathermap.org/data/2.5/";
const london = "weather?lat=51.5074&lon=-0.1278";
const seattle = "weather?lat=47.6762&lon=-122.3182";
const apiKey = "&APPID=df630ddcd4d316d08e414796f044e775&units=imperial";
let londonWeatherRequest = new XMLHttpRequest();

function LondonWeather() {
    console.log(weatherAPIURL + london + apiKey);
    let displayWeather = document.getElementById("weather-container");
    londonWeatherRequest.open("GET", weatherAPIURL + london + apiKey, true)

    londonWeatherRequest.onload = function () {
        let response = JSON.parse(this.response);
       // console.log(response.weather.main);
        displayWeather.innerHTML = `<p>Current Temp: ${response.main.temp} degrees Fahrenheit </br>
                                    Wind Speeed: ${response.wind.speed}mph </br>
                                    Current Humidity: ${response.main.humidity}%</p>`;
    }

    londonWeatherRequest.onerror = function () {
        let displayWeather = document.getElementById("weather-container");
        displayWeather.innerHTML = `The server could not be reached for info`;
        console.log("Error in accessing weather data");
    }

    londonWeatherRequest.send();
}

function SeattleWeather() {
    let seattleWeatherRequest = new XMLHttpRequest();
    //console.log(weatherAPIURL + seattle + apiKey);
    let displayWeather = document.getElementById("weather-container");
    seattleWeatherRequest.open("GET", weatherAPIURL + seattle + apiKey, true)

    seattleWeatherRequest.onload = function () {

        let response = JSON.parse(this.response);
        //console.log(response.weather.description);
        displayWeather.innerHTML = `<p>Current Temp: ${response.main.temp} degrees Fahrenheit </br>
                                    Wind Speeed: ${response.wind.speed}mph </br>
                                    Current Humidity: ${response.main.humidity}%</p>`;
    }

    seattleWeatherRequest.onerror = function () {
        let displayWeather = document.getElementById("weather-container");
        displayWeather.innerHTML = `The server could not be reached for info`;
        console.log("Error in accessing weather data");
    }

    seattleWeatherRequest.send();
}