import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo]= useState({
        city: "Mathura",
        feelsLike: 11.93,
        humidity: 61,
        temp: 12.98,
        tempMax: 12.98,
        tempMin: 12.98,
        weather: "clear sky",
    })

    let updateInfo= (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App By Sukku</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}