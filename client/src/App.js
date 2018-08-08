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
import authService from './services/authService';
import dateService from './services/dateService';

const BASE_URL = process.env.REACT_APP_BASE_URL;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      dateideas: [],
      loggedInError: false
    }
    this.createDateIdea = this.createDateIdea.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }


getDateIdeas() {
dateService.All()
  .then(data => this.setState({
   dateideas: data
    }))
  .catch(err => err)
}

createDateIdea(dateidea) {
dateService.Create(dateidea) 
.then(respBody => {
  this.getDateIdeas();
  // this.getUserDateIdea();
  this.props.history.push('/dateideas');
})
.then(console.log(dateidea))
}

getCalls() {
  this.intervalId = setInterval(() => this.getDateIdeas(), 1000);
  this.getDateIdeas();
}

handleLogin(input) {
  authService.login(input)
  this.props.history.push('/');
  this.getCalls();
  window.location.reload();
}
  

handleRegister(input) {
  authService.register(input)
}

handleLogout() {
  authService.destroyToken();
  this.setState({
    user: false
  })
  this.props.history.push('/')
}

isLoggedIn() {
  authService.checkToken().then(user => {
  this.setState({user})
  })
  .catch(err => this.setState({loggedInError: true}))
}

componentDidMount() {
 this.getCalls();
 this.isLoggedIn();
}

componentWillUnmount() {
  clearInterval(this.intervalId)
}


render() {
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
        path="/dateideas"
        render={() => (
          <DateIdeas dateideas={this.state.dateideas} onSubmit={this.createDateIdea}/>
          )}
        />
          <Route path="/login" render={({ history }) => (
              <Login
                handleLogin={this.handleLogin}
              />)}
            />
             <Route path="/register" render={({ history }) => (
              <Register
                handleRegister={this.handleRegister}
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
