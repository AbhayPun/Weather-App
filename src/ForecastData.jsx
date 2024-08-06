import React from 'react'

const ForecastData = (prop) => {

//console.log(typeof{prop})
    return (
<div className="WeatherData">

{prop ? (
<>
<p> {prop.main.temp}</p>
<p> {prop.weather[0].description}</p>
        

      </>  
)
        : (null

        )}   

    </div>

    )
}

export default ForecastData;