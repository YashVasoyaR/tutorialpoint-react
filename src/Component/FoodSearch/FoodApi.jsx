import React, { useEffect, useState } from 'react'
import Nav from '../Nav';
import '../FoodSearch/food.css';
import FoodCard from './FoodCard';
import '../FoodSearch/food';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Footer from '../Footer/Footer';
import Img from '../Img'

// here api is in fotm of {{},[]}
const FoodApi = () => {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

  const YOUR_APP_ID = `82e453da`;
  const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";

 const url = `https://api.edamam.com/search?q=food&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

    const getRecipeInfo = async () => {
        await fetch(url)
            .then(res => res.json())
            .then((data) => {
                setRecipes(data.hits);
                setLoading(false);
                // console.log(data);
            })
            .catch(err=>console.log(err))
  };
   
    useEffect(() => {
        getRecipeInfo()
    }, []);
 
    return (
        <>
            <Nav logo={Img.food}
                    height={{height:'40px'}}
                    
                />
            <div className='poke food' onLoad={getRecipeInfo} >
                <div className="container-fluid">
                    {/* //header */}
                    <h1 className='mt-5 text-center main-heading '>Check Your Fav Dishes</h1>
                    <hr />

                    {/* //Menu Tabs */}
                    <div className="menu-tabs container">
                        <div className='menu-tab d-flex justify-content-around'>
                            <button className='btn btn-warning'>Breakfast</button>
                            <button className='btn btn-warning'>Lunch</button>
                            <button className='btn btn-warning'>Evening</button>
                            <button className='btn btn-warning'>Dinner</button>
                            <button className='btn btn-warning'>All</button>
                        </div>
                    </div>
                    
                    {/* Food Card list */}
                    <div className='container-fluid menu-items mt-5'>
                        <div className="row">
                            <div className="col-12 mx-auto">
                                {loading ?
                                    <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'60vh' }}>
                                        <CircularProgress />
                                    </Box>
                                :
                                <div className='row my-5 '>
                                    {recipes.length > 0 && recipes.map((ele) => {
                                        console.log(ele);
                                        return (
                                            <>
                                                <FoodCard
                                                    name={ele.recipe.label.slice(0,21)}
                                                    img={ele.recipe.image}
                                                    descr={`${ele.recipe.healthLabels.slice(0,3).join(' , ')}`}
                                                    source={ele.recipe.source}
                                                    more={ele.recipe.url}
                                                />
                                            </>
                                        )
                                    })}
                                </div>
                                }
                                
                                
                            </div>       
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default FoodApi
