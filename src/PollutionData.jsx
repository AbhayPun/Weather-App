import React from 'react';

const PollutionData = (prop) => {
    //console.log(typeof{prop})

    return (
        <div className="PollutionData">

{prop ? (
<>
<p>{prop.list[0].main.aqi} </p>
<p>{prop.list[0].components.co} </p>

      </>  
)
        : (<p> </p>

        )}   

    </div>

    )
}

export default PollutionData;