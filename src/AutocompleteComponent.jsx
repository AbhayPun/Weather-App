
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import WeatherData from './WeatherData';
import { useState } from 'react';
import PollutionData from './PollutionData';
import ForecastData from './ForecastData';


let apiKey = '2641a57e3b89c2c422220ad89a310ddd';
const AutocompleteComponent = ({onDataChange}) => {


    const [url,setUrl]=useState();
    const [dataType, setDataType] = useState(null);
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

const handleButtonClick = (type) => {
      let newUrl = '';
      setDataType(type); // Set the type of data to fetch
      
      switch (type) {
          case 'weather':
              newUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
              break;
          case 'pollution':
              newUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${apiKey}`;
              break;
          case 'forecast':
              newUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`;
              break;
          default:
              newUrl = '';
      }
      setUrl(newUrl);
  };

  console.log( url);
  console.log(lat, long);

    return (
      
      
      <div>
      <header>
      <div className='flex justify-evenly bg-gray-100'>

          <button className='hover:underline focus:bg-gray-200 py-1 px-10 transition-all border rounded-tl-lg	' onClick={() => handleButtonClick('weather')}  >Today's Weather</button>
          <button className='hover:underline focus:bg-gray-200  py-1 px-10 transition-all border 6' onClick={() => handleButtonClick('pollution')}>Today's Pollution </button>
          <button className='hover:underline focus:bg-gray-200  py-1 px-10 transition-all border 6' onClick={() => handleButtonClick('forecast')}>Forecast </button>
          <button className='hover:underline focus:bg-gray-200  py-1 px-10 transition-all border rounded-tr-lg	' >Historical Pollution </button>

        </div>
        </header>

        <div className="flex items-center justify-center py-3">
        <div className="w-[400px]">
          <ReactSearchAutocomplete items={items} formatResult={formatResult} onSelect={handleOnSelect} styling={styling}/>

                
                    {dataType === 'weather' && <WeatherData prop={url} />}
                    {dataType === 'pollution' && <PollutionData prop={url} />}
                    {dataType === 'forecast' && <ForecastData prop={url} />}
        

          <p>{formatResult}</p>
        </div>
      </div>
    </div>
        

    
   );
   
                  
};

  
  export default AutocompleteComponent;
