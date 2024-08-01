import React from 'react';
import { useEffect, useState } from 'react';
import { MapContainer, Map, Marker, Popup, TileLayer } from 'react-leaflet';
import'./index.css';
import 'leaflet/dist/leaflet.css';
import AutocompleteComponent from './AutocompleteComponent';
import WeatherData from './WeatherData';

let apiKey = '2641a57e3b89c2c422220ad89a310ddd';
let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=${apiKey}
`;


const center = [28.3949, 84.1240];

const App = () => {

    const [weatherDatas, setWeatherDatas] = useState([]);
    
    return (

      <>
      <header className='text-center rounded-lg'> 
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center shadow-md">Weather Application</h1>
      </header>
      <div className='flex p-1'>

      <div className='w-1/2'>
        <MapContainer center={center} zoom={7} style={{ width: '100%', height: '500px'}} className='w-1/2 shadow-lg rounded-lg'>


        
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
       </MapContainer>
      </div>

      <div className='w-1/2 m-4 shadow-lg rounded-lg bg-palette-200'> 

        <div className='text-center'>
        
        <AutocompleteComponent/>
         <WeatherData {...weatherDatas} />
        
        </div>

        </div>
     
  
     

      </div>
      </> 
       );  
    }

    


export default App;

 