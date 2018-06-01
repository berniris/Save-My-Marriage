import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

handleSubmit (e) {
  e.preventDefault();
  this.props.onSubmit(this.state);
  this.setState({
    email: '',
    password: ''
  })
  // this.props.history.push('/')
}

onChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  })
}


render() {
  return (
    <div className="container">
        <h1 className="header">
          Register
        </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            value={this.state.email}
            name="email"
            type="email"
            onChange={this.onChange}
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            value={this.state.password}
            name="password"
            type="password"
            onChange={this.onChange}
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

export default Register;
