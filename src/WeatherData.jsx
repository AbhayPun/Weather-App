import React from "react";

const WeatherData =({prop}) => {
    // console.log(typeof{prop})
    return(
    <div className="WeatherData">
        

{/* {prop ? (
<>

        <table>
            <tr> 
                <th>
                Visibility
                </th>
                <td>
                {prop.visibility} m
                </td>
            </tr>
            <tr> 
                <th>
                Current Temperature
                </th>
                <td>
                {prop.main.temp} °C
                </td>
            </tr>
            <tr> 
                <th>
                Minimum Temperature
                </th>
                <td>
                {prop.main.temp_min} °C
            </td>
            </tr>
            <tr> 
            <th>
                Maximum Temperature
            </th>
            <td>
                {prop.main.temp_max} °C
            </td>
            </tr>
            <tr> 
            <th>
                Pressure
            </th>
            <td>
                {prop.main.pressure} hPa
            </td>
            </tr>
            <tr> 
            <th>
                Humidity
            </th>
            <td>
                {prop.main.humidity} %
            </td>
            </tr>
            <tr> 
            <th>
                Wind Speed
            </th>
            <td>
                {prop.wind.speed} meter/sec
            </td>
            </tr>
            <tr> 
            <th>
                Wind Degrees
            </th>
            <td>
                {prop.wind.deg} °
            </td>
            </tr>

        </table>

      </>  
)
        : 
        
        (null

        )}    */}

    </div>


    )
}


export default WeatherData;