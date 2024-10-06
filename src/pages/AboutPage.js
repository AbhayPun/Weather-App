import React from "react";

const AboutPage = () => {
    return (
        <>
        <h1> About This Page </h1>
        <p>I wanted to build an application that would forecast weather and show pollution data in Nepal. I also am implementing a feature where a user can be sent the weather and air pollution in a given area periodically via email</p>
        <h2> Technologies used: </h2>
        <ul>
            <li>React: used to build user interface and implement state management</li>
            <li>OpenWeather API: used to retrive real time data in with regard to the weather </li>
            <li>OpenStreetMap: used to render map of the location</li>
            <li>PostgreSQL: used to store user data</li>

        </ul>
        </>
    )
}

export default AboutPage