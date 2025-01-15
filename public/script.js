document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch random dog image
    const getRandomDogImage = async () => {
        try {
            const response = await fetch('/random');
            const data = await response.json();

            if (data.imageUrl) {
                // Get the image element and set the source to the random dog image URL
                const dogImageElement = document.getElementById('dog-image');
                dogImageElement.src = data.imageUrl;
            } else {
                console.error('Failed to fetch random dog image.');
            }
        } catch (error) {
            console.error('Error fetching random dog data:', error);
        }
    };


    const getWeather = async (city) => {
        try {
            const response = await fetch(`/weather?city=${city}`);
            const data = await response.json();

            if (data.temperature) {
                // Display weather data
                const weatherDataElement = document.getElementById('weather-data');
                const iconUrl = `http://openweathermap.org/img/wn/${data.icon}.png`;  // URL for the weather icon

                weatherDataElement.innerHTML = `
                <p>Temperature: ${data.temperature} °C</p>
                <p>Weather: ${data.description}</p>
                <img src="${iconUrl}" alt="${data.description}" />  <!-- Display the icon -->
                <p>Feels Like: ${data.feels_like} °C</p>
                <p>Humidity: ${data.humidity}%</p>
                <p>Pressure: ${data.pressure} hPa</p>
                <p>Wind Speed: ${data.wind_speed} m/s</p>
                <p>Country: ${data.country}</p>
            `;
            } else {
                console.error('Failed to fetch weather data.');
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };


    // Function to get currency exchange rates
    const getCurrency = async (base) => {
        try {
            const response = await fetch(`/currency?base=${base}`);
            const data = await response.json();

            if (data.rates) {
                // Display currency rates
                const currencyDataElement = document.getElementById('currency-data');
                let rates = '';
                for (let currency in data.rates) {
                    rates += `<p>${currency}: ${data.rates[currency]}</p>`;
                }
                currencyDataElement.innerHTML = rates;
            } else {
                console.error('Failed to fetch currency data.');
            }
        } catch (error) {
            console.error('Error fetching currency data:', error);
        }
    };

    // Event listener for weather form
    document.getElementById('weather-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const city = document.getElementById('city').value;
        getWeather(city);
    });

    // Event listener for currency form
    document.getElementById('currency-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const base = document.getElementById('base').value;
        getCurrency(base);
    });

    // Fetch and display the random dog image when the page loads
    getRandomDogImage();
});
