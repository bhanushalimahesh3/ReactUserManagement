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

export default class Signin extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			pwd: '',
			showDashboard: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = {email : this.state.email,  
			    password : this.state.pwd};

		axiosPost(`${baseUrl}/signin`, data)
		.then(({status, message}) => {
			if(status == 'success'){
				this.setState({showDashboard : true});
			}else{
				toastr.error(message);
			}	
		});    
	}

	handleChange(event) {
		this.setState({[event.target.name] : event.target.value});
	}


	validate({name, email, pwd, cpwd}) {
		let errorCount = 0;
		const errors  =  {
							email: {
								valid: true,
								message: ''
							},
							pwd: {
								valid: true,
								message: ''
							}
						};


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

		return {errors, errorCount};
	}

	render() {
		
		if(this.state.showDashboard)
		return <Redirect to='/dashboard' />

		const {errors, errorCount} = this.validate(this.state);
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