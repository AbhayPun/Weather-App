// import React from 'react';
// import { useState, useEffect } from 'react';



// const PollutionData = ({prop}) => {
//     const [pollutionData, setPollutionData] = useState();
//     const url=prop;
//     useEffect(() => {
    
//         fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             setPollutionData(data);

//         })
          
          

//     }, [url]);


//     return (
        
//          <>

// {pollutionData ?
//        <table >
//         <tr>
//           <th>Air Quality Index:</th>
//           <td>{pollutionData.list[0].main.aqi}</td>
//         </tr>
//         <tr>
//            <th>co:</th>
//            <td>{pollutionData.list[0].components.co}</td>
//          </tr>
//          <tr>
//            <th>no: </th>
//            <td>{pollutionData.list[0].components.no}</td>
//          </tr>
//          <tr>
//            <th>no2</th>
//            <td>{pollutionData.list[0].components.no2}</td>
//          </tr>
//          <tr>
//            <th>o3</th>
//            <td>{pollutionData.list[0].components.o3}</td>
//          </tr>
//          <tr>
//            <th>so2</th>
//            <td>{pollutionData.list[0].components.so2}</td>
//          </tr>
//          <tr>
//            <th>pm2_5</th>
//            <td>{pollutionData.list[0].components.pm2_5}</td>
//          </tr>
//          <tr>
//            <th>pm10</th>
//            <td>{pollutionData.list[0].components.pm10}</td>
//          </tr>
//          <tr>
//            <th>nh3</th>
//            <td>{pollutionData.list[0].components.nh3}</td>
//          </tr>
        

//         </table> : <p>Fetching Data...</p> }
    

// </>
       
     
//     )
// }

// export default PollutionData;

import React, { useState, useEffect } from 'react';

const PollutionData = ({ prop }) => {
    const [pollutionData, setPollutionData] = useState();
    const url = prop;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPollutionData(data);
            });
    }, [url]);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            {pollutionData ? (
                <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="py-2 px-4 border-b font-semibold">Attribute</th>
                            <th className="py-2 px-4 border-b font-semibold">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Air Quality Index</td>
                            <td className="py-2 px-4 border-b">{pollutionData.list[0].main.aqi} μg/m3</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">CO</td>
                            <td className="py-2 px-4 border-b">{pollutionData.list[0].components.co} μg/m3</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">NO</td>
                            <td className="py-2 px-4 border-b">{pollutionData.list[0].components.no} μg/m3</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">NO₂</td>
                            <td className="py-2 px-4 border-b">{pollutionData.list[0].components.no2} μg/m3</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">O₃</td>
                            <td className="py-2 px-4 border-b">{pollutionData.list[0].components.o3} μg/m3</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">SO₂</td>
                            <td className="py-2 px-4 border-b">{pollutionData.list[0].components.so2} μg/m3</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">PM2.5</td>
                            <td className="py-2 px-4 border-b">{pollutionData.list[0].components.pm2_5} μg/m3</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">PM10</td>
                            <td className="py-2 px-4 border-b">{pollutionData.list[0].components.pm10} μg/m3</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">NH₃</td>
                            <td className="py-2 px-4 border-b">{pollutionData.list[0].components.nh3} μg/m3</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-600">Fetching Data...</p>
            )}
        </div>
    );
};

export default PollutionData;
