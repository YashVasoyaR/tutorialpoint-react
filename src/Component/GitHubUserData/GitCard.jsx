import React from 'react';

const GitCard = (prop) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12 my-3">
                        <div className='card p-2'>
                            <div className='d-flex align-items-center'>
                                <div className='image'>
                                    <img src={prop.avatar} className='rounded' width='155' alt="..." />
                                </div>
                                <div className="ml-3 w-100">
                            <h4 className='mb-0 mt-0 textLeft'>{ prop.login}</h4>
                                    <span className='textLeft'>Web-Developer</span>
                                 
                                    <div className='p-2 mt-2  d-flex justify-content-between rounded text-white stats'>
                                        <div className="d-flex flex-column">
                                    <span className='articles'>Id</span><span className='number1'>{ prop.id}</span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className='followers'>Followers</span><span className='number2'>33</span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className='rating'>Rating</span><span className='number3'>2.3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
        </>
    )
}

export default GitCard
