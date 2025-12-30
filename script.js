async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // 🔑 OpenWeather API Key (free account बनाकर अपनी key डालें)
    const apiKey = "1d5584fa764043b637cea731820d104a";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("weatherResult").innerHTML = `
            <p>City: ${data.name}</p>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        alert("City not found!");
    }
}
