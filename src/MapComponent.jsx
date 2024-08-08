import React from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, useMap, marker, TileLayer } from 'react-leaflet';


const center = [28.3949, 84.1240];


const MapComponent = ()=> {

  
    
    return (
        <MapContainer center={center} zoom={7} style={{ width: '100%', height: '500px'}} className='w-1/2 shadow-lg rounded-lg'>

      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      </MapContainer>

    );
};

export default MapComponent;