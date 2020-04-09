import React,{useContext} from 'react';
import {UserContext} from './../context/UserContext.js'; 

export default function MicNavigation(props) {
    const {micClickHandler} = useContext(UserContext)
    return (
        <button className="btn btn-primary mr-2" title="Click to speak" onClick={micClickHandler}> <img src="/img/mic.png" alt="Snow" /></button>
    );
}