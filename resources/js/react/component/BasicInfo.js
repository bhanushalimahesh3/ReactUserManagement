import React from 'react';
import {
	Link
  } from "react-router-dom";

export default function BasicInfo(props){
    const {handleSubmit, handleFileUpload, handleInputChange, profile: {name, email, role}} = props;
    return (

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <img src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg" loading="lazy" className="img-thumbnail" alt="Cinque Terre" width="304" height="236" />					 
                </div>
                <div className="form-group">
                <label htmlFor="avatar">Select avatar:</label>
                    <input type="file" 
                            className="form-control" 
                            id="avatar"
                            onChange={handleFileUpload}
                            />	
                </div>
                <div className="form-group">
                  <label htmlFor="userName">Name:</label>
                  <input type="text" 
                           className="form-control" 
                           id="userName"
                           name="userName"
                           value={name}
                           onChange={handleInputChange}	
                           />
                </div>				  
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="text" 
                           className="form-control" 
                           id="email" 
                           value={email}
                           readOnly			      			 
                           />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role:</label>
                  <input type="text" 
                           className="form-control" 
                           id="role" 
                           value={role}
                           readOnly
                           />
                </div>
                
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Update</button>
                    <Link to="/dashboard" className="btn btn-primary ml-3">Back to Dashboard</Link>
                </div>
                
            </form> 			

        
        );
}