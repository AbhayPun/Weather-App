import React from "react";

const WeatherData =({timezone,visibility}) => {
return(
    <div className="WeatherData">
            <p>{timezone}</p>
            <p>{visibility}</p>
    </div>



)

}

export default WeatherData;