import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleSubmit (e) {
  e.preventDefault();
  this.props.onSubmit(this.state);
  this.setState({
    email: '',
    password: '',
  })
}

handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  })
}


render() {
  return (
    <div className="container">
        <h1 className="header">
          Login
        </h1>
        {this.state.loggedIn && <Redirect to='/'/>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            value={this.state.email}
            name="email"
            type="email"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            value={this.state.password}
            name="password"
            type="password"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            value="Submit"

            >
            Submit
          </button>
          </form>
      </div>

  );
}

}

export default Login;
