import React from "react";
import Header from "./components/Header/Header";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = React.useState("");
  const [weatherData, setWeatherData] = React.useState({});
  const apiKey = "2f7be2db75bd263317e4a3b27dfe0f82";

  const getWeather = (event,{inputValue}) => {
    event.preventDefault();
    setCity(inputValue);
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`)
      .then((res) => {setWeatherData(res.data)}).catch((error) =>{console.log('Error:',error)});
  };
  

  return (
    <div className="App">
      <Header handleWeather={getWeather} />
    { weatherData.main && <WeatherInfo 
                            infoCity={city}
                            temperature = {weatherData.main.temp} 
                            feels = {weatherData.main.feels_like} 
                            maxTemp = {weatherData.main.temp_max} 
                            minTemp = {weatherData.main.temp_min}
                            icon = {weatherData.weather[0].icon}
                            />}
    </div>
  );
}

export default App;
