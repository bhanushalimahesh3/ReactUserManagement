import React, {Component} from 'react';
import {axiosPost, axiosPut, axiosGet, axiosDelete, baseUrl} from '../axiosCall';
import {
	Link
  } from "react-router-dom";
import './../../../../node_modules/toastr/build/toastr.css';
import BasicInfo from './../component/BasicInfo.js';

export default class MyProfile extends Component {

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
			fileUpload : null,
			myProfile : false
		}

		this.handleFileUpload = this.handleFileUpload.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}

	async getProfile() {
		
		const {status, message, data = ''} = await axiosPost(`${baseUrl}/users/profile`);
		if(status == 'success'){
			const {user:{name, email, role, id}} = data;
			this.setState((prevState, props) => {
				return ({profile :  {...prevState.profile, name, email, role, id}})
			});
		}else{
			toastr.error(message);
		}
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

	async handleSubmit(e) {
		e.preventDefault();
		let formData = new FormData();
		const {profile : {name, email, role, id} , fileUpload} = this.state;
		formData.append('name', name);
		formData.append('email', email);
		formData.append('role', role);
		formData.append('avatar', fileUpload);
		formData.append('id', id);
		formData.append('_method', 'PUT');

		const {status, message, data = ''} = await axiosPost(`${baseUrl}/users/profile`, formData, {
			'content-type': 'multipart/form-data'
		});
		if(status === 'success'){
			toastr.success(message);
			this.getProfile(id);
		}else{
			toastr.error(message);
		}
		
	}


	componentDidMount() {		
	    this.getProfile();
	  }


	render() {
		return (
			<div className="mt-5">
				<h2>Profile</h2>
				<BasicInfo handleSubmit={this.handleSubmit}
						   handleFileUpload={this.handleFileUpload}
						   handleInputChange={this.handleInputChange}
						   profile={this.state.profile}/>			
			</div>
			
			);
	}

}
