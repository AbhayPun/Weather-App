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
                         
          });

    }, []);
console.log(pollutionData);   
   

    return (
 
        <>
      {pollutionData && 
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
           <td>{pollutionData.list[1].components.no}</td>
         </tr>
         <tr>
           <th>no2</th>
           <td>{pollutionData.list[1].components.no2}</td>
         </tr>

        </table>
      
   
     
      }

   
      </>
    )
}

export default PollutionData;