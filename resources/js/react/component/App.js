import React,{Component} from 'react';
import Signup from './Signup';
import Signin from './Signin';
import Dashboard from './Dashboard';
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
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/">
          <Signin />
        </Route>
      </Switch> 
			);
}