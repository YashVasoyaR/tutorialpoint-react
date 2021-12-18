import React, { useEffect ,useState} from 'react';
import '../CovidApi/covid.css'
import Nav from '../Nav';
import axios from 'axios';
import CovidDataInfo from './CovidDataInfo';
import Footer from '../Footer/Footer';
import Img from '../Img';


// here Api is  {{}}
export default function Covid() {

    const [Data, setData] = useState([]);
    const [Keys, setKeys] = useState([]);
    
    const [dataDis, setDis] = useState([]);
    const [disKey, setDisKey] = useState([]);

    const getCovidData = async ()=>{
        await fetch('https://data.covid19india.org/v4/min/data.min.json')
            .then(res => res.json())
            .then((data) => {
                const maps = Object.values(data);
                const mapsKeys = Object.keys(data);

                const distName = maps[1].districts;
                const [district] = Object.values(maps[0].districts);
                const distKey = Object.keys(distName);

                setData(maps);
                setKeys(mapsKeys);

                setDis(district);
                setDisKey(distKey);

                console.log(data);
                console.log(maps); 
                // console.log(distName);
                console.log(district);
                // console.log(distKey);
            })
            .catch(err => console.log(err))
        
    }
    useEffect(() => {
        getCovidData();
        // getDisData()
    },[]);

    return (
        <>
            <Nav logo={Img.covid}
                    height={{height:'40px'}}
                    
                />
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

                                {Data.map((ele, index) => {
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
                                })}
                                
                            </table>
                        </div> 
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
