import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this)

}

handleLogout() {
  this.props.logout();
}

render() {
<<<<<<< HEAD
<<<<<<< HEAD
  console.log(this.props.user)
=======
>>>>>>> 868ab37c95aebc1b50d7979d9fff92b37a54a1ff
=======
>>>>>>> 8b3b43c7648b1bfe03bbd39ee6c406293a09736d
  return (
  
<div>
  <div className="pitch">
    <p className="promotion">Free shipping, returns and a gift on all orders!</p>
  </div>
    <div className="menu">
       <ul>
        <li><Link to="/">Home</Link></li>
        {this.props.user ? (
        <li className="logout" onClick={this.handleLogout}><Link to ="/logout">LOGOUT</Link></li>
        ) : (
        <span>
       <li><Link to="/login">Login</Link></li>
       </span>
       )}
       <li><Link to="/counseling">Find A Counselor</Link></li>
       <li><Link to="/tips">Resources</Link></li>
    </ul>
 </div>
 </div>



    );
  }
}

export default Nav;
