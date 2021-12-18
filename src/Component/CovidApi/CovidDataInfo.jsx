import React from 'react'

const CovidDataInfo = (prop) => {
    return (
        <>
            <tbody>
                                     <tr>
                                        <td>{ prop.State}</td>
                                        <td>{ prop.district}</td>
                                        <td>{ prop.Recovered}</td>
                                        <td>{ prop.Confirmed}</td>
                                    </tr>
                                </tbody>
        </>
    )
}

export default CovidDataInfo
