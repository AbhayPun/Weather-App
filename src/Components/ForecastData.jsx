// import React from 'react'
// import { useState, useEffect } from 'react';


// const ForecastData = ({prop}) => {
//     const [forecastData, setForecastData] = useState();
//     const [timestamp, setTimestamp] = useState(0);
//     const url=prop;

// useEffect(() => {

//         fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             setForecastData(data);  
//           })

          
    
// }, [url]);


//     const left = ()=> {
//         (timestamp === 0  ) ? setTimestamp(0):
//         setTimestamp((val) => val - 1);
        
//     }

//     const right = ()=> {
        
//         (timestamp === 39) ? setTimestamp(39):
//         setTimestamp((val) => val + 1);
//     }




//     return (
//         <>
        
        

        
//          <div className='flex justify-evenly py-3'>
//              <button onClick={left} className='border-2 border-gray-700 rounded-lg p-1'>left </button>
//              <button onClick={right} className='border-2 border-gray-700 rounded-lg	p-1'> right</button>
//              <h1 className='border-2 border-gray-700 rounded-lg	p-1'>Date and Time {forecastData && (forecastData.list[timestamp].dt_txt ? forecastData.list[timestamp].dt_txt : "N/A")}</h1>

//          </div>

// {forecastData ?

//             <table>
//                 <tr>
//             <th>date and time</th>
//             <td>{(forecastData.list[timestamp].dt_txt) ? forecastData.list[timestamp].dt_txt : "N/A"}</td>
//           </tr>
//           <tr>
//             <th>Description</th>
//             <td>{forecastData.list[timestamp].weather[0].description ? forecastData.list[timestamp].weather[0].description : "N/A"}</td>
//           </tr>
          
//           <tr>
//             <th>Temperature</th>
//             <td>{forecastData.list[timestamp].main.temp ? forecastData.list[timestamp].main.temp : "N/A"} °C</td>
//           </tr>
//           <tr>
//             <th>Feels like</th>
//             <td>{forecastData.list[timestamp].main.feels_like ? forecastData.list[timestamp].main.feels_like :"N/A"} °C</td>
//           </tr>
//           <tr>
//             <th>Lowest Temperature</th>
//             <td>{forecastData.list[timestamp].main.temp_min ? forecastData.list[timestamp].main.temp_min: "N/A"} °C</td>
//           </tr>
//           <tr>
//             <th>Highest Temperature</th>
//             <td>{forecastData.list[timestamp].main.temp_max ? forecastData.list[timestamp].main.temp_max :"N/A"} °C</td>
//           </tr>
//           <tr>
//             <th>Pressure</th>
//             <td>{forecastData.list[timestamp].main.pressure ? forecastData.list[timestamp].main.pressure : "N/A"} hPa</td>
//           </tr>
//           <tr>
//             <th>Humidity</th>
//             <td>{forecastData.list[timestamp].main.humidity ? forecastData.list[timestamp].main.humidity :"N/A"} %</td>
//           </tr>
//           <tr>
//             <th>Wind Speed</th>
//             <td>{forecastData.list[timestamp].main.speed ? forecastData.list[0].main.speed + ' meter/sec' : "N/A"}</td>
//           </tr>
//           <tr>
//             <th>Wind Degrees</th>
//             <td>{forecastData.list[timestamp].main.deg ? forecastData.list[0].main.deg + ' °':"N/A"}</td>
//           </tr>
//           <tr>
//             <th>Probability of precipitation</th>
//               <td>{(forecastData.list[timestamp].pop * 100)? (forecastData.list[timestamp].pop * 100) : "N/A"} %</td>
//             </tr>
//             <tr>
//               <th>Rain volume for last 3 hours</th>
//               <td>{forecastData.list[timestamp].rain ? forecastData.list[0].rain['3h'] +' mm': "N/A"}</td>
//             </tr>
//           </table> : <p>Fetching Data...</p> 
        
// }
            
//           </>
        
//     )
// }


// export default ForecastData;

import React, { useState, useEffect } from "react";

const ForecastData = ({ prop }) => {
    const [forecastData, setForecastData] = useState();
    const [timestamp, setTimestamp] = useState(0);
    const url = prop;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setForecastData(data);
            });
    }, [url]);

    const left = () => {
        setTimestamp((val) => (val > 0 ? val - 1 : 0));
    };

    const right = () => {
        setTimestamp((val) => (val < 39 ? val + 1 : 39));
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center py-3">
                <button onClick={left} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Prev
                </button>
                <h1 className="text-lg font-semibold text-center px-4">{forecastData && forecastData.list[timestamp].dt_txt}</h1>
                <button onClick={right} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Next
                </button>
            </div>

            {forecastData ? (
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
                            <td className="py-2 px-4 border-b capitalize">{forecastData.list[timestamp].weather[0].description || "N/A"}</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Temperature</td>
                            <td className="py-2 px-4 border-b">{forecastData.list[timestamp].main.temp || "N/A"} °C</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Feels Like</td>
                            <td className="py-2 px-4 border-b">{forecastData.list[timestamp].main.feels_like || "N/A"} °C</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Lowest Temperature</td>
                            <td className="py-2 px-4 border-b">{forecastData.list[timestamp].main.temp_min || "N/A"} °C</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Highest Temperature</td>
                            <td className="py-2 px-4 border-b">{forecastData.list[timestamp].main.temp_max || "N/A"} °C</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Pressure</td>
                            <td className="py-2 px-4 border-b">{forecastData.list[timestamp].main.pressure || "N/A"} hPa</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Humidity</td>
                            <td className="py-2 px-4 border-b">{forecastData.list[timestamp].main.humidity || "N/A"} %</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Wind Speed</td>
                            <td className="py-2 px-4 border-b">{forecastData.list[timestamp].wind.speed || "N/A"} m/s</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Wind Degrees</td>
                            <td className="py-2 px-4 border-b">{forecastData.list[timestamp].wind.deg || "N/A"}°</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Probability of Precipitation</td>
                            <td className="py-2 px-4 border-b">{(forecastData.list[timestamp].pop * 100) || "N/A"} %</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Rain Volume for Last 3 Hours</td>
                            <td className="py-2 px-4 border-b">{forecastData.list[timestamp].rain?.["3h"] || "N/A"} mm</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-600">Fetching Data...</p>
            )}
        </div>
    );
};

export default ForecastData;

