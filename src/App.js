import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import './index.css';
import AutocompleteComponent from './AutocompleteComponent';
import 'leaflet/dist/leaflet.css';
import MapComponent from './MapComponent';



const App = () => {

  const [center, setCenter] = useState(null);
  const [name, setName] = useState(null);
  
  const handleDataChange = useCallback((data) => {
    setCenter(data[0]);
    setName(data[1]);
  }, []);

  



  return (

    <>
      <header className='text-center rounded-lg pb-2 bg-gray-100 border'>
        <h1 className="text-4xl pb-1 pt-1 text-center">Weather Application</h1>
      </header>

      <div className='flex p-1 pt-6'>

        <div className='w-1/2'>

        <header className='text-center rounded-lg mb-1 bg-gray-100 border'>
        <h1 className="text-3xl pb-1 pt-1 text-center">{name}</h1>
        </header>

          <MapComponent prop={center}prop2={name}/>

        </div>

        <div className='w-1/2 m-4 border 6 bg-gray-200 '>

          <AutocompleteComponent onDataChange={handleDataChange}/>



        

        </div>

      </div>

    </>
  );
}




export default App;

