import React from 'react'
import { useState, useEffect } from 'react';


const ForecastData = ({prop}) => {
    const [forecastData, setForecastData] = useState();
    const [timestamp, setTimestamp] = useState(0);
    const url=prop;

useEffect(() => {

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setForecastData(data);  
          })

          
    
}, []);


    const left = ()=> {
        (timestamp === 0  ) ? setTimestamp(0):
        setTimestamp((val) => val - 1);
        
    }

    const right = ()=> {
        
        (timestamp === 39) ? setTimestamp(39):
        setTimestamp((val) => val + 1);
    }




    return (
        <>
        
        

        
         <div className='flex justify-evenly py-3'>
             <button onClick={left} className='border-2 border-gray-700 rounded-lg p-1'>left </button>
             <button onClick={right} className='border-2 border-gray-700 rounded-lg	p-1'> right</button>
             <h1 className='border-2 border-gray-700 rounded-lg	p-1'>Date and Time {forecastData && (forecastData.list[timestamp].dt_txt ? forecastData.list[timestamp].dt_txt : "N/A")}</h1>

         </div>

{forecastData ?

            <table>
                <tr>
            <th>date and time</th>
            <td>{(forecastData.list[timestamp].dt_txt) ? forecastData.list[timestamp].dt_txt : "N/A"}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{forecastData.list[timestamp].weather[0].description ? forecastData.list[timestamp].weather[0].description : "N/A"}</td>
          </tr>
          
          <tr>
            <th>Temperature</th>
            <td>{forecastData.list[timestamp].main.temp ? forecastData.list[timestamp].main.temp : "N/A"} °C</td>
          </tr>
          <tr>
            <th>Feels like</th>
            <td>{forecastData.list[timestamp].main.feels_like ? forecastData.list[timestamp].main.feels_like :"N/A"} °C</td>
          </tr>
          <tr>
            <th>Lowest Temperature</th>
            <td>{forecastData.list[timestamp].main.temp_min ? forecastData.list[timestamp].main.temp_min: "N/A"} °C</td>
          </tr>
          <tr>
            <th>Highest Temperature</th>
            <td>{forecastData.list[timestamp].main.temp_max ? forecastData.list[timestamp].main.temp_max :"N/A"} °C</td>
          </tr>
          <tr>
            <th>Pressure</th>
            <td>{forecastData.list[timestamp].main.pressure ? forecastData.list[timestamp].main.pressure : "N/A"} hPa</td>
          </tr>
          <tr>
            <th>Humidity</th>
            <td>{forecastData.list[timestamp].main.humidity ? forecastData.list[timestamp].main.humidity :"N/A"} %</td>
          </tr>
          <tr>
            <th>Wind Speed</th>
            <td>{forecastData.list[timestamp].main.speed ? forecastData.list[0].main.speed + ' meter/sec' : "N/A"}</td>
          </tr>
          <tr>
            <th>Wind Degrees</th>
            <td>{forecastData.list[timestamp].main.deg ? forecastData.list[0].main.deg + ' °':"N/A"}</td>
          </tr>
          <tr>
            <th>Probability of precipitation</th>
              <td>{(forecastData.list[timestamp].pop * 100)? (forecastData.list[timestamp].pop * 100) : "N/A"} %</td>
            </tr>
            <tr>
              <th>Rain volume for last 3 hours</th>
              <td>{forecastData.list[timestamp].rain ? forecastData.list[0].rain['3h'] +' mm': "N/A"}</td>
            </tr>
          </table> : <p>Fetching Data...</p> 
        
}
            
          </>
        
    )
}


export default ForecastData;