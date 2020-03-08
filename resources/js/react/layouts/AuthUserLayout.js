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
    }
    
    logoutHandler() {
		axiosGet(`${baseUrl}/logout`)
		.then(({status, message, data = ''}) => {			
			if(status == 'success'){
				this.setState({ isLoggedOut: true});
			}else{
				toastr.error(message);
			}
		 });
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

    updateLogout(){
        this.setState({ isLoggedOut: true});
    }

    componentDidMount() {
		const id = (this.props.match.params.userId) ? `${this.props.match.params.userId}` : '';
	    this.getProfile(id);
	  }
    
    render() {
        if(this.state.isLoggedOut)
            return <Redirect to="/" />

        const {page: Page, title, match, location, history} = this.props;

        return (
            <div>
                <h1>Auth Layout</h1>
                <h2>{title}</h2>
                <Header logoutHandler = {this.logoutHandler} userInfo={this.state.profile} />
                <Page match = {match} location = {location} history={history} updateLogout = {this.updateLogout} userInfo={this.state.profile}/>
            </div>
        );
    }
}
