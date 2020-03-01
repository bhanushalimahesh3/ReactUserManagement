import React, {Component} from 'react';
import {axiosPost, axiosPut, axiosGet, axiosDelete, baseUrl} from '../axiosCall';
import {
	Link
  } from "react-router-dom";
import './../../../../node_modules/toastr/build/toastr.css';

export default class AddChild extends Component {

	constructor(props) {
		super(props);
		const loadingMsg = 'Loading...'
		this.state = {
			profile: {
				name:loadingMsg,
				email:loadingMsg,
				role:loadingMsg,
				id:loadingMsg
			}
		}
		
	}

	getProfile() {
		const id = (this.props.match.params.userId) ? `/${this.props.match.params.userId}` : '';
		axiosPost(`${baseUrl}/users/profile${id}`)
		.then(({status, message, data = ''}) => {			
			if(status == 'success'){
				this.setState({ profile: data.user});
			}else{
				//this.setState({ users: data, usersLoaded: true, noData: true});
				toastr.error(message);
			}
		 });
	}



	componentDidMount() {
	    this.getProfile();
	  }


	render() {
		return (
			<div className="mt-5">
				<h2>Profile</h2>
					<div className="form-group">
				      <label htmlFor="userName">Name:</label>
				      <input type="text" 
			      			 className="form-control" 
							   id="userName"
							   value={this.state.profile.name}
							   readOnly	
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
						<Link to="/dashboard" className="btn btn-primary">Back to Dashboard</Link>
					</div>
					
				 			
			</div>
			
			);
	}

}
