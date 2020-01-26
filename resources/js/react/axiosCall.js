import axios from 'axios';

export function axiosPost(url, data) {
	return axios.post(url, data)
			      .then(handleThen)
			      .catch(handleCatch);
}

export function axiosPut(url, data) {
	return axios.put(url, data)
			      .then(handleThen)
			      .catch(handleCatch);
}

export function axiosGet(url) {
	return axios.get(url)
			      .then(handleThen)
			      .catch(handleCatch);
}

export function axiosDelete(url) {
	return axios.delete(url)
			      .then(handleThen)
			      .catch(handleCatch);
}

export const baseUrl = document.querySelector("meta[name='baseurl']").getAttribute('content');

const handleThen =  function (response) {
	return response.data;
}

const handleCatch = function (error) {
	console.log(error);
	// add all status code here
}