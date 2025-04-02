const apiKey = "ae5865f18bdef103b59059ea71d4735d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector("button");
const weathericon = document.querySelector(".weather-icon"); 

async function checkweather(city) {
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";


    if (data.weather[0].main === "Clouds") {
        weathericon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weathericon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weathericon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weathericon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Snow") {
        weathericon.src = "images/snow.png";
    } else if (data.weather[0].main === "Mist") {
        weathericon.src = "images/mist.png";
    } else if (data.weather[0].main === "Wind") {
        weathericon.src = "images/wind.png";
    } else {
        weathericon.src = "images/default.png"; 
    }
    document.querySelector(".weather").style.display="block";
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});

