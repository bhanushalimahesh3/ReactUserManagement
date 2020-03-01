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
import Swal from 'sweetalert2';
import Header from './Header';

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
		this.deleteHandler = this.deleteHandler.bind(this);
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

	deleteHandler(id='') {

		Swal.fire({
			title: 'Are you sure?',
			text: 'You want to delete',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, keep it'
		  }).then((result) => {
			  if(result.value){
				axiosDelete(`${baseUrl}/users/${id}`)
				.then(({status, message, data, statusCode}) => {
					const isGuest = AuthHandler(statusCode);
					if(isGuest)
						this.setState({ isLoggedOut: true});
							
					if(status === 'success'){
						this.getUserList();
					}
					toastr.error(message);
				 });
			  }
		  })

	}

	componentDidMount() {
	    this.getUserList();
	  }


	render() {
		if(this.state.isLoggedOut)
			return <Redirect to="/" />

		return (
			<div>
				<Header logoutHandler = {this.logoutHandler}/>
				<TableContainer users = {this.state.users} 
								loaded = {this.state.usersLoaded} 
								noData = {this.state.noData} 
								deleteHandler = {this.deleteHandler} />
			</div>
			);
	}

}

function TableContainer(props) {
	return (<div className="mt-3">
	<div className="row">
		<div className="col-12">
			<h2>Dashboard</h2>
			<Table users={props.users} loaded={props.loaded} noData = {props.noData} deleteHandler={props.deleteHandler}/>
		</div>
	</div>				
</div>);
}


function Table(props) {
	const rows = (props.loaded) ? ((props.noData) ? (<tr><td>No data found</td></tr>) : (props.users.map(function(obj, index) {
		return (<TableRow rowData={obj} key={obj.id} deleteHandler={props.deleteHandler}/>)
	}))): (<tr><td>Loading...</td></tr>);

	return (
		<table className="table">
			<thead>
			<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Email</th>
				<th>Role</th>
				<th></th>
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
				<td>{props.rowData.role}</td>
				<td><Link to={`/users/profile/${props.rowData.id}`} className="btn btn-primary">View</Link>
				<button type="button" className="btn btn-danger ml-1" onClick={() => props.deleteHandler(props.rowData.id)}>Delete</button></td>

			</tr>)
}