import React,{useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import CovidInfo from './CovidInfo';
import Img from './Img';
import Nav from './Nav';



export default function CoronaCard() {
    const [data, setdata] = useState([]);

        const getCovidData = async () => {
        
            await fetch('https://api.covid19api.com/summary')
                .then(res => res.json())
                .then((data) => setdata(data.Countries),console.log(data))
                .catch(err => console.log(err));
        }
    

        useEffect(() => {
            getCovidData();
        }, []);
    
    return (
        <>
            <Nav logo={Img.covid}
                height={{ height: '40px' }}/>
            <div className='poke container-fluid my-4 '>
                <h1 className='text-center'>Country Wise Covid-19 Detail</h1>
                <div className='mx-5'>
                    <div className="row my-4">
                        
                    
                        
                        {/* { && data.map((ele) => { */}
                        {data.length > 0 && data.map((ele) => {
                            console.log(ele);
                            return (
                                <>
                                <CovidInfo Country={ele.Country }
                                            Date={ ele.Date}
                                            TotalConfirmed={ele.TotalConfirmed }
                                            TotalDeaths={ele.TotalDeaths}
                                            TotalRecovered={ele.TotalRecovered}
                                />
                                </>
                            )
                        })}
                        
                        
                    </div>   
                </div>
            </div>
       
        </>
    )
}


                        
                     
