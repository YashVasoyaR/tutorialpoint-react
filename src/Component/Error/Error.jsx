import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function Error() {

    const history = useHistory();
    return (
        <>
            <div className='errorPage d-flex flex-column justify-content-center align-items-center h-100'>
                <h1>404 Error</h1>
            <div className="nav-item errorStyle">
               
                    <button className="main-btn m-3" onClick={history.goBack} >Go Back</button>
                    <button className="main-btn m-3"  ><NavLink to='/'>Go Home</NavLink></button>
            </div>
            </div>
        </>
    )
}
    export default Error;
