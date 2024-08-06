import React from 'react';
import { useEffect, useState } from 'react';
import'./index.css';
import AutocompleteComponent from './AutocompleteComponent';
import 'leaflet/dist/leaflet.css';
import MapComponent from './MapComponent';



const App = () => {
  
  const [center, setCenter] = useState([28.3949, 84.1240]);
      const handleCenterChange = (newCenter) => {
        setCenter(newCenter);
    };


    return (

      <>
      <header className='text-center rounded-lg pb-2 bg-gray-100 border'> 
      <h1 className="text-4xl pb-1 pt-1 text-center">Weather Application</h1>
      </header>

      <div className='flex p-1 pt-6'>

      <div className='w-1/2'>
        
        
        <MapComponent /> 

      </div>

      <div className='w-1/2 m-4 shadow-lg rounded-lg bg-gray-200 '> 
        
        
                  

        
        
         <div className='flex justify-center pt-4'>

        <AutocompleteComponent/>

        
        </div>

      </div>

       

      </div>
      
      </> 
       );  
    }

    


export default App;

 