import React from 'react';
import '../App.css';
import Nav from './Nav';

function Home(props) {

  return (

  <div>
  <Nav/>
  <img src="https://i.imgur.com/D5YIHjg.png" alt="logo" className="logo"></img>
  <div className="left-pane">
    </div>
      <div className="right-pane">
    </div>
    <div class="container">
    <div class="info-box">
    <h1>Serious about saving or improving your relationship today?</h1>
<button>Click to get Started</button>
    </div>
    <div class="info-box-small-1">
    <h1>Joint couple services coming soon!</h1>
    </div>
    </div>
    <div class="column-box">
    <div class="info-box">
    <h1>Always private - always secure.</h1>
    </div>
    </div>
</div>

    );
  }


export default Home;
