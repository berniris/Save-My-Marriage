import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fights: []
    }
  }

  componentDidMount() {
    fetch(`${BASE_URL}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      fights: data.fights
    }));
      }

  render() {
    return (
      <div className="App">
        <div>{JSON.stringify(this.state.fights)}</div>
      </div>
    );
  }
}

export default App;
