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
    return (
<div>
<div className="pitch"><p className="promotion">Free shipping, returns and a gift on all orders!</p></div>
 <div className="menu">
    <ul>
       <li><Link to="/">Home</Link></li>
       {this.props.user ? (
        <li className="logout" onClick={this.handleLogout}>LOGOUT</li>
        ) : (
        <span>
       <li><Link to="/login">Login</Link></li>
       <li><Link to="/register">Register</Link></li>
       </span>
       )}
       <li><Link to="/counseling">Find A Counselor</Link></li>
       <li><Link to="/tips">Free Resources</Link></li>
    </ul>
 </div>
 </div>



    );
  }
}

export default Nav;
