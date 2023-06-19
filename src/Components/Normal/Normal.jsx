import React from "react";
import styles from './style.module.css'
import weatherIcon from './icon-weather.jpg'

export default function Normal() {

    return(
            <div className={styles.infoNormal}>
            <h1>Weather forecast in the city you are interested in</h1>
            <p>Enter a city or click on "home" to search for geolocation</p>
                <img src={weatherIcon} width={"300px"}></img>
            </div>
    )
}