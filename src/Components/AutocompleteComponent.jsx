import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import WeatherData from './WeatherData';
import { useEffect, useState } from 'react';
import PollutionData from './PollutionData';
import ForecastData from './ForecastData';

const apiKey = process.env.REACT_APP_API_KEY;

const AutocompleteComponent = ({onDataChange, type}) => {

  

    const [url,setUrl]=useState();
    const [lat, setLat] =useState();
    const [long, setLong] =useState();


    const styling = {
      border: '2px solid rgb(75 85 99)',
      borderRadius: '0.5rem'
    };

    
    
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

    

            const handleOnSelect = (item) => {
                setLat(item.latitude);
                setLong(item.longitude);
                onDataChange([[item.latitude, item.longitude], item.name]);
                }

                

          const formatResult = (item) => {

        return (

              <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
                
              </>
              
            )
          }

          useEffect(() => {
            if (lat !== undefined && long !== undefined && type !== undefined) {
                setUrl(`https://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${long}&appid=${apiKey}`);
            }
        }, [lat, long, type]);


    return (
      
      
      <div>
   
        <div className="flex items-center justify-center py-3">
        <div className="w-[400px]">
          <ReactSearchAutocomplete items={items} formatResult={formatResult} onSelect={handleOnSelect} styling={styling}/>


                    {type === 'air_pollution' && <PollutionData prop={url} />}
                    {type === 'weather' && <WeatherData prop={url} />}
                    {type === 'forecast' && <ForecastData prop={url} />}
        

          <p>{formatResult}</p>
        </div>
      </div>
    </div>
        

    
   );
   
                  
};

  
  export default AutocompleteComponent;
