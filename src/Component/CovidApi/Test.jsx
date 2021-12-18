import React, { useEffect ,useState} from 'react';
import '../CovidApi/covid.css'
import Nav from '../Nav';
import axios from 'axios';
import CovidDataInfo from './CovidDataInfo';


// here Api is  {{}}
export default function Test() {

    const [Data, setData] = useState([]);
    const [Keys, setKeys] = useState([]);

    const getCovidData = async ()=>{
        await fetch('https://data.covid19india.org/v4/min/data.min.json')
            .then(res => res.json())
            .then((data) => {
                const maps = Object.values(data);
                // const mapsKeys = Object.keys(data);

                // const district = Object.values(maps[0].districts);

                setData(maps);
                // setKeys(mapsKeys);
                // console.log(data);
                console.log(maps);
            })
            .catch(err => console.log(err))
        
    }

    useEffect(() => {
        getCovidData();
        // getDisData()
    },[]);

    return (
        <>
            <Nav />
            <div className='pt-5 TContainer'>
                <div className='container-fluid pt-5 d-flex flex-column justify-content-center align-items-center'>
                    <div>
                        <h1 className='mb-3'>
                        <strong><span className='fw-bold'>INDIA</span> COVID-19 Dashboard </strong>
                        </h1>

                        <div className="table-responsive">
                            <table className='table table-hover'>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th>State</th>
                                        <th>District</th>
                                        <th>Recovered</th>
                                        <th>Confirmed</th>
                                        
                                    </tr>
                                </thead>

                                {/* {Data.map((ele, index) => {
                                    // console.log(Keys);
                                    return (
                                        <>
                                            <CovidDataInfo
                                                key={Keys[index]}
                                                State={Keys[index]}
                                                district={disKey[index]}
                                                Recovered={ele.total.recovered}
                                                Confirmed={ele.total.confirmed}                
                                            />
                                        </>
                                    )
                                })} */}

                                {/* {dataDis.map((curEle) => {
                                    return (
                                        <>
                                            <CovidDataInfo
                                                district={curEle.meta.population}
                                            />
                                        </>
                                    )
                                })} */}
                                {
                                    // Object.entries(Data).forEach((ele, index) => {
                                        Data.forEach((ele, index) => {
                                    
                                        console.log(ele.total.confirmed );
                                        
                                            <CovidDataInfo
                                                // key={Keys[0]}
                                                State={ele.total.confirmed}
                                                district={ele.total.confirmed}
                                                Recovered={ele.delta.recovered}
                                                Confirmed={ele.total.confirmed}                
                                            />
                                       
                                    })
                                }
                                
                            </table>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}
