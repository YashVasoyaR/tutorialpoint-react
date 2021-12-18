// { Here We Have not use any effect direct fetch in function and it work Smoothly; 
//  But One problem is Here we have not use Map;
// Because at a time we have to show only one card}
// api in form of {{}}
import React, { useState } from 'react';
import '../Weather2/W2.css';

// const api = {
//   key: "7d4ef5d23648c7c62acd3ccfa1a0a30b",
//   base: "https://api.openweathermap.org/data/2.5/"
// }


function W2() {
    
     const [query, setQuery] = useState('');
     const [weather, setWeather] = useState({});

    const search = evt => {
      
    if (evt.key === "Enter") {
      fetch(`https:api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=fb88f4164daf26fe35ab38e420af3ef9`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
    }
    
    return (
        <>
            <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
            <main>
                <div className="search-box">
                <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search for location..."
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
                    </div>
                    
                    {(typeof weather.main != "undefined") ? (
                        
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                            {Math.round(weather.main.temp)}°c
                            </div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                        </div>)
                        : (<div>
                        <div className="location-box">
                            <div className="location"></div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                            0°c
                            </div>
                            <div className="weather">Clear</div>
                        </div>
                    </div>)}
            </main>
            </div>
        </>
    );
}

export default W2;

