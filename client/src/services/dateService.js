import Service from './authService';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Create(dateidea) {
	const jwt = localStorage.getItem("jwt")
	const options = {
		method: 'POST',
		body: JSON.stringify(dateidea),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${jwt}`
		}
	}
	return fetch(`${BASE_URL}/dateideas`, options)
	.then(res => res.json())
}

export default {
	Create
}
