import React,{createContext, useContext,useEffect, useState} from 'react'
import axios from "axios";
import data from "../data/cities_of_turkey.json";
const WeatherContext = createContext();

const WeatherProvider = ({children}) => {
const cities = data;
const [city, setCity] = useState("Van");
const [weatherData, setWeatherData] = useState([]);



useEffect(() =>{
  let selectCities = data.filter(item => item.name === city)[0]
  let key = "d6f16a77953c45078bd154119231902"
  axios(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${selectCities.latitude},${selectCities.longitude}&days=8&hour=24`)
  .then(res=>res.data)
  .then(res=>res.forecast)
  .then(res=>setWeatherData(res.forecastday))
  console.log(data);

},[city])

const values ={
  cities,
  city,
  setCity,
  weatherData,
}

return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>

}

const useWeather = () => useContext(WeatherContext);



export {
  useWeather,
  WeatherProvider
}