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

export default class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users : [],
			usersLoaded : false
		}

		this.getUserList = this.getUserList.bind(this);
	}

	getUserList() {

		axiosGet(`${baseUrl}/users`)
		.then(({status, message, data = ''}) => {			
			if(status == 'success'){
				this.setState({ users: data, usersLoaded: true});
			}else{
				toastr.error(message);
			}
		 });
	}

	componentDidMount() {
	    this.getUserList();
	  }


	render() {
		return (
			<div className="mt-5">
				<Link to="/logout">Logout</Link>
				<h2>Dashboard</h2>
				<Table users={this.state.users} loaded={this.state.usersLoaded}/>
			</div>
			
			);
	}

}

function Table(props) {
	const rows = (props.loaded) ? props.users.map(function(obj, index) {
		return (<TableRow rowData={obj} key={obj.id}/>)
	}): (<tr><td>Loading...</td></tr>);

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