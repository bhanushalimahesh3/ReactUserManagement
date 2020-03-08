import React from 'react';
import Signup from './Signup';
import Signin from './Signin';
import Dashboard from './Dashboard';
import UserProfile from './UserProfile';
import AddChild from './AddChild';
import GuestUserLayout from './../layouts/GuestUserLayout';
import AuthUserLayout from './../layouts/AuthUserLayout';
import {
  Switch,
  Route
} from "react-router-dom";


export default function App() {
	return (
			<Switch>
        <Route exact path="/signup" >
          <GuestUserLayout page={<Signup />} title='I am on up page'/>
        </Route>

        <Route exact path="/signin">
          <GuestUserLayout page={<Signin/>} title='I am on in page'/>
        </Route>

        <Route exact path="/">
          <GuestUserLayout page={ <Signin />} title='I am on in page'/>
        </Route>

        <Route  exact 
                path = "/dashboard" 
                render = {(props) => <AuthUserLayout page={Dashboard} title='On Dashboard' {...props}/>} >                   
        </Route>

        <Route  exact 
                path = "/users/profile/:userId?" 
                render = {(props) => <AuthUserLayout page={UserProfile} title='On profile' {...props} />} >            
        </Route>

        <Route exact 
               path = "/users/children" 
               render = {(props) => <AuthUserLayout page={AddChild} title='On add child'  {...props}/>}
               >                  
         
        </Route>
        
      </Switch> 
			);
}