document.getElementById('searchBtn').onclick = function () {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name.");
    }
};

function getWeather(city) {
    const apiKey = 'fa03540d6367bd3c1beb67570939876c';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';

    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                alert("Error: Unable to get weather data.");
                return;
            }
            return response.json();
        })
        .then(function (data) {
            if (data.cod === 200) {
                showWeather(data);
            } else {
                alert("City not found. Try another one.");
            }
        })
        .catch(function () {
            alert("Failed to connect. Check your internet.");
        });
}

function showWeather(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = data.main.temp + ' °C';
    document.getElementById('humidity').textContent = data.main.humidity + '%';
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('weather-icon').src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
    document.getElementById('weather-icon').alt = data.weather[0].description;
    document.getElementById('weather-result').style.display = 'block';
}


console.log(weather-result);
