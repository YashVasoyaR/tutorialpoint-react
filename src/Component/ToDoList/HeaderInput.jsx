import React from 'react'

export default function HeaderInput(prop) {
    return (
        <>
            <div className='form Tform'>
                    <input type="text" onChange={prop.getItm} name='item' value={prop.inp} placeholder='✍ Add a Items' />
                
                    {(prop.tgsubmit) ?<button onClick={prop.addItm} className='Tbtn'> <span>Add</span></button> : <button onClick={prop.addItm} className='Tbtn'><span><i className="fas fa-edit"></i></span></button>}
            </div>
        </>
    )
}
