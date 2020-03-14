import React, {Component} from 'react';
import {axiosPost, axiosPut, axiosGet, axiosDelete, baseUrl} from '../axiosCall';
import {
	Link,
	Redirect
  } from "react-router-dom";
import './../../../../node_modules/toastr/build/toastr.css';

export default class AddChild extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name:'',
			email:'',
			role:'child',
			fileUpload : null,
			isAdded : false
		}

		this.handleFileUpload = this.handleFileUpload.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}

	handleFileUpload(e) {
		const target = e.target;
		this.setState({fileUpload:target.files[0]});
	}

	handleInputChange(e) {
		const {name, value} = e.target;
		this.setState((prevState, props) => {
			return ({[name] : value});
		});
	}

	async handleSubmit(e) {
		e.preventDefault();
		let formData = new FormData();
		const {name, email, role, fileUpload} = this.state;
		formData.append('name', name);
		formData.append('email', email);
		formData.append('role', role);
		formData.append('avatar', fileUpload);

		const {status, message, data = ''} = await axiosPost(`${baseUrl}/users/children`, formData, {
			'content-type': 'multipart/form-data'
		});
		if(status === 'success'){
			toastr.success(message);
			this.setState({isAdded:true});
		}else{
			toastr.error(message);
		}		
	}


	componentDidMount() {

	  }


	render() {
		const {name, role, email, isAdded} = this.state;

		if(isAdded)
			return <Redirect to='/dashboard' />

		return (
			<div className="mt-5">
				<h2>Add Child</h2>
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
							   name="name"
							   value={name}
							   onChange={this.handleInputChange}	
			      			 />
				    </div>				  
				    <div className="form-group">
				      <label htmlFor="email">Email:</label>
				      <input type="text" 
			      			 className="form-control" 
							   id="email" 
							   value={email}
							   name='email'
							   onChange={this.handleInputChange}			      			 
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
						<button className="btn btn-primary" type="submit">Add</button>
						<Link to="/dashboard" className="btn btn-primary ml-3">Back to Dashboard</Link>
					</div>
					
				</form> 			
			</div>
			
			);
	}

}
