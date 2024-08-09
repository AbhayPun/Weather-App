import React, { useEffect,useState } from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, useMap, TileLayer, Marker, Tooltip  } from 'react-leaflet';
import L from 'leaflet';

let center = [28.3949, 84.1240]

const markerIcon = new L.Icon({
  iconUrl: '/Icons/marker_icon.svg', 
  iconSize: [32, 32],
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32] 
});


const MapCenterUpdater = ({ center }) => {
  const map = useMap();

 useEffect (() => {
  map.setView(center, map.getZoom()); // Update the map view with the new center
}, [center, map]);

return null;
}


const MapComponent = ({ prop,prop2 }) => {


  
  return (
    <>
    {prop !== null ?
    <>
  

    <MapContainer center={prop} zoom={8} style={{ width: '100%', height: '500px' }} className='w-1/2 shadow-lg rounded-lg'>

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        
      />
      <Marker position={prop} icon ={markerIcon}>
        <Tooltip>{prop2} </Tooltip>
      </Marker>
      <MapCenterUpdater center={prop} /> 
    </MapContainer>
    </>
   : <p>loading</p>
    }
    </>
      
    );
};

export default MapComponent;