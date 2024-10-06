// import NavBar from "../Components/NavBar";
// import React from 'react';
// import { useEffect, useState, useCallback } from 'react';
// import '../index.css';
// import AutocompleteComponent from '../Components/AutocompleteComponent';
// import 'leaflet/dist/leaflet.css';
// import MapComponent from '../Components/MapComponent';


// const ForecastPage = () => {

//     const [center, setCenter] = useState(null);
//     const [name, setName] = useState(null);
    
//     const handleDataChange = useCallback((data) => {
//       setCenter(data[0]);
//       setName(data[1]);
//     }, []);
  
  
//     return (
  
//       <>
//       <NavBar/>
        
  
//         <div className='flex p-1 pt-6'>
  
//           <div className='w-1/2'>
  
//           <header className='text-center rounded-lg mb-1 bg-gray-100 border'>
//           <h1 className="text-3xl pb-1 pt-1 text-center">{name}</h1>
//           </header>
  
//             <MapComponent prop={center}prop2={name}/>
  
//           </div>
  
//           <div className='w-1/2 m-4 border 6 bg-gray-200 '>
  
//             <AutocompleteComponent onDataChange={handleDataChange} type={`forecast`} />
  
  
  
          
  
//           </div>
  
//         </div>
  
//       </>
//     );
// }

// export default ForecastPage;

import NavBar from "../Components/NavBar";
import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import '../index.css';
import AutocompleteComponent from '../Components/AutocompleteComponent';
import 'leaflet/dist/leaflet.css';
import MapComponent from '../Components/MapComponent';

const ForecastPage = () => {

    const [center, setCenter] = useState(null);
    const [name, setName] = useState(null);
    
    const handleDataChange = useCallback((data) => {
      setCenter(data[0]);
      setName(data[1]);
    }, []);
  
    return (
      <>
        <NavBar/>
        <div className='flex flex-col lg:flex-row p-4 lg:space-x-6'>
          <div className='lg:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden'>
            <header className='text-center bg-gradient-to-r from-blue-500 to-teal-400 text-white py-4 mb-2'>
              <h1 className="text-3xl font-semibold">{name ? name : "Select a location"}</h1>
            </header>
            <div className="h-96">
              <MapComponent prop={center} prop2={name}/>
            </div>
          </div>
  
          <div className='lg:w-1/2 mt-6 lg:mt-0 p-6 border border-gray-300 bg-gray-100 shadow-lg rounded-lg'>
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Search for a Location</h2>
            <AutocompleteComponent onDataChange={handleDataChange} type={`forecast`} />
          </div>
        </div>
      </>
    );
}

export default ForecastPage;