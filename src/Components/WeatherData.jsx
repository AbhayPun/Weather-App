// import React from "react";
// import { useState, useEffect } from 'react';



// const WeatherData =({prop}) => {
//     const [weatherData, setWeatherData] = useState();
//     const url=prop;


//  useEffect(() => {
   
//         fetch(url)
//         .then(response => response.json())
//         .then(data => {
//           setWeatherData(data);
//           })


// },[prop]);



//     return(
//       <>
//   {weatherData ?
    
//        <table >
//     <tr>
//     <th>Description</th>
//     <td>{weatherData.weather[0].description}</td>
//   </tr>
//   <tr>
//     <th>Temperature</th>
//     <td>{weatherData.main.temp} °C</td>
//   </tr>
  
//   <tr>
//     <th>Feels like</th>
//     <td>{weatherData.main.feels_like} °C</td>
//   </tr>
//   <tr>
//     <th>Lowest Temperature</th>
//     <td>{weatherData.main.temp_min} °C</td>
//   </tr>
//   <tr>
//     <th>Highest Temperature</th>
//     <td>{weatherData.main.temp_max} °C</td>
//   </tr>
//   <tr>
//     <th>Pressure</th>
//     <td>{weatherData.main.pressure} hPa</td>
//   </tr>
//   <tr>
//     <th>Humidity</th>
//     <td>{weatherData.main.humidity} %</td>
//   </tr>
//   <tr>
//     <th>Wind Speed</th>
//     <td>{weatherData.wind.speed} meter/sec</td>
//   </tr>
//   <tr>
//     <th>Wind Degrees</th>
//     <td>{weatherData.wind.deg}°</td>
//   </tr>
//   </table>  : <p>Fetching Data...</p>
   
//   }
  
//    </>

//     )
// }


// export default WeatherData;

import React, { useState, useEffect } from "react";

const WeatherData = ({ prop }) => {
    const [weatherData, setWeatherData] = useState();
    const url = prop;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data);
            });
    }, [prop]);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            {weatherData ? (
                <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="py-2 px-4 border-b font-semibold">Attribute</th>
                            <th className="py-2 px-4 border-b font-semibold">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Description</td>
                            <td className="py-2 px-4 border-b capitalize">{weatherData.weather[0].description}</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Temperature</td>
                            <td className="py-2 px-4 border-b">{weatherData.main.temp} °C</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Feels Like</td>
                            <td className="py-2 px-4 border-b">{weatherData.main.feels_like} °C</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Lowest Temperature</td>
                            <td className="py-2 px-4 border-b">{weatherData.main.temp_min} °C</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Highest Temperature</td>
                            <td className="py-2 px-4 border-b">{weatherData.main.temp_max} °C</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Pressure</td>
                            <td className="py-2 px-4 border-b">{weatherData.main.pressure} hPa</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Humidity</td>
                            <td className="py-2 px-4 border-b">{weatherData.main.humidity} %</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Wind Speed</td>
                            <td className="py-2 px-4 border-b">{weatherData.wind.speed} m/s</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Wind Degrees</td>
                            <td className="py-2 px-4 border-b">{weatherData.wind.deg}°</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-600">Fetching Data...</p>
            )}
        </div>
    );
};

export default WeatherData;
