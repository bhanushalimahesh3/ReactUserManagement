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
			},
			appColor:'...'
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
		recognition.onresult = (event) => {
			// The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
			// The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
			// It has a getter so it can be accessed like an array
			// The first [0] returns the SpeechRecognitionResult at the last position.
			// Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
			// These also have getters so they can be accessed like arrays.
			// The second [0] returns the SpeechRecognitionAlternative at position 0.
			// We then return the transcript property of the SpeechRecognitionAlternative object
			var color = event.results[0][0].transcript;
		   
			//console.log(`color ${color}`);
			console.log(event);
			//console.log('Confidence: ' + event.results[0][0].confidence);
			this.setState({appColor:color});
		  }
		  
	}

    componentDidMount() {

		this.getProfile();
		
	  }
    
    render() {

        if(this.state.isLoggedOut)
            return <Redirect to="/" />

        const {page: Page, title, match, location, history} = this.props;

        return (
            <div className="p-3" style={{backgroundColor:this.state.appColor}}>
				
					<h1>Auth Layout</h1>
					<h2>{title}</h2>
					<p>Did you spoke {this.state.appColor}</p>
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
