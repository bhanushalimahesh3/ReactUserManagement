import React,{useContext} from 'react';
import {
    Link,
    useLocation
  } from "react-router-dom";
  import {UserContext} from './../context/UserContext.js'; 
  

export default function ActionButton()
{

    let location = useLocation();
    const {userInfo : {role}, logoutHandler} = useContext(UserContext)
   
    return (
        <div className="row">
            <div className="col-12">
                {((location.pathname !== '/users/profile') && <Link to="/users/profile" className="btn btn-primary">My Profile</Link>)}
                
                {(role && (role == 'parent') && (location.pathname !== '/users/children') && <Link to="/users/children" className="btn btn-primary ml-2">Add Child</Link>)}
                
                <button type="button" className="btn btn-danger float-right" onClick={logoutHandler}>Logout</button>				
            </div>
        </div>	
    );
}