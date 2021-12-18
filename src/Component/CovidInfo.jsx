import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CovidInfo(prop) {

    return (
        <>
            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 my-4">
                <div className="card m-2">
                    <div className="card-body ">
                        <h5 className="card-title fs-3">{prop.Country}</h5>
                        {/* //data.Country */}
                    </div>
                    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item fs-6">{prop.Date}</li>
                        <li className="list-group-item fs-6">TotalConfirmed : {prop.TotalConfirmed}</li>
                        <li className="list-group-item fs-6">TotalDeaths : { prop.TotalDeaths}</li>
                        <li className="list-group-item fs-6">TotalRecovered : { prop.TotalRecovered}</li>
                    </ul>

                    <div className="card-body">
                        <NavLink to='https://api.covid19api.com/summary' className="card-link fs-6">More Info</NavLink>
                    </div>
                    
                </div>
            </div>

        </>
    )
}
