import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Logo from './components/Logo';
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
      email: '',
      password: '',
      isLoggedIn: null
    }
    this.login = this.login.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.register = this.register.bind(this);
    this.getDateIdeas = this.getDateIdeas.bind(this);
    this.getFights = this.getFights.bind(this);
  }


    getDateIdeas() {
    console.log('getting dates');
    const jwt = localStorage.getItem("jwt")
    const init = {
      headers: {"Authorization": `Bearer ${jwt}`}
    }
    fetch(`${BASE_URL}/api/dateideas`, init)
    .then(res => res.json())
    .then(data => this.setState({
      dateideas: data,
    }))
    // .then(console.log(this.state.dateideas))
    .then(console.log(this.state.dateideas))
    .catch(err => err)
    console.log(this.isLoggedIn())
  }

  getFights () {
  fetch(`${BASE_URL}/api/fights`)
    .then(response => response.json())
    .then(data => this.setState({
      fights: data,
    }))
    .then(console.log(this.state.fights))
    .catch(err => err);
    return this.state.fights
  }

  login() {
    const url = `${BASE_URL}/api/user_token`;
    const body = {"auth": {"email": this.state.email, "password": this.state.password} }
    const init = { method: 'POST',
                   headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                   mode: 'cors',
                   body:JSON.stringify(body),
                   }
    fetch(url, init)
    .then(res => res.json())
    .then(res => localStorage.setItem("jwt", res.jwt))
    .then(() => this.setState({
      isLoggedIn: true,
    }))
    .catch(err => console.log(err))
}

 isLoggedIn() {
    const res = !!(localStorage.getItem("jwt"));
    this.setState({
      isLoggedIn: res,
    })
    return res;
  }

  register(data) {
 axios('http://localhost:3001/api/user_token', {
  method: "POST",
  data
}).then(response => {
  TokenService.save(response.data.token);
}).then(console.log(data))
.catch(err => console.log(`err: ${err}`));
}

  componentDidMount() {
  this.getDateIdeas()
  this.getFights()
  this.isLoggedIn()
      }

  render() {
    return (
<main>
  <div>
    <Route path="/:id" render={() => (
              <Nav
                user={this.state.user}
                logout={this.handleLogout}
                updateCurrentUser={this.updateCurrentUser}
              />
              )}
            />
    <Route path="/:id" render={() => (
             <Logo/>
          )}/>
    <Route exact path="/" render={() => (<Home/>)}/>
    <Route
      exact
        path="/dateideas"
        render={({ match }) => (
          <DateIdeas dateideas={this.state.dateideas} isLoggedIn={this.isLoggedIn}/>
          )}
        />
          <Route path="/login" render={({ history }) => (
              <Login
                user={this.state.user}
                login={this.login}
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
