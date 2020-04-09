import React,{useContext} from 'react';
import {UserContext} from './../context/UserContext.js'; 

export default function ColorGrid(props) {
    const {colors} = useContext(UserContext);
    return (
        <div className="row">
            <div className="col-md-8 mt-5">
                {colors.map((v) => <ColorSpan color={v} key={v}/>)}
            </div>
        </div>
    )
}

function ColorSpan(props) {
    return (
        <span className='p-2 mx-1' style={{backgroundColor:props.color}}>{props.color}</span>
    );
}