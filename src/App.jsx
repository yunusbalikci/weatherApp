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
    <>
      <div className='min-h-screen flex items-center justify-center bg-cover' style={{ backgroundImage: 'url("/newbg.jpg")' }}>     
        <header className='app-header'>
          <h1 className='text-4xl font-bold -mt-80 p-10'>Weather App</h1>

          <div>
            <input 
              type='text'
              placeholder='Search..'
              onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={searchPressed} className='ml-5 bg-red-300 rounded-md'>Search</button>
          </div>

          {typeof weather.main != "undefined" ? (
            <div className='box-border w-40 h-40 bg-gray-900 mx-auto mt-10 text-white space-y-3'>
            <p>{weather.name}</p>
            <p>{weather.main.temp} C</p>
            <p>{weather.weather[0].main}</p>
         
            </div>
          ) : (
            ""  
          )}
          
          
          
        </header>  
      </div>
        
    </>
  )
}

export default App
