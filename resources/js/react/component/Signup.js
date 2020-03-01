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
import validate from './Validation.js';
  

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

	handleSubmit(event) {
		event.preventDefault();
		const data = {email : this.state.email, name : this.state.name, 
			    password : this.state.pwd, password_confirm : this.state.cpwd};

		axiosPost(`${baseUrl}/signup`, data)
		.then(({status, message}) => {
			if(status == 'success'){
				toastr.success(message);
				this.setState({showSignIn : true});
				//console.log(this.state);
			}else{
				toastr.error(message);
			}

		});    
	}

	handleChange(event) {
		this.setState({[event.target.name] : event.target.value});
	}


/* 	validate({name, email, pwd, cpwd}) {
		let errorCount = 0;
		const errors  =  {
							name: {
								valid: true,
								message: ''
							},
							email: {
								valid: true,
								message: ''
							},
							pwd: {
								valid: true,
								message: ''
							},
							cpwd: {
								valid: true,
								message: ''
							}
						};

		if(name == '' || name.length == 0){
			errors.name = {
				valid:false,
				message:'Name field is required'
			};
			errorCount += 1;
		}else{
			errors.name = {
				valid:true,
				message:''
			};
		}

		if(email == '' || email.length == 0){
			errors.email = {
				valid:false,
				message:'Email field is required'
			};
			errorCount += 1;

		}else{
			errors.email = {
				valid:true,
				message:''
			};
		}

		if(pwd == '' || pwd.length == 0){
			errors.pwd = {
				valid:false,
				message:'Password field is required'
			};
			errorCount += 1;
		}else{
			errors.pwd = {
				valid:true,
				message:''
			};
		}

		if(cpwd == '' || cpwd.length == 0 || pwd != cpwd){
			errors.cpwd = {
				valid:false,
				message:'Confirm password field is required. Password & Confirm password mismatch'
			};
			errorCount += 1;
		}else{
			errors.cpwd = {
				valid:true,
				message:''
			};
		}

		return {errors, errorCount};
	} */

	render() {
		if(this.state.showSignIn)
			return <Redirect to='/signin' />

		const {errors, errorCount} = validate(this.state);
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