const apiKey = "85e2c6e9542d26e060abddabb27df9cb";
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"

  }else {
    var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + " °C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".windy").innerHTML = data.wind.speed + " km/h";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "./assets/img/cloudy.png"
  }else if (data.weather[1].main == "Sunny"){
    weatherIcon.src = "./assets/img/sunny.png"
  }
  else if (data.weather[0].main == "Rainy"){
    weatherIcon.src = "./assets/img/rainy.png"
  }
  else if (data.weather[0].main == "Snowy"){
    weatherIcon.src = "./assets/img/snowy.png"
  }
  else if (data.weather[0].main == "Windy"){
    weatherIcon.src = "./assets/img/windy.png"
  } 
  document.querySelector(".weather").style.display = "block"
  document.querySelector(".error").style.display = "none"
  }
  
}



searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

