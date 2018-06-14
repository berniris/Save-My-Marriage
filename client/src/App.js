import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import BetterDoctor from './components/BetterDoctor';
import Resources from './components/Resources';
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
      user: null,
      fights: [],
      dateideas: [],
      email: '',
      password: '',
      isLoggedIn: null
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.register = this.register.bind(this);
    this.getDateIdeas = this.getDateIdeas.bind(this);
    this.getFights = this.getFights.bind(this);
    this.logout = this.logout.bind(this);
    this.createDateIdea = this.createDateIdea.bind(this);
  }


    getDateIdeas() {
    const jwt = localStorage.getItem("jwt")
    console.log(jwt)
    const init = {
      headers: {"Authorization": `Bearer ${jwt}`}
    }
    fetch(`${BASE_URL}/api/dateideas`, init)
    .then(res => res.json())
    .then(data => this.setState({
      dateideas: data
    }))
    .catch(err => err)
    console.log(this.isLoggedIn())
  }

  getFights () {
  fetch(`${BASE_URL}/api/fights`)
    .then(response => response.json())
    .then(data => this.setState({
      fights: data
    }))
    .catch(err => err);
    return this.state.fights
  }

  login(input) {
    const url = `${BASE_URL}/api/user_token`;
    const body = {"auth": {"email": input.email, "password": input.password}}
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


  handleLogin(input) {
    console.log(this.login(input))
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

handleLogout() {
  this.logout();
  this.setState({
    user: null
  })
  this.props.history.push('/')
}

logout() {
  localStorage.removeItem('jwt')
  this.setState({
    isLoggedIn: false,
    dateideas: []
  })
}

createDateIdea() {
     axios.post( 'http://localhost:3001/dateideas',
      {
        dateidea: {
          body: this.state.body
          }
        }
      )
    .then(response => {
      console.log(response)
      const dateidea = [this.state.body, response.data]
      this.setState({dateidea})
    })
    .catch(error => {
      console.log(error)
    })
}

  componentDidMount() {
  this.createDateIdea()
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
          <DateIdeas dateideas={this.state.dateideas} isLoggedIn={this.isLoggedIn} createDateIdea={this.createDateIdea}/>
          )}
        />
          <Route path="/login" render={({ history }) => (
              <Login
                user={this.state.user}
                history={history}
                onSubmit={this.handleLogin}
              />)}
            />
             <Route path="/register" render={({ history }) => (
              <Register
                onSubmit={this.register}
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
