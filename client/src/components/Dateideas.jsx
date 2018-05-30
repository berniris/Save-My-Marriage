import React, { Component } from 'react';
import axios from 'axios';

class Dateideas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dateideas: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/dateideas.json')
    .then(response => {
      console.log(response)
      this.setState({
        dateideas: response.data
      })
    })
    .catch(error => console.log(error))
  }
    render() {
        return (
            <div className="Date_ideas">
                {this.state.dateideas.map( dateidea => {
                  return (
                    <div className="" key={dateidea.id}>
                    <h2>{dateidea.body}</h2>
                    </div>)
                })}
            </div>
        )
    }
}

export default Dateideas;
