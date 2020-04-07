import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import GuestUserLayout from './../layouts/GuestUserLayout';
import AuthUserLayout from './../layouts/AuthUserLayout';

const Signin = React.lazy(() => import('./../pages/Signin'));
const Signup = React.lazy(() => import('./../pages/Signup'));
const Dashboard = React.lazy(() => import('./../pages/Dashboard'));
const UserProfile = React.lazy(() => import('./../pages/UserProfile'));
const MyProfile = React.lazy(() => import('./../pages/MyProfile'));
const AddChild = React.lazy(() => import('./../pages/AddChild'));



export default function App() {
	return (
			<Switch>
        <React.Suspense fallback={<div><h1>Suspense Loading....</h1></div>}>
          <Route exact path="/signin">
            <GuestUserLayout page={<Signin/>} title='I am on in page'/>
          </Route>

          <Route exact path="/">
            <GuestUserLayout page={ <Signin />} title='I am on in page'/>
          </Route>

          <Route exact path="/signup" >
            <GuestUserLayout page={<Signup />} title='I am on up page'/>
          </Route>             

          <Route  exact 
                  path = "/dashboard" 
                  render = {(props) => <AuthUserLayout page={Dashboard} title='On Dashboard' {...props}/>} >                   
          </Route>

          <Route  exact 
                  path = "/users/profile" 
                  render = {(props) => <AuthUserLayout page={MyProfile} title='On my profile' {...props} />} >            
          </Route>          

          <Route  exact 
                  path = "/users/profile/:userId" 
                  render = {(props) => <AuthUserLayout page={UserProfile} title='On user profile' {...props} />} >            
          </Route>



          <Route exact 
                path = "/users/children" 
                render = {(props) => <AuthUserLayout page={AddChild} title='On add child'  {...props}/>}
                >                  
          
          </Route>
        </React.Suspense>   
      </Switch> 
			);
}