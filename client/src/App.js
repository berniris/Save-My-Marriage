
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Logo from './components/Logo';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Resources from './components/Resources';
import DateIdeas from './components/date_ideas/DateIdeas';
import BetterDoctor from './components/BetterDoctor';

import AuthService from './services/AuthService';

const BASE_URL = process.env.REACT_APP_BASE_URL;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      fights: [],
      dateideas: [],
      loggedInError: false
    }
    // this.createDateIdea = this.createDateIdea.bind(this);
    // this.createFight = this.createFight.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }


    getDateIdeas() {
    const jwt = localStorage.getItem("jwt")
    const init = {
      headers: {"Authorization": `Bearer ${jwt}`}
    }
    fetch(`${BASE_URL}/api/dateideas`, init)
    .then(res => res.json())
    .then(data => this.setState({
      dateideas: data
    }))
    .catch(err => err)
  }

  // getFights () {
  // fetch(`${BASE_URL}/api/fights`)
  //   .then(response => response.json())
  //   .then(data => this.setState({
  //     fights: data
  //   }))
  //   .catch(err => err);
  //   return this.state.fights
  // }

handleLogin(input) {
    AuthService.login(input)
    .then(user => {
    this.setState({user})
  })
  .catch(err => this.setState({loggedInError: true}))
  this.props.history.push('/');
}
  

handleRegister(input) {
  AuthService.register(input)
}

handleLogout() {
  AuthService.destroyToken();
  this.setState({
    user: false
  })
  this.props.history.push('/')
}



isLoggedIn() {
  AuthService.checkToken().then(user => {
    this.setState({user})
  })
  .catch(err => this.setState({loggedInError: true}))
}

componentDidMount() {
 this.isLoggedIn();
      }

  render() {
    console.log(this.state.user)

    return (
<main>
  <div>
    <Route exact path="/" render={props => 
      <div>
         <Nav
          user={this.state.user}
          loggedIn={this.isLoggedIn}
          logout={this.handleLogout}
              />
      <Logo/>
      <Home/>
      </div>
    } />
    <Route path="/:id" render={props => 
              <div>
              <Nav
              user={this.state.user}
              loggedIn={this.isLoggedIn}
              logout={this.handleLogout}
              />
              <Logo/>
              </div>
            }/>
    <Route
      exact
        path="api/dateideas"
        render={({ match }) => (
          <DateIdeas dateideas={this.state.dateideas} isLoggedIn={this.isLoggedIn} createDateIdea={this.createDateIdea}/>
          )}
        />
          <Route path="/login" render={({ history }) => (
              <Login
                onSubmit={this.handleLogin}
              />)}
            />
             <Route path="/register" render={({ history }) => (
              <Register
                onSubmit={this.handleRegister}
              />)}
            />
            <Route exact path="/counseling" render={() => (<BetterDoctor/>)}/>
            <Route exact path="/tips" render={() => (<Resources/>)}/>
</div>
</main>
    );
 }

}

export default App;
