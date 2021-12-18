import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import GitCard from './GitCard';
import '../GitHubUserData/git.css'
import Footer from '../Footer/Footer';
import Img from '../Img';

// here Api start from [{}]
const Git = () => {

    const [user, setUser] = useState([]);

    const getUserdata = async () => {
       
        await fetch('https://api.github.com/users')
        .then(res => res.json())
        .then((data) => { setUser(data);console.log(data);})
        .catch(err => {
        console.log(`error:${err}`);
        })
        console.log('Api ');
        
        // const actualData =  res.json();
        // setUser(actualData);
        // }
    }
    
    useEffect(async() => {
        console.log('hii');
        await getUserdata();
        console.log('hello');
    },[]);

    return (
        <>
        <div className='git'>
            <Nav logo={Img.git}
                height={{height:'40px'}}    
            />
            <div className='poke'>
                <h1 className='text-center'>List of GitHub Users</h1>
            </div>
            <div className='container-fluid mt-5'>
                <div className="row text-center justify-content-center">
                    {
                        user.map((curEle) => {
                            return (
                                <GitCard login={curEle.login}
                                    avatar={curEle.avatar_url}
                                    id={curEle.id}
                                    key={curEle.id}
                                    followers={curEle.followers_url}
                                />
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
            <Footer />
        </>
    )
}

export default Git;

 