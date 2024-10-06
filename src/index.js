import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ForecastPage from './pages/ForecastPage';
import PollutionPage from './pages/PollutionPage';
import WeatherPage from './pages/WeatherPage';



import { createBrowserRouter,
    RouterProvider,
    Route
 } from 'react-router-dom'; 

 const router =createBrowserRouter([
    {
        path:"/",
        element:<App/>,
    },
    {
        path:"LoginPage",
        element:<LoginPage/>,
    },
    {
        path:"WeatherPage",
        element:<WeatherPage/>,
    },
    {
        path:"PollutionPage",
        element:<PollutionPage/>,
    },
    {
        path:"ForecastPage",
        element:<ForecastPage/>,
    },
    {
        path:"SignUpPage",
        element:<SignUpPage/>,
    },
    
 ]);

  
ReactDOM.render(<RouterProvider router ={router}/> , document.getElementById('root'));