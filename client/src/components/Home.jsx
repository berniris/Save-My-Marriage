import React from 'react';
import '../App.css';
import Nav from './Nav';

function Home(props) {

  return (

  <div>
  <Nav/>
  <img src="https://i.imgur.com/D5YIHjg.png" alt="logo" className="logo"></img>
    <div className="container">
    <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1525662665495-915530b703a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d44e2f01c46a533a85935f77e8b120d&auto=format&fit=crop&w=1050&q=80)`}} className="splash-intro splash-flex" >
    </div>
    </div>
</div>

    );
  }


export default Home;
