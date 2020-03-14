import React from 'react';

import Biocard from './Biocard'; 
import ActionButton from './ActionButton';  

export default function Header(props)
{
    
    return (
        <div className="mt-5">
            <Biocard userInfo = {props.userInfo} />
            <ActionButton {...props} userInfo = {props.userInfo} />
        </div>
    );
}