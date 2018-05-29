import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Login from '../components/auth/Login';
import Logout from '../components/Logout';
import Register from '../components/auth/Register';

class Nav extends Component {
  constructor(props) {
    super(props);
    if (this.props.currentUser == null) {
      this.state = {
        page: "login"
      }
    } else {
      this.state = {
        page: "delete"
      }
    }
    this.changePange = this.changePage.bind(this);
  }

changePage(newPage) {
  this.setState({
    page: newPage
  })
}

  render() {


    return (


 <div className="menu">
    <ul>
       <li><Link to="/login">LOGIN</Link></li>
       <li><Link to="/register">REGISTER</Link></li>
    </ul>
 </div>



    );
  }
}

export default Nav;
