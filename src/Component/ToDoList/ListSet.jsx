import React, { useState } from 'react';
import '../ToDoList/ToDo.css';

export default function ListSet(prop) {

    const [cut, uCut] = useState();
    // const [click, setClick] = useState(false);

    function cutItem() {
        uCut(true);
    }

    //{examp 1 function}
    // function onClick(id) {
    //     setClick((pre) => {

    //         //{1}
    //         return [null];
    //         //{2}
    //         // pre ? setClick(false) : setClick(true);

    //         //{3}
    //         // if (pre === false) {
    //         //     return setClick(true);
    //         // } else {
    //         //     return setClick(false);
    //         // }
    //     });
    // }

    return (
        <>
            {/* {exam1} */}
            {/* {click ? { textDecoration: '3px solid red line-through' }:null */}

            {/* {examp2: onClick on list Delete item[onClick={()=>{prop.onClickDele(prop.id)}}] } */}
            {/* style= */}
            <div className="liItem">
                <li  style={cut? { textDecoration: "2px solid #ff0c00 line-through" } : null}  id='toggle' >{prop.itemList}</li>

                    <div className='Tbtn2'>

                    <button className='btn-edit' title='edit' onClick={() => {
                        prop.editItm(prop.id);
                    }}>
                            <i className="fas fa-edit"></i>
                    </button>

                    <button className='btn-through' title='check' onClick={cutItem}>
                            <i className="fas fa-strikethrough"></i>
                    </button>

                    <button className='btn-delete' title='remove' onClick={() => {
                        prop.removeItm(prop.id);
                    }}>
                        <i className="far fa-trash-alt"></i>
                    </button>                    
                    </div>                    
            </div>
                                    
        </>
    )
}
