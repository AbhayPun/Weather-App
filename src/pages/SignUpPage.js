// import React from "react"
// import NavBar from "../Components/NavBar"
// import axios from "axios"
// import {useState} from "react"
// import EmailExists from "../Components/EmailExists"
// import UserNameExists from "../Components/UserNameExists"
// import AccountCreatedComponent from "../Components/AccountCreatedComponent"
// const SignUpPage = () => {

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");
//     const [age, setAge] = useState("");
//     const [emailExists, setEmailExists] = useState();
//     const [usernameExists, setUsernameExists] = useState();
//     const [AccountCreated, setAccountCreated] = useState();


//     const checkEmailExists = async () => {
//     const response = await axios.get(`http://localhost:8080/api/v1/login/email-exists`, {
//         params: { email },
//         headers:{
//             'Content-Type': 'application/json'
//           }
//     });
//     setEmailExists(response.data);
//     console.log("from function " + emailExists);
//     return response.data;
//     }   

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



//     const handleClick = async (e) => {
//         e.preventDefault()

//         const emailExistsResponse = await checkEmailExists();
//         const usernameExistsResponse = await checkUserNameExists();

//         console.log("emailExists " + emailExists);
//         console.log("usernameExists " + usernameExists);
    

//         if(emailExistsResponse || usernameExistsResponse ) {
//             setAccountCreated(false);
//         }
        

//         else {
//         const formData = {
//             username,
//             password,
//             email,
//             age,
//          }

         
        
//         await axios.post('http://localhost:8080/api/v1/login', formData,{
//         headers: {
//           'Content-Type': 'application/json'
//         }
        
//       })
//       setAccountCreated(true);

//     }
//     }



//     return (
//         <>
//             <header className='text-center rounded-lg pb-2 bg-gray-100 border mb-10'>
//           <h1 className="text-4xl pb-1 pt-1 text-center">Weather Application</h1>
//   </header>
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
//                                 {usernameExists && <UserNameExists/>}
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
//                         <div className="m-3 px-3">
//                             <label className="block"> Email:</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 className="border-2 p-1"
//                                 value={email}
//                                 onChange = {(e) => setEmail(e.target.value)}
//                                 required />
//                                 {emailExists && <EmailExists/>}
//                         </div>
//                         <div className="m-3 px-3">
//                             <label className="block"> Age:</label>
//                             <input
//                                 type="number"
//                                 id="age"
//                                 className="border-2 p-1"
//                                 value={age}
//                                 onChange = {(e) => setAge(e.target.value)}
//                                 required />
//                         </div>
                        
//                         <div className="p-1 text-right m-2">
//                             <button type="submit" className="bg-gray-400 p-1" onClick={handleClick}>Sign up</button>
//                         </div>

//                         {AccountCreated && <AccountCreatedComponent/>}


//                     </form>

                    

//                 </div>

//             </div>
//         </>
//     )

// }



// export default SignUpPage

import React, { useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import EmailExists from "../Components/EmailExists";
import UserNameExists from "../Components/UserNameExists";
import AccountCreatedComponent from "../Components/AccountCreatedComponent";

const SignUpPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [emailExists, setEmailExists] = useState();
    const [usernameExists, setUsernameExists] = useState();
    const [AccountCreated, setAccountCreated] = useState();

    const checkEmailExists = async () => {
        const response = await axios.get(`http://localhost:8080/api/v1/login/email-exists`, {
            params: { email },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setEmailExists(response.data);
        return response.data;
    }

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

    const handleClick = async (e) => {
        e.preventDefault();

        const emailExistsResponse = await checkEmailExists();
        const usernameExistsResponse = await checkUserNameExists();

        if (emailExistsResponse || usernameExistsResponse) {
            setAccountCreated(false);
        } else {
            const formData = { username, password, email, age };

            await axios.post('http://localhost:8080/api/v1/login', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setAccountCreated(true);
        }
    }

    return (
        <>
            <header className='text-center rounded-lg pb-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white mb-10'>
                <h1 className="text-4xl font-semibold">Weather Application</h1>
            </header>

            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-center text-2xl font-semibold mb-4">Sign-Up Form</h1>
                    <hr className="mb-6"/>

                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            {usernameExists && <UserNameExists />}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Password:</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {emailExists && <EmailExists />}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Age:</label>
                            <input
                                type="number"
                                id="age"
                                className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>

                        <div className="text-right">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                onClick={handleClick}
                            >
                                Sign Up
                            </button>
                        </div>

                        {AccountCreated && <AccountCreatedComponent />}
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUpPage;
