import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
      email: '',
      password: ''
    }
  }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleSubmit (e) {
  e.preventDefault();
  this.props.handleLogin(this.state.user);
}

handleChange(e) {
  const {name, value} = e.target;
  this.setState((prevState) => {
    return {
      user: {
        ...prevState.user,
        [name]: value
      }
    }
  })
}


render() {
  return (
    <div className="container">
    <div className="login">
        <h1 className="header">
          Login
        </h1>
        <p>Need to create an account? Please click <a href="/register">here to register.</a></p>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            value={this.state.user.email}
            name="email"
            type="email"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            value={this.state.user.password}
            name="password"
            type="password"
            onChange={this.handleChange}
          />
          <br/>
          <br/>
          <button
            type="submit"
            value="Submit"
            >
            Submit
          </button>
          </form>
       </div>
      </div>

  );
}

}

export default Login;
