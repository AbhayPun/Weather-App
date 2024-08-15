import React from 'react';
import { useState, useEffect } from 'react';



const PollutionData = ({prop}) => {
    const [pollutionData, setPollutionData] = useState();
    const url=prop;
    useEffect(() => {
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPollutionData(data);
        })
          
          

    }, []);


    return (
        
         <>

{pollutionData ?
       <table >
        <tr>
          <th>Air Quality Index:</th>
          <td>{pollutionData.list[0].main.aqi}</td>
        </tr>
        <tr>
           <th>co:</th>
           <td>{pollutionData.list[0].components.co}</td>
         </tr>
         <tr>
           <th>no: </th>
           <td>{pollutionData.list[0].components.no}</td>
         </tr>
         <tr>
           <th>no2</th>
           <td>{pollutionData.list[0].components.no2}</td>
         </tr>
         <tr>
           <th>o3</th>
           <td>{pollutionData.list[0].components.o3}</td>
         </tr>
         <tr>
           <th>so2</th>
           <td>{pollutionData.list[0].components.so2}</td>
         </tr>
         <tr>
           <th>pm2_5</th>
           <td>{pollutionData.list[0].components.pm2_5}</td>
         </tr>
         <tr>
           <th>pm10</th>
           <td>{pollutionData.list[0].components.pm10}</td>
         </tr>
         <tr>
           <th>nh3</th>
           <td>{pollutionData.list[0].components.nh3}</td>
         </tr>
        

        </table> : <p>Fetching Data...</p> }
    

</>
       
     
    )
}

export default PollutionData;