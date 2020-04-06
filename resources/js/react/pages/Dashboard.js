import React, {Component} from 'react';
import {axiosPost, axiosPut, axiosGet, axiosDelete, baseUrl} from '../axiosCall';
import {
	Link,
	Redirect
  } from "react-router-dom";

import './../../../../node_modules/toastr/build/toastr.css';
import AuthHandler from '../component/AuthHandler';
import Swal from 'sweetalert2';

export default class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users : [],
			usersLoaded : false,
			noData : false
		}

		this.getUserList = this.getUserList.bind(this);
		this.deleteHandler = this.deleteHandler.bind(this);
	}

	async getUserList() {

		const {status, message, data, statusCode} = await axiosGet(`${baseUrl}/users`);
		const isGuest = AuthHandler(statusCode);
		if(isGuest)
			this.setState({ isLoggedOut: true});
				
		if(status === 'success'){
			this.setState({ users: data, usersLoaded: true, noData: false});
		}else{
			this.setState({ users: data, usersLoaded: true, noData: true});
			toastr.error(message);
		}

	}

	async deleteHandler(id='') {

		const {value:confirmation} = await Swal.fire({
				title: 'Are you sure?',
				text: 'You want to delete',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, delete it!',
				cancelButtonText: 'No, keep it'
			});
		if(confirmation){
			const {status, message, data, statusCode} = await axiosDelete(`${baseUrl}/users/${id}`);
			const isGuest = AuthHandler(statusCode);
			if(isGuest)
				this.props.updateLogout();
					
			if(status === 'success'){
				this.getUserList();
			}
			toastr.error(message);
		}
	}

	componentDidMount() {
	    this.getUserList();
	  }


	render() {
		return (
			<div>
				<TableContainer users = {this.state.users} 
								loaded = {this.state.usersLoaded} 
								noData = {this.state.noData} 
								deleteHandler = {this.deleteHandler} 
								userInfo = {this.props.userInfo}/>
			</div>
			);
	}

}

function TableContainer(props) {
	return (<div className="mt-3">
	<div className="row">
		<div className="col-12">
			<h2>Dashboard</h2>
			<Table users={props.users} loaded={props.loaded} noData = {props.noData} deleteHandler={props.deleteHandler}
			userInfo = {props.userInfo}/>
		</div>
	</div>				
</div>);
}


function Table(props) {

	const rows = (props.loaded) ? ((props.noData) ? (<tr><td>No data found</td></tr>) : (props.users.map(function(obj, index) {
		return (<TableRow rowData={obj} key={obj.id} deleteHandler={props.deleteHandler} userInfo = {props.userInfo}/>)
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
	const {userInfo : {role}} = props;
	return (<tr>
				<td>{props.rowData.id}</td>
				<td>{props.rowData.name}</td>
				<td>{props.rowData.email}</td>
				<td>{props.rowData.role}</td>
				<td>
					<Link to={`/users/profile/${props.rowData.id}`} className="btn btn-primary">View</Link>
					{(role && (role === 'parent') && <button type="button" className="btn btn-danger ml-1" onClick={() => props.deleteHandler(props.rowData.id)}>Delete</button>)}
					
				</td>

			</tr>)
}