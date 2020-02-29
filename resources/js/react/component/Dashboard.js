import React, {Component} from 'react';
import {axiosPost, axiosPut, axiosGet, axiosDelete, baseUrl} from './../axiosCall';
import {
	Switch,
	Route,
	Link,
	Redirect,
	useRouteMatch,
	useParams
  } from "react-router-dom";

import './../../../../node_modules/toastr/build/toastr.css';
import AuthHandler from './AuthHandler';

export default class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users : [],
			usersLoaded : false,
			isLoggedOut : false,
			noData : false
		}

		this.getUserList = this.getUserList.bind(this);
		this.logoutHandler = this.logoutHandler.bind(this);
	}

	getUserList() {

		axiosGet(`${baseUrl}/users`)
		.then(({status, message, data, statusCode}) => {
			const isGuest = AuthHandler(statusCode);
			if(isGuest)
				this.setState({ isLoggedOut: true});
					
			if(status === 'success'){
				this.setState({ users: data, usersLoaded: true, noData: false});
			}else{
				this.setState({ users: data, usersLoaded: true, noData: true});
				toastr.error(message);
			}
		 });
	}

	logoutHandler() {
		axiosGet(`${baseUrl}/logout`)
		.then(({status, message, data = ''}) => {			
			if(status == 'success'){
				this.setState({ isLoggedOut: true});
			}else{
				toastr.error(message);
			}
		 });
	}

	componentDidMount() {
	    this.getUserList();
	  }


	render() {
		if(this.state.isLoggedOut)
			return <Redirect to="/" />

		return (
			<div className="mt-5">
				
				<button type="button" className="btn btn-primary" onClick={this.myProfile}>My Profile</button>

				<button type="button" className="btn btn-danger ml-2" onClick={this.logoutHandler}>Logout</button>
				
				<h2>Dashboard</h2>
				<Table users={this.state.users} loaded={this.state.usersLoaded} noData = {this.state.noData}/>
			</div>
			
			);
	}

}


function Table(props) {
	const rows = (props.loaded) ? ((props.noData) ? (<tr><td>No data found</td></tr>) : (props.users.map(function(obj, index) {
		return (<TableRow rowData={obj} key={obj.id}/>)
	}))): (<tr><td>Loading...</td></tr>);

	return (
		<table className="table">
			<thead>
			<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Email</th>
			</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	);
}

function TableRow(props) {
	return (<tr>
				<td>{props.rowData.id}</td>
				<td>{props.rowData.name}</td>
				<td>{props.rowData.email}</td>
			</tr>)
}