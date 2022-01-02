import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Nav'
import Img from '../Img';

// here Api start with {{}}
export default function Pokemon() {

    const [data, setData] = useState();
    const [names, setName] = useState();

    // const getPokeData = async () => {
         // const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        // var jdata = JSON.parse(res);
        // console.log(jdata);
        // const actualData = await res.json();
        // console.log(actualData.stats);
        // setData(actualData.stats);
    // }
    useEffect(() => {
        async function getPokeData() {
            var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`);

            // console.log(res);
            setName(res.data.name)
            // console.log(res.data.name);
        }
        getPokeData();
    })
    
    function inputChange(e) {
        let val = e.target.value;
        setData(val);
    }
    console.log(data);
    return (
        <>
           <Nav logo={Img.pokemon}
                    height={{height:'40px'}}
                    
                />
            {/* <Error /> */}
            <div className='poke'>
                <div className="container">
                    <h1 className='text-center'>I'm {names}</h1>
                    {/* {data.map(item => <li>{item}</li>)} */}
                    
                    <h4>You Choose {data} which name is : { names}</h4>
                    <div>
                        <select value={data} onChange={inputChange}>
                            <option value="1">1</option>
                            <option value="25">25</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                

            </div>
        </>
    )
}
