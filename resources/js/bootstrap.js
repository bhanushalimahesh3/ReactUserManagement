//window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

require('bootstrap');
//require('jquery');
/* require('react');
require('react-dom'); */
window.toastr = require('toastr');
import './react/index.js';
//require('./react/index.js');
/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './react/component/App';
import {
    BrowserRouter as Router
  } from "react-router-dom";

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('app')); */

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
