import React from 'react'
import Search from '../search/Search'
import { useState, useEffect } from "react"

export default function Weather() {

    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [weatherData, setWeatherData] = useState(null)

    const apiKey = import.meta.env.VITE_API_KEY;

    async function fetchWeatherData(search) {
        try {
            setLoading(true)

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`)
            const data = await response.json()

            if (data) {
                setLoading(false)
                setWeatherData(data)
            }
        }
        catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    async function handleSearch() {
        fetchWeatherData(search)
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString("en-us", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        })
    }

    useEffect(() => {
        fetchWeatherData("haridwar")
    }, [])

    console.log(apiKey)


    return (
        <div className='text-white p-6 lg:p-14 rounded-xl text-center'>
            <h2 className='text-xl mb-6 md:text-2xl lg:text-3xl xl:text-4xl p-3'>From Sunshine to Snowfall <br/><code className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Real-Time</code><br/> Weather at Your Fingertips!</h2>
            <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
            {
                loading ? <div className='loading'>Loading....</div> :
                    <div className='flex flex-col justify-center items-center gap-3 m-3 md:m-10 xl:m-20 p-5 bg-gray-500 bg-opacity-25 rounded-lg'>
                        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                            <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                        </div>
                        <img src="https://cdn-icons-png.flaticon.com/128/17093/17093401.png" alt="weather-image" className='w-20 h-18 lg:w-24 lg:h-22 xl:w-26 xl:h-24 animate-pulse' />
                        <div className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold xl:p-6'>{Math.floor((weatherData?.main?.temp - 32) * 5 / 9)} <small><sup>&deg;</sup>C</small></div>
                        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                            {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description.toUpperCase() : ""}
                        </p>
                        <div className='date mb-2 md:text-lg lg:text-xl xl:text-2xl'>
                            <span>{getCurrentDate()}</span>
                        </div>
                        <div className='flex gap-6'>
                            <div className='column p-2'>
                                <div className='flex flex-col justify-center items-center text-center'>
                                    <p className='wind text-lg md:text-xl lg:text-2xl xl:text-3xl'>{weatherData?.wind?.speed} m/s</p>
                                    <div className='flex justify-center items-center gap-1 md:gap-2'>
                                        <img src="https://cdn-icons-png.flaticon.com/128/5532/5532989.png" alt="wind-speed" className='h-5 w-5 lg:w-10 lg:h-10 xl:w-14 xl:h-14' />
                                        <p className='text-sm md:text-lg lg:text-xl xl:text-2xl'>Wind Speed</p>
                                    </div>
                                </div>
                            </div>
                            <div className='column p-2'>
                                <div className='flex flex-col justify-center items-center text-center'>
                                    <p className='humidity text-lg md:text-xl lg:text-2xl xl:text-3xl'>{weatherData?.main?.humidity}%</p>
                                    <div className='flex justify-center items-center gap-1 md:gap-2'>
                                        <img src="https://cdn-icons-png.flaticon.com/128/15201/15201388.png" alt="humidity" className='h-5 w-5 lg:w-10 lg:h-10 xl:w-14 xl:h-14' />
                                        <p className='text-sm md:text-lg lg:text-xl xl:text-2xl'>Humidity</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
