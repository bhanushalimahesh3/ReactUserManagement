import React, {Component} from 'react';
import {
	Link
  } from "react-router-dom";
  

export default function Header(props)
{
    return (
        <div className="mt-5">
        <div className="row">
            <div className="col-12">
                <Link to="/users/profile" className="btn btn-primary">My Profile</Link>
                <Link to="/users/children" className="btn btn-primary ml-2">Add Child</Link>
                <button type="button" className="btn btn-danger float-right" onClick={props.logoutHandler}>Logout</button>				
            </div>
        </div>	
    </div>
    );
}