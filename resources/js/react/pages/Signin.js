import React, {Component} from 'react';
import {axiosPost, axiosPut, axiosGet, axiosDelete, baseUrl} from '../axiosCall';
import {
	Link,
	Redirect
  } from "react-router-dom";

import './../../../../node_modules/toastr/build/toastr.css';
import {validateSignin} from '../component/Validation.js';

export default class Signin extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			pwd: '',
			showDashboard: false,
			errors : {},
			errorCount : 0
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
	}

	async handleSubmit(event) {
		event.preventDefault();
		const data = {email : this.state.email,  
			          password : this.state.pwd};

		const {status, message} =  await axiosPost(`${baseUrl}/signin`, data);
		if(status === 'success'){
			this.setState({showDashboard : true});
		}else{
			toastr.error(message);
		}
 
	}

	handleFocus(event) {
		const {errors, errorCount} = validateSignin(this.state);
		this.setState({errors, errorCount});
	}

	handleChange(event) {
		
		this.setState({[event.target.name] : event.target.value});
	}

	render() {
		
		if(this.state.showDashboard)
		return <Redirect to='/dashboard' />

		const {errors, errorCount} = this.state;
		return (
			<div className="mt-5">
				<h2>Signin form</h2>
				  <form onSubmit={this.handleSubmit}>
				    <div className="form-group">
				      <label htmlFor="email">Email:</label>
				      <input type="email" 
			      			 className="form-control" 
			      			 id="email" 
			      			 name="email" 
			      			 value={this.state.email} 
			      			 onChange={this.handleChange}
							 onBlur={this.handleFocus}/>
			      	 { (errorCount > 0) && <p className="text-danger errors.email.valid && 'd-none'">{errors.email.message}</p> }
				    </div>
				    <div className="form-group">
				      <label htmlFor="pwd">Password:</label>
				      <input type="password" 
				      		 className="form-control" 
				      		 id="pwd" 
				      		 name="pwd" 
				      		 value={this.state.pwd} 
				      		 onChange={this.handleChange}
							 onBlur={this.handleFocus}/>
				      { (errorCount > 0) && <p className="text-danger errors.pwd.valid && 'd-none'">{errors.pwd.message}</p> }		 
				    </div>
					<div className="form-group">
				      <Link to="/signup">Not have an account? Register now</Link>
				    </div>

				    <button type="submit" 
				    		className="btn btn-primary" 
				    		disabled={(errorCount > 0)}>
				    	Login
				    </button>
				  </form>
			</div>
			
			);
	}

} 