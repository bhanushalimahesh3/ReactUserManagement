import React, {Component} from 'react';
import {axiosPost, axiosPut, axiosGet, axiosDelete, baseUrl} from '../axiosCall';
import {
	Link
  } from "react-router-dom";
import './../../../../node_modules/toastr/build/toastr.css';

export default class UserProfile extends Component {

	constructor(props) {
		super(props);
		const loadingMsg = 'Loading...'
		this.state = {
			profile: {
				name:loadingMsg,
				email:loadingMsg,
				role:loadingMsg,
				id:loadingMsg,
				file:null
			},
			fileUpload : null
		}

		this.handleFileUpload = this.handleFileUpload.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}

	getProfile(id = null) {
		
		axiosPost(`${baseUrl}/users/profile${(id) ? `/${id}` : ''}`)
		.then(({status, message, data = ''}) => {			
			if(status == 'success'){
				const {user:{name, email, role, id}} = data;
				this.setState((prevState, props) => {
					return ({profile :  {...prevState.profile, name, email, role, id}})
				});
			}else{
				toastr.error(message);
			}
		 });
	}

	handleFileUpload(e) {
		const target = e.target;
		this.setState({fileUpload:target.files[0]});
	}

	handleInputChange(e) {
		const target = e.target;
		this.setState((prevState, props) => {
			return ({profile: {...prevState.profile, name: target.value}});
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		let formData = new FormData();
		const {profile : {name, email, role, id} , fileUpload} = this.state;
		formData.append('name', name);
		formData.append('email', email);
		formData.append('role', role);
		formData.append('avatar', fileUpload);
		formData.append('id', id);
		formData.append('_method', 'PUT');

		axiosPost(`${baseUrl}/users/profile`, formData, {
			'content-type': 'multipart/form-data'
		})
		.then(({status, message, data = ''}) => {			
			if(status === 'success'){
				toastr.success(message);
				this.getProfile(id);
			}else{
				toastr.error(message);
			}
		 });
		
	}


	componentDidMount() {
		const id = (this.props.match.params.userId) ? `${this.props.match.params.userId}` : '';
	    this.getProfile(id);
	  }


	render() {
		return (
			<div className="mt-5">
				<h2>Profile</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<img src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg" loading="lazy" className="img-thumbnail" alt="Cinque Terre" width="304" height="236" />					 
					</div>
					<div className="form-group">
					<label htmlFor="avatar">Select avatar:</label>
						<input type="file" 
								className="form-control" 
								id="avatar"
								onChange={this.handleFileUpload}
								/>	
					</div>
					<div className="form-group">
				      <label htmlFor="userName">Name:</label>
				      <input type="text" 
			      			 className="form-control" 
							   id="userName"
							   name="userName"
							   value={this.state.profile.name}
							   onChange={this.handleInputChange}	
			      			 />
				    </div>				  
				    <div className="form-group">
				      <label htmlFor="email">Email:</label>
				      <input type="text" 
			      			 className="form-control" 
							   id="email" 
							   value={this.state.profile.email}
							   readOnly			      			 
			      			 />
				    </div>
				    <div className="form-group">
				      <label htmlFor="role">Role:</label>
				      <input type="text" 
				      		 className="form-control" 
				      		 id="role" 
							   value={this.state.profile.role}
							   readOnly
							   />
				    </div>
					
					<div className="form-group">
						<button className="btn btn-primary" type="submit">Update</button>
						<Link to="/dashboard" className="btn btn-primary ml-3">Back to Dashboard</Link>
					</div>
					
				</form> 			
			</div>
			
			);
	}

}
