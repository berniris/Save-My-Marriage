const BASE_URL = process.env.REACT_APP_BASE_URL;

//sharable functions 
function checkStatus(resp) {
	if (!resp.ok) throw new Error(resp.statusMessage);
	console.log(resp);
	return resp.json();
}

function All() {
  const jwt = localStorage.getItem("jwt")
  const options = {
  headers: {
  		"Authorization": `Bearer ${jwt}`
    }
}
  return fetch(`${BASE_URL}/api/dateideas`, options)
  .then(checkStatus)
}

// Clients create a date suggestion for other users 
function Create(inputs) {
	const jwt = localStorage.getItem("jwt")
	const body = {"dateidea": {"body": inputs.body}}
	const options = {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${jwt}`
		}
	}
	return fetch(`${BASE_URL}/api/dateideas`, options)
	.then(checkStatus)
	.catch(err => console.log(err))
}

function Delete(id) {
    const jwt = localStorage.getItem("jwt");
    const options = {
      method: 'DELETE',
      headers: {
      	'Content-Type': 'application/json',
      	'Authorization': `Bearer ${jwt}`
      }
    };
    fetch(`${BASE_URL}/api/dateideas/${id}`, options)
    .then(checkStatus)
    .catch(err =>console.log(err));
  }

export default {
	All,
	Create,
	
	Delete
}
