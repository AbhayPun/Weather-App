// import React from "react";
// import {useState} from "react";
// import {Link} from "react-router-dom";
// import axios from "axios";


// const LoginPage = () => {

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [usernameExists, setUsernameExists] = useState();
//     const [passwordExists, setPasswordExists] = useState();
//     const [accountccountCreated, setAccountCreated] = useState();

//     const checkUserNameExists = async () => {
//         const response = await axios.get(`http://localhost:8080/api/v1/login/username-exists`, {
//             params: { username },
//             headers:{
//                 'Content-Type': 'application/json'
//               }
//         });
//         setUsernameExists(response.data);
//         console.log("from function " + usernameExists);
//         return response.data;
//         } 

//         const checkPasswordExists = async () => {
//             const response = await axios.get(`http://localhost:8080/api/v1/login/password-exists`, {
//                 params: { password },
//                 headers:{
//                     'Content-Type': 'application/json'
//                   }
//             });
//             setPasswordExists(response.data);
//             console.log("from function " + password);
//             return response.data;
//             } 

//             const handleClick = async (e) => {
//                 e.preventDefault()
        
//                 const usernameExistsResponse = await checkUserNameExists();
//                 const passwordExistsResponse = await checkPasswordExists();
        
//                 console.log("emailExists " + passwordExists);
//                 console.log("usernameExists " + usernameExists);
            
        
//                 if(!usernameExistsResponse ) {
//                     //display username does not exist
//                 }
//                 else if (!passwordExistsResponse) {
//                     //display password does not exist
//                 }
                
//                 else {
//                 const formData = {
//                     username,
//                     password,
//                  }
        
        
//             }
//             }

    
//     return (

//         <>
//             <header className='text-center rounded-lg pb-2 bg-gray-100 border mb-10'>
//           <h1 className="text-4xl pb-1 pt-1 text-center">Weather Application</h1>
//             </header>
//             <div className="flex justify-center items-center">
//                 <div className="w-96 p-1 shadow-lg bg-gray-100 ">
//                     <div>
//                         <h1 className="text-center text-lg"> Sign-Up Form </h1>
//                     </div>

//                     <hr/>
//                     <form >
//                         <div className="m-3 px-3">
//                             <label className="block"> Name:</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 className="border-2 p-1"
//                                 value={username}
//                                 onChange = {(e) => setUsername(e.target.value)}
//                                 required />
//                         </div>
//                         <div className="m-3 px-3">
//                             <label className="block"> Password:</label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 className="border-2 p-1"
//                                 value={password}
//                                 onChange = {(e) => setPassword(e.target.value)}
//                                 required />
//                         </div>
                        
                        
//                         <div className="p-1 text-right m-2">
//                             <button type="submit" className="bg-gray-400 p-1" onClick={handleClick}> Login </button>
//                         </div>



//                     </form>

                    

//                 </div>

//             </div>

//             <ul>
//     <li>Dont't have an account? <Link to= "/SignUpPage" className = "underline"> Signup </Link></li>
//     </ul>
//         </>


    
//     )

// }

// export default LoginPage


import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserOrPasswordIncorrect from "../Components/UserOrPasswordIncorrect";

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameExists, setUsernameExists] = useState();
    const [passwordExists, setPasswordExists] = useState();
    const [userPasswordExists, setUserPasswordExists] = useState();

    const checkUserNameExists = async () => {
        const response = await axios.get(`http://localhost:8080/api/v1/login/username-exists`, {
            params: { username },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setUsernameExists(response.data);
        return response.data;
    }

    const checkPasswordExists = async () => {
        const response = await axios.get(`http://localhost:8080/api/v1/login/password-exists`, {
            params: { password },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPasswordExists(response.data);
        return response.data;
    }

    const handleClick = async (e) => {
        e.preventDefault();

        const usernameExistsResponse = await checkUserNameExists();
        const passwordExistsResponse = await checkPasswordExists();

        console.log("passwordExists " + passwordExists);
        console.log("usernameExists " + usernameExists);


        if (!usernameExistsResponse) {
            setUserPasswordExists(false);
        } else if (!passwordExistsResponse) {
            setUserPasswordExists(false);
        } else {
            setUserPasswordExists(true);
        }

    }

    return (
        <>
            <header className='text-center rounded-lg py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white mb-10 shadow-lg'>
                <h1 className="text-4xl font-semibold">Weather Application</h1>
            </header>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-96 p-6 shadow-lg bg-white rounded-lg">
                    <div>
                        <h1 className="text-center text-2xl font-semibold mb-6">Login Form</h1>
                    </div>
                    <hr className="mb-6"/>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Username:</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Password:</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <div className="text-right">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                onClick={handleClick}
                            >
                                Login
                            </button>
                            {!userPasswordExists && <UserOrPasswordIncorrect/> }
                        </div>
                    </form>
                </div>
            </div>
            <ul className="text-center mt-4 pb-3">
                <li className="text-gray-600">Don't have an account? 
                    <Link to="/SignUpPage" className="text-blue-500 underline ml-1">Sign Up</Link>
                </li>
            </ul>
        </>
    );
}

export default LoginPage;

