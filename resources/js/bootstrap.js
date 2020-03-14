window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

require('bootstrap');

window.toastr = require('toastr');
import './react/index.js';

