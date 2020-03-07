import React,{Component} from 'react';
import Signup from './Signup';
import Signin from './Signin';
import Dashboard from './Dashboard';
import UserProfile from './UserProfile';
import AddChild from './AddChild';
import GuestUserLayout from './../layouts/GuestUserLayout';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
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

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/">
          <GuestUserLayout page={ <Signin />} title='I am on in page'/>
        </Route>

        <Route exact path="/users/profile/:userId?" component={UserProfile}>
        </Route>

        <Route exact path="/users/children">
          <AddChild />
        </Route>
        
      </Switch> 
			);
}