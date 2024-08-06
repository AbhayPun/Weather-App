import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import WeatherData from './WeatherData';
import { useEffect, useState, useContext } from 'react';
import MapComponent from './MapComponent';
import PollutionData from './PollutionData';
import ForecastData from './ForecastData';


let apiKey = '2641a57e3b89c2c422220ad89a310ddd';
let lat;
let long;
let urlWeather;
let urlPollution;
let center = [28.3949, 84.1240]
const AutocompleteComponent = () => {


    const [alldata,setalldata] =useState();
    const [url,seturl]=useState();
    const [dataType, setDataType] = useState(null);

    const styling = {
      border: '2px solid #4a90e2',
      borderRadius: '8px',
      input: {
          padding: '12px',
          fontSize: '16px',
          color: '#333'
      }

    
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
    
    const handleButtonClick = (type) => {
      setDataType(type); // Set the type of data to fetch
      switch (type) {
          case 'weather':
              seturl(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);
              break;
          case 'pollution':
              seturl(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${apiKey}`);
              break;
          case 'forecast':
              seturl(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`);
              break;
          default:
              seturl('');
      }
  };
   

          const makeAPICall = async () => {

            if(url) {
            fetch(url)
            .then(response => response.json())
            .then(data => {
                   setalldata(data);
              });
            }
             
        }

            const handleOnSelect = (item) => {
                lat = item.latitude;
                long = item.longitude;
                //urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
                urlWeather = url;
                makeAPICall();
                }

          const formatResult = (item) => {
          center = [item.latitude, item.longitude]

        return (

              <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
                
              </>
              
            )
          }
        
    return (
      
      
    <div className="App">
      <header className="App-header">
      <div className='flex justify-evenly bg-gray-100 '>

          <button className='hover:underline focus:bg-gray-200 py-2 px-8 transition-all' onClick={() => handleButtonClick('weather')}  >Today's Weather</button>
          <button className='hover:underline focus:bg-gray-200 py-2 px-8 transition-all' onClick={() => handleButtonClick('pollution')}>Today's Pollution </button>
          <button className='hover:underline focus:bg-gray-200 py-2 px-8 transition-all' onClick={() => handleButtonClick('forecast')}>Forecast </button>
          <button className='hover:underline focus:bg-gray-200 py-2 px-8 transition-all' >Historical Pollution </button>

        </div>
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            formatResult={formatResult}
            onSelect={handleOnSelect}
            styling={styling}
          />

                
                
                    {dataType === 'weather' && <WeatherData prop={alldata} />}
                    {dataType === 'pollution' && <PollutionData prop={alldata} />}
                    {dataType === 'forecast' && <ForecastData prop={alldata} />}
        

          <p>{formatResult}</p>
        
        </div>
      </header>
    </div>
        

    
   );
   
                  
};

  
  export default AutocompleteComponent;
