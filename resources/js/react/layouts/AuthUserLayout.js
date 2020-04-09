import React, {Component} from 'react';
import Header from './../component/Header';
import {axiosPost, axiosPut, axiosGet, axiosDelete, baseUrl} from './../axiosCall';
import {
	Switch,
	Route,
	Link,
	Redirect,
	useRouteMatch,
	useParams
  } from "react-router-dom";

import {UserContextProvider} from './../context/UserContext';
import {recognition, colors } from './../helpers/SpeechToText.js';


export default class AuthUserLayout extends Component {

    constructor(props) {
		super(props);
		this.state = {
            isLoggedOut : false,
            profile: {
				name:'',
				email:'',
				role:'',
				id:'',
				file:''
			}
        }
		this.logoutHandler = this.logoutHandler.bind(this);
		this.micClickHandler = this.micClickHandler.bind(this);
    }
    
    async logoutHandler() {
		const {status, message, data = ''} = await axiosGet(`${baseUrl}/logout`);
		if(status == 'success'){
			this.setState({ isLoggedOut: true});
		}else{
			toastr.error(message);
		}
    }

    async getProfile() {
		
		const {status, message, data = ''} = await axiosPost(`${baseUrl}/users/profile`);

		if(status === 'success'){
			const {user:{name, email, role, id}} = data;
			this.setState((prevState, props) => {
				return ({profile :  {...prevState.profile, name, email, role, id}})
			});
		}else{
			toastr.error(message);
		}
	}

    updateLogout(){
        this.setState({ isLoggedOut: true});
	}
	
	micClickHandler(e) {
		recognition.start();
		console.log('Ready to receive a color command.');
	}

    componentDidMount() {

		this.getProfile();
		
	  }
    
    render() {

        if(this.state.isLoggedOut)
            return <Redirect to="/" />

        const {page: Page, title, match, location, history} = this.props;

        return (
            <div>
				
					<h1>Auth Layout</h1>
					<h2>{title}</h2>
					<UserContextProvider value={{userInfo:this.state.profile, 
												logoutHandler:this.logoutHandler, 
												micClickHandler:this.micClickHandler,
												colors
												}}>
						<Header />
					</UserContextProvider>

					<Page match = {match} location = {location} history={history} updateLogout = {this.updateLogout} userInfo={this.state.profile}/>
				
            </div>
        );
    }
}
