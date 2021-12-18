import React from 'react';

const FoodCard = (prop) => {
    return (
        <>
           <div className=' col-12 col-md-6 col-lg-6 col-xl-4 mb-3'>
                                        <div className='row item1 Item-inside'>
                                            {/* //Img  */}
                                            <div className='col-12 col-md-12 col-lg-5 img-div'>
                                                <img className='img-fluid' src={prop.img} alt="..." />
                                            
                                            </div>

                                            {/* menu Desc */}
                                            <div className='col-12 col-md-12 col-lg-7'>
                                                <div className="main-title ">
                                                    <h1>{ prop.name}</h1>
                                                    <p>{prop.descr}</p>
                                                </div>

                                            <div className='menu-price-list'>
                                            <div className='price-list d-flex justify-content-between align-items-center'>
                                                <h2>Source :{prop.source}</h2>
                                                
                                            </div>
                                            <p>
                                                <a href={prop.more} target="_blank">
                                                    <button className='btn btn-primary'>More Details</button>
                                                </a>
                                            </p>
                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                    
        </>
    )
}

export default FoodCard;
