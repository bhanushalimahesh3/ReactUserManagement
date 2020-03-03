import axios from 'axios';

export function axiosPost(url, data = '', headers = '') {
	return axios.post(url, data, {headers})
			      .then(handleThen)
			      .catch(handleCatch);
}

export function axiosPut(url, data = '', headers = '') {
	return axios.put(url, data, {headers})
			      .then(handleThen)
			      .catch(handleCatch);
}

export function axiosGet(url, headers = '') {
	return axios.get(url, {headers})
			      .then(handleThen)
			      .catch(handleCatch);
}

export function axiosDelete(url, headers = '') {
	return axios.delete(url, {headers})
			      .then(handleThen)
			      .catch(handleCatch);
}

export const baseUrl = document.querySelector("meta[name='baseurl']").getAttribute('content');

const handleThen =  function (response) {
	return response.data;
}

const handleCatch = function (error) {
	const {data:{message}, status, statusText} = error.response;
	return {status:'error', statusCode:status, message, data:''};
	// add all status code here
}