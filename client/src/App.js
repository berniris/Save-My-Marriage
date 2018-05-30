import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import './App.css';
// import Login from './components/auth/Login';
import Dateideas from './components/Dateideas'
const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fights: []
    }
// this.login = this.login.bind(this);
  }

// login () {
//     const email = $("#email").val()
//     const password = $("#password").val()
//     const request = {"auth": {"email": email, "password": password}}
//     console.log(request)
//     $.ajax({
//       url: "http://localhost:3000/api/user_token",
//       type: "POST",
//       data: request,
//       dataType: "json",
//       success: function (result) {
//         console.log(result)
//         localStorage.setItem("jwt", result.jwt)
//       }
//     })
//   }

  componentDidMount() {
    fetch(`${BASE_URL}/fights`)
    .then(resp => resp.json())
    .then(data => this.setState({
      fights: data.fights
    }));
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
          <Dateideas/>
          )}
        />
</div>
</main>
    );
 }

}

export default App;
