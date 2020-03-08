import React from 'react';
import {
    Link,
    useLocation
  } from "react-router-dom";
  

export default function ActionButton(props)
{
    const {userInfo : {role}} = props;
    let location = useLocation();
   
    return (
        <div className="row">
            <div className="col-12">
                {((location.pathname !== '/users/profile') && <Link to="/users/profile" className="btn btn-primary">My Profile</Link>)}
                
                {(role && (role == 'parent') && <Link to="/users/children" className="btn btn-primary ml-2">Add Child</Link>)}
                
                <button type="button" className="btn btn-danger float-right" onClick={props.logoutHandler}>Logout</button>				
            </div>
        </div>	
    );
}