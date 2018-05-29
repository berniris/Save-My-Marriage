import React, { Component } from 'react';

class Login extends Component {

handleSubmit = event => {
  event.preventDefault();
  console.log({target: event.target})
  var formData = new formData();
  formData.append("username",this.inputNode1.value)
  formData.append("username",this.inputNode1.value)

  fetch()
}


render() {
  return (
    <div>
        <h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
          Argument Management System
        </h1>
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            id="email"
            type="email"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            id="password"
            type="password"
          />
          </form>
          <br />
          <button
            onClick={this.login}
          >
              Login
          </button>
        <br />
        <button
          onClick={this.getFights}
          style={{marginTop: "10vh"}}
          >
          Login
        </button>

      </div>

  );
}

}

export default Login;
