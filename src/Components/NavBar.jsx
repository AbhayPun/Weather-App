// import React from "react";
// import {Link} from "react-router-dom";

// const NavBar = () => {

// return (
//   <>
//   <div>
//   <header className='text-center rounded-lg pb-2 bg-gray-100 border'>
//           <h1 className="text-4xl pb-1 pt-1 text-center">Weather Application</h1>
//   </header>

// <nav class="bg-white border-gray-200 dark:bg-gray-900">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
//     <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

//     <li><Link to = "/LoginPage" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"> LoginPage</Link></li>
//     <li><Link to= "/ForecastPage" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"> ForecastPage</Link></li>
//     <li><Link to = "/PollutionPage" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"> PollutionPage</Link></li>
//     <li><Link to= "/WeatherPage" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"> WeatherPage</Link></li>
//     {/* <li><Link to = "/SignUpPage" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"> SignUpPage</Link></li> */}
  
//       </ul>
//     </div>
//   </div>
// </nav>
// </div>
// </>
// )

// }

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-gray-50 border-b">
      <header className="text-center py-4 bg-teal-500 text-white">
        <h1 className="text-4xl font-medium">Weather Application</h1>
      </header>

      <nav className="bg-white dark:bg-gray-900 shadow-md">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/ForecastPage"
                className="text-teal-700 hover:text-teal-900 dark:text-white dark:hover:text-teal-500"
              >
                Forecast
              </Link>
            </li>
            <li>
              <Link
                to="/PollutionPage"
                className="text-teal-700 hover:text-teal-900 dark:text-white dark:hover:text-teal-500"
              >
                Pollution
              </Link>
            </li>
            <li>
              <Link
                to="/WeatherPage"
                className="text-teal-700 hover:text-teal-900 dark:text-white dark:hover:text-teal-500"
              >
                Weather
              </Link>
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/LoginPage"
                className="text-teal-700 hover:text-teal-900 dark:text-white dark:hover:text-teal-500"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;





