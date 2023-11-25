import { useState } from 'react'
import './App.css'

const api = {
  key:'3ca71d9563f6a02cc7575193734bcdaf',
  base:'https://api.openweathermap.org/data/2.5/',
}



function App() {
  const [search, setSearch] = useState("")
  const [weather,setWeather] = useState({})

  

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) =>{
      console.log(result)
      setWeather(result)
    })
  }

  
  return (
    < >
    <div className='w-full h-full bg-no-repeat bg-cover font-open' style={{backgroundImage: 'url("/newbg.jpg")' }}>
      <div className='min-h-screen flex items-center justify-center'>     
        <header className='app-header'>
          <h1 className='text-8xl font-bold font-open text-white -mt-60 p-10'>Weather App</h1>

          <div className='ml-52'>
            <input 
              className='px-3 py-2 pl-10 font-semibold placeholder-gray-500 text-black rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 shadow-lg'
              type='text'
              placeholder='Search..'
              onChange={(e) => setSearch(e.target.value)}/>
            <a onClick={searchPressed} href="#_" class="ml-5 -mb-5 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-gray-500 rounded-full shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-500 group-hover:translate-x-0 ease">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full font-open text-white transition-all duration-300 transform group-hover:translate-x-full ease">Search</span>
            <span class="relative invisible">Search</span>
            </a>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-mt-8 ml-3 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

          </div>

          {typeof weather.main != "undefined" ? (
            <div className='mt-5'>
              {weather.weather[0].main === 'Clouds' && ( 
                <div className='mt-10 box-border w-96 h-72 bg-opacity-70 border rounded-md shadow-md bg-gray-300 mx-auto text-white space-y-3'>
                  <p className='mt-5 text-center text-4xl opacity-100  font-bold uppercase'>{weather.name}</p>
                  <img src='https://cdn-icons-png.flaticon.com/512/3313/3313908.png' className='h-24 w-24 mx-auto'></img>
                  <p className='text-center text-2xl font-bold'>{weather.main.temp} C</p>
                  <p className='text-center text-2xl font-bold'>{weather.weather[0].main}</p>
                </div>
              )}
              {weather.weather[0].main === 'Sunny' && ( 
                <div className='mt-10 box-border w-96 h-72 bg-opacity-70 border rounded-md shadow-md bg-gray-300 mx-auto text-white space-y-3'>
                  <p className='mt-5 text-center text-4xl opacity-100  font-bold uppercase'>{weather.name}</p>
                  <img src='https://cdn-icons-png.flaticon.com/512/979/979585.png' className='h-24 w-24 mx-auto'></img>
                  <p className='text-center text-2xl font-bold'>{weather.main.temp} C</p>
                  <p className='text-center text-2xl font-bold'>{weather.weather[0].main}</p>
                </div>
              )}
              {weather.weather[0].main === 'Rain' && ( 
                <div className='mt-10 box-border w-96 h-72 bg-opacity-70 border rounded-md shadow-md bg-gray-300 mx-auto text-white space-y-3'>
                  <p className='mt-5 text-center text-4xl opacity-100  font-bold uppercase'>{weather.name}</p>
                  <img src='https://cdn-icons-png.flaticon.com/512/4724/4724091.png' className='h-24 w-24 mx-auto'></img>
                  <p className='text-center text-2xl font-bold'>{weather.main.temp} C</p>
                  <p className='text-center text-2xl font-bold'>{weather.weather[0].main}</p>
                </div>
              )}
              {weather.weather[0].main === 'Clear' && ( 
                <div className='mt-10 box-border w-96 h-72 bg-opacity-70 border rounded-md shadow-md bg-gray-300 mx-auto text-white space-y-3'>
                  <p className='mt-5 text-center text-4xl opacity-100  font-bold uppercase'>{weather.name}</p>
                  <img src='https://cdn-icons-png.flaticon.com/512/7865/7865939.png' className='h-24 w-24 mx-auto'></img>
                  <p className='text-center text-2xl font-bold'>{weather.main.temp} C</p>
                  <p className='text-center text-2xl font-bold'>{weather.weather[0].main}</p>
                </div>
              )}
              {weather.weather[0].main === 'Atmosphere' && ( 
                <div className='mt-10 box-border w-96 h-72 bg-opacity-70 border rounded-md shadow-md bg-gray-300 mx-auto text-white space-y-3'>
                  <p className='mt-5 text-center text-4xl opacity-100  font-bold uppercase'>{weather.name}</p>
                  <img src='https://cdn-icons-png.flaticon.com/512/2076/2076827.png' className='h-24 w-24 mx-auto'></img>
                  <p className='text-center text-2xl font-bold'>{weather.main.temp} C</p>
                  <p className='text-center text-2xl font-bold'>{weather.weather[0].main}</p>
                </div>
              )}
              {weather.weather[0].main === 'Snow' && ( 
                <div className='mt-10 box-border w-96 h-72 bg-opacity-70 border rounded-md shadow-md bg-gray-300 mx-auto text-white space-y-3'>
                  <p className='mt-5 text-center text-4xl opacity-100  font-bold uppercase'>{weather.name}</p>
                  <img src='https://cdn-icons-png.flaticon.com/512/7204/7204118.png' className='h-24 w-24 mx-auto'></img>
                  <p className='text-center text-2xl font-bold'>{weather.main.temp} C</p>
                  <p className='text-center text-2xl font-bold'>{weather.weather[0].main}</p>
                </div>
              )}
              {weather.weather[0].main === 'Drizzle' && ( 
                <div className='mt-10 box-border w-96 h-72 bg-opacity-70 border rounded-md shadow-md bg-gray-300 mx-auto text-white space-y-3'>
                  <p className='mt-5 text-center text-4xl opacity-100  font-bold uppercase'>{weather.name}</p>
                  <img src='https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather05-512.png' className='h-24 w-24 mx-auto'></img>
                  <p className='text-center text-2xl font-bold'>{weather.main.temp} C</p>
                  <p className='text-center text-2xl font-bold'>{weather.weather[0].main}</p>
                </div>
              )}
              {weather.weather[0].main === 'Thunderstorm' && ( 
                <div className='mt-10 box-border w-96 h-72 bg-opacity-70 border rounded-md shadow-md bg-gray-300 mx-auto text-white space-y-3'>
                  <p className='mt-5 text-center text-4xl opacity-100  font-bold uppercase'>{weather.name}</p>
                  <img src='https://cdn-icons-png.flaticon.com/512/5903/5903432.png' className='h-24 w-24 mx-auto'></img>
                  <p className='text-center text-2xl font-bold'>{weather.main.temp} C</p>
                  <p className='text-center text-2xl font-bold'>{weather.weather[0].main}</p>
                </div>
              )}
            </div>
          ) : (
            ""  
          )}
          
          
          
        </header>  
      </div>
      <h1 className='text-center opacity-75'>All rights reserved © YunusBlkc </h1>
    </div>
        
    </>
  )
}

export default App
