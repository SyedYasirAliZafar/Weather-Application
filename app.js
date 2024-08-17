const apikey = "b5e4a06fb3287cfa796477140c92e289";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weathericon");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}&q=${city}&appid=${apikey}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        var data = await response.json();
        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if(data.weather[0].main == "Clouds"){
            weathericon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weathericon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weathericon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";

    } catch (error) {
        console.error("Error:", error);
        alert(error.message);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
checkWeather("");
