import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import DateIdeas from './components/date_ideas/DateIdeas';
import TokenService from './services/TokenService';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fights: [],
      dateideas: [],
      user: null
    }
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.getDateIdeas = this.getDateIdeas.bind(this);
  }

    getDateIdeas() {
      axios.get('http://localhost:3001/api/v1/dateideas.json')
    .then(response => {
      // console.log(response)
      this.setState({
        dateideas: response.data
      })
    })
    .catch(error => console.log(error))
  }

  getFigths () {
  fetch(`${BASE_URL}/fights`)
    .then(response => response.json())
    .then(data => this.setState({
      fights: data.fights
    }));
  }

  login(data) {
 axios('http://localhost:3001/users/login', {
  method: "POST",
  data
}).then(response => {
  TokenService.save(response.data.token);
}).then(console.log(data))
.catch(err => console.log(`err: ${err}`));
}

  register(data) {
 axios('http://localhost:3001/users/', {
  method: "POST",
  data
}).then(response => {
  TokenService.save(response.data.token);
}).then(console.log(data))
.catch(err => console.log(`err: ${err}`));
}

  componentDidMount() {
  this.getDateIdeas()
      }

  render() {
    return (
<main>
  <div>
    <Route exact path="/" render={() => (<Home/>)}/>
    <Route path="/:id" render={() => (
              <Nav
                user={this.state.user}
                logout={this.handleLogout}
                updateCurrentUser={this.updateCurrentUser}
              />)}
            />
    <Route
      exact
        path="/dateideas"
        render={({ match }) => (
          <DateIdeas dateideas={this.state.dateideas}/>
          )}
        />
          <Route path="/login" render={({ history }) => (
              <Login
                user={this.state.user}
                onSubmit={this.login}
              />)}
            />
             <Route path="/register" render={({ history }) => (
              <Register
                user={this.state.user}
                onSubmit={this.register}
              />)}
            />
</div>
</main>
    );
 }

}

export default App;
