# Weather, Dog Images, and Currency Exchange Viewer

This project integrates three APIs to provide a weather report, a random dog image, and currency exchange rates.

## Features:
- **Weather**: Displays the current temperature, description, humidity, pressure, wind speed, and other weather details for a specified city.
- **Random Dog Image**: Fetches a random dog image from an external API and displays it.
- **Currency Exchange Rates**: Shows the exchange rates for a given base currency against various other currencies.

## Setup Instructions:

### Prerequisites:
- Node.js installed.
- A web browser.
- Internet connection.

### Installation Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-dog-currency.gitRun the server:
   cd weather-dog-currency
2. Install dependencies:
   npm install
3. Create a .env file with the following API keys:
   OPENWEATHER_API_KEY=your_openweather_api_key
   EXCHANGE_RATE_API_KEY=you_exchamgerate_api_key
4.Run the server:
  node server.js
5. Access the page at http://localhost:3000.
   
## How it works:
- **Weather**: When the user enters a city name and submits the form, the app sends a request to the OpenWeather API.
- **Dog Image**: The page loads a random dog image every time the page is refreshed.
- **Currency Exchange**: The user enters a base currency and sees exchange rates for various currencies.

## Technologies Used:
- **Node.js**
- **Express**
- **Axios**
- **HTML/CSS**
- **JavaScript**
