const BASE_URL = process.env.REACT_APP_BASE_URL;


// used inside login - throws an error or returns response in jason
function handleError(res) {
    if(!res.ok) throw new Error(res.statusMessage);
    console.log(res);
    return res.json();
  }

function checkToken() {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      const user = token;
      resolve(user);
    }
    reject();
  })
}

  function destroyToken() {
  window.localStorage.removeItem("jwt");
  }


function login(input) {
    const url = `${BASE_URL}/api/user_token`;
    const body = {"auth": {"email": input.email, "password": input.password}}
    const options = { method: 'POST',
                   headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                   mode: 'cors',
                   body:JSON.stringify(body),
                   }
    fetch(url, options)
    .then(handleError)
    .then(res => {
     localStorage.setItem("jwt", res.jwt)
     })
     .then(console.log("jwt"))
    .catch(err => console.log(err))
}

function register(input) {
  const body = {"user": {"email": input.email, "password": input.password}}
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    mode: 'cors',
    body: JSON.stringify(body),
  }
  console.log(options)
  fetch(`${BASE_URL}/api/users`, options)
  .then(handleError)
  .then(console.log("jwt"))
  .catch(err => console.log(err))
}

export default {
  login,
  register,
  checkToken,
  destroyToken
}