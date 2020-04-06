import React, {useContext} from 'react';
import {UserContext} from './../context/UserContext.js';  

export default function Biocard(props)
{
 

   // const {userInfo : {name, email, role, id}} = props;
      const {userInfo : {name, email, role, id}} = useContext(UserContext)
    return (
            <div className="row">
                <div className="col-12">
                    <div className='float-right'>
                        <p>You are <strong>{name}</strong></p>
                        <p>Role <strong>{role}</strong></p>
                    </div>
                </div>
            </div>
    );
}