import React from "react";
import { useState, useEffect } from 'react';



const WeatherData =({prop}) => {
    const [weatherData, setWeatherData] = useState();
    const url=prop;

 useEffect(() => {
   
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setWeatherData(data);         
            console.log(weatherData);         
          });

},[]);
console.log("over here friends " + weatherData);    

    return(
      <>
      {weatherData ?
      
       <table >
    <tr>
    <th>Description</th>
    <td>{weatherData.weather[0].description}</td>
  </tr>
  <tr>
    <th>Temperature</th>
    <td>{weatherData.main.temp} °C</td>
  </tr>
  
  <tr>
    <th>Feels like</th>
    <td>{weatherData.main.feels_like} °C</td>
  </tr>
  <tr>
    <th>Lowest Temperature</th>
    <td>{weatherData.main.temp_min} °C</td>
  </tr>
  <tr>
    <th>Highest Temperature</th>
    <td>{weatherData.main.temp_max} °C</td>
  </tr>
  <tr>
    <th>Pressure</th>
    <td>{weatherData.main.pressure} hPa</td>
  </tr>
  <tr>
    <th>Humidity</th>
    <td>{weatherData.main.humidity} %</td>
  </tr>
  <tr>
    <th>Wind Speed</th>
    <td>{weatherData.wind.speed} meter/sec</td>
  </tr>
  <tr>
    <th>Wind Degrees</th>
    <td>{weatherData.wind.deg}°</td>
  </tr>
  </table> : <p>Fetching Data...</p>
   
      }
    </>

    )
}


export default WeatherData;