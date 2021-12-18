import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Img from '../Img';
import Nav from '../Nav';
import '../Weather Api/weather.scss';
import W2 from './Weather2/W2';

// here Api Call with {{}} but we have not use [MAP] in this i'm not able to get data outside of the main object
const Weather = () => {

    const [search, addSeach] = useState('Mumbai');
    const [cityWeather, setCityWeather] = useState({});

    const getWeatherData = async () => {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fb88f4164daf26fe35ab38e420af3ef9`;

        // fetch(url).then(res=> res.json()).then(result=>setCityWeather(result));

        const res = await fetch(url);
        // console.log(res);

        const actualData = await res.json();
        // console.log(actualData.weather);
        // const {  main: { temp, temp_max, temp_min }, wind: { speed, deg, gust } }  = actualData;
        // console.log(temp);
        setCityWeather(actualData.main);
        // setCityWeather(windData);
    }

    useEffect(() => {
        getWeatherData();
    },[search]);

    function ChangeCity(event) {
        addSeach(event.target.value);
    }


    
    return (
        <>
        <div style={{background: '#bfe5fd'}}>
                <Nav logo={Img.weather}
                    height={{height:'40px'}}
                    
                />
            
            <div className='poke Wcontainer'>
                <div><h1 className='text-center'>Weather</h1></div>
                <div className='Wbox '>
                    <div className="inputData">
                        <input type="search" value={search} onChange={ChangeCity}  className='inputField' />
                    </div>

    {/* //whrn you not give this api a condition it show error{can't read property 'main' of null} so always give them condition  */}
                    
                    {!cityWeather ? 
                        (
                            <p className='errorMsg'>No Data Found</p>)
                        : (
                            <>
                        <div className='Winfo'>
                            <div>
                                <h2 className='Wlocation'>
                                    <i className='fas fa-street-view'></i>
                                </h2>
                                <p className='text-center'>{search}</p>
                            </div>
                           
                        
                            <h1 className='temp'>
                                        {cityWeather.temp}{ cityWeather.id} &#x2103;
                            </h1>
                                    <h3 className='tempmin_max'>Min:{cityWeather.temp_min} &#x2103; | Max:{ cityWeather.temp_max} &#x2103;</h3>
                        </div>

                        <div className="Wwave -one"></div>
                        <div className="Wwave -two"></div>
                        <div className="Wwave -three"></div>
                    </>
                        )
                    
            }        

                
                </div>
            </div>

            <W2 />
            </div>
        <Footer/>
        </>
    )
}


export default Weather


//{2nd with AXIOS currently not work}

// const Weather = () => {

//     const [data, setData] = useState(null);
//     const [input, setInput] = useState();

//     const setTempData = async () => {
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=fb88f4164daf26fe35ab38e420af3ef9`;

//         axios.get(url).then(res => {
//             let data = res.data;
//             console.log(data);
//             setData(data.main);
//         }).catch(err => {
//             console.log('error');
//         })
//     }
//     useEffect(() => {
//         setTempData();
//     })

//     function ChangeCity(e) {
//         setInput(e.target.value);
//     }
//     return (
//         <>
//             <Nav />
            
//             <div className='poke Wcontainer'>
//                 <div><h1 className='text-center'>Weather</h1></div>
//                 <div className='Wbox '>
//                     <div className="inputData">
//                         <input type="search"  onChange={ChangeCity}  className='inputField' />
//                     </div>

//                     <div className='Winfo'>
//                             <div>
//                                 <h2 className='Wlocation'>
//                                     <i className='fas fa-street-view'></i>
//                                 </h2>
//                             <p className='text-center'></p>
//                             </div>
                           
                        
//                             <h1 className='temp'> &#x2103;
//                             </h1>
//                         <h3 className='tempmin_max'>Min:{ data.temp_min} &#x2103; | Max:&#x2103;</h3>
//                         </div>

//                         <div className="Wwave -one"></div>
//                         <div className="Wwave -two"></div>
//                         <div className="Wwave -three"></div>
//                 </div>
//             </div>

//         </>
//     )
// }
