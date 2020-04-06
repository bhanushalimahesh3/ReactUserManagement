import React, {Component} from 'react';
import {axiosPost, axiosPut, axiosGet, axiosDelete, baseUrl} from '../axiosCall';
import {
	Link,
	Redirect
  } from "react-router-dom";
import './../../../../node_modules/toastr/build/toastr.css';
import {validateSignup} from '../component/Validation.js';
  

export default class Signup extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			pwd: '',
			cpwd: '',
			showSignIn: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	async handleSubmit(event) {
		event.preventDefault();
		const data = {email : this.state.email, name : this.state.name, 
			    password : this.state.pwd, password_confirm : this.state.cpwd};

		const {status, message} = await axiosPost(`${baseUrl}/signup`, data);
		if(status === 'success'){
			toastr.success(message);
			this.setState({showSignIn : true});
			//console.log(this.state);
		}else{
			toastr.error(message);
		}
 
	}

	handleChange(event) {
		this.setState({[event.target.name] : event.target.value});
	}

	render() {
		
		if(this.state.showSignIn)
			return <Redirect to='/signin' />

		const {errors, errorCount} = validateSignup(this.state);
		return (
			<div className="mt-5">
				<h2>Signup form</h2>
				  <form onSubmit={this.handleSubmit}>
				    <div className="form-group">
				      <label htmlFor="name">Name:</label>
				      <input type="text" 
				      		 className="form-control" 
				      		 id="name" 
				      		 name="name" 
				      		 value={this.state.name}
				      		 onChange={this.handleChange}/>
				      <p className="text-danger errors.name.valid && 'd-none'">{errors.name.message}</p>		 
				    </div>
				    <div className="form-group">
				      <label htmlFor="email">Email:</label>
				      <input type="email" 
			      			 className="form-control" 
			      			 id="email" 
			      			 name="email" 
			      			 value={this.state.email} 
			      			 onChange={this.handleChange}/>
			      	 <p className="text-danger errors.email.valid && 'd-none'">{errors.email.message}</p>
				    </div>
				    <div className="form-group">
				      <label htmlFor="pwd">Password:</label>
				      <input type="password" 
				      		 className="form-control" 
				      		 id="pwd" 
				      		 name="pwd" 
				      		 value={this.state.pwd} 
				      		 onChange={this.handleChange}/>
				      <p className="text-danger errors.pwd.valid && 'd-none'">{errors.pwd.message}</p>		 
				    </div>
				    <div className="form-group">
				      <label htmlFor="cpwd">Confirm Password:</label>
				      <input type="password" 
				      		 className="form-control" 
				      		 id="cpwd" 
				      		 name="cpwd" 
				      		 value={this.state.cpwd} 
				      		 onChange={this.handleChange}/>
				      <p className="text-danger errors.cpwd.valid && 'd-none'">{errors.cpwd.message}</p>		 
				    </div>
					<div className="form-group">
				      <Link to="/signin">Already have an account? Login</Link>
				    </div>			    
				    <button type="submit" 
				    		className="btn btn-primary" 
				    		disabled={(errorCount > 0)}>
				    	Signup
				    </button>
				  </form>
			</div>
			
			);
	}

} 