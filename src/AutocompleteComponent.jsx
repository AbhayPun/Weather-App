import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import WeatherData from './WeatherData';
import { useEffect, useState } from 'react';

let apiKey = '2641a57e3b89c2c422220ad89a310ddd';
let districtName ;
let lat;
let long;
let urlWeather;
const AutocompleteComponent = () => {

    // useEffect(()=>{
    //     makeAPICall();
    //    })


    const [alldata,setalldata] =useState();
    const items = [
        {
          id: 0,
          name: 'Koshi',
          latitude:27.3372,
          longitude: 87.3811
        },
        {
          id: 1,
          name: 'Madesh',
          latitude:27.0135,
          longitude: 85.6846
        },
        {
          id: 2,
          name: 'Bagmati',
          latitude:27.6625,
          longitude: 85.4376
        },
        {
          id: 3,
          name: 'Gandaki',
          latitude:28.3591,
          longitude:84.1013
        },
        {
          id: 4,
          name: 'Lumbini',
          latitude:27.9207,
          longitude: 82.7347

        },
        {
          id: 5,
          name: 'Karnali',
          latitude:29.3863, 
          longitude:82.3886
        },
        {
          id: 6,
          name: 'Sudurpashchi',
          latitude:29.2988, 
          longitude:80.9871
        }
    ]
    
   

          const makeAPICall = async () => {
            fetch(urlWeather)
            .then(response => response.json())
            .then(data => {
                    
                   setalldata(data);
              });
             
              console.log("alldata"+alldata)
              
        }
        

            const handleOnSelect = (item) => {
                lat = item.latitude;
                long = item.longitude;
                urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
                makeAPICall();
                }

          const formatResult = (item) => {
          
        return (

              <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
              </>
              
            )
          }


    return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            formatResult={formatResult}
            onSelect={handleOnSelect}
          />
        <WeatherData {...alldata}/>

          <p>{formatResult}</p>
        </div>
      </header>
    </div>
    
   );
};

  
  export default AutocompleteComponent;
