import React, { Component } from 'react';
import DateIdeaForm from './DateIdeaForm';
import axios from 'axios';

class DateIdeas extends Component {
  constructor(props) {
    super (props)
    this.state = {
      body: '',
    }
    this.createDateIdea = this.createDateIdea.bind(this)
    this.deleteDateIdea = this.deleteDateIdea.bind(this)
  }

createDateIdea() {
     axios.post( 'http://localhost:3001/api/v1/dateideas',
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

deleteDateIdea () {
    axios.delete (`http://localhost:3001/api/v1/dateideas/{props.dateideas.id}`, {
      method: 'DELETE',
    }).then(response => {
      console.log(response)
      const dateideas = this.props.dateideas.filter(
        dateidea => dateidea.id !== this.props.id
        )
      this.setState({dateideas})
      })
    .catch(error => console.log(error))
  }

render() {
  console.log(this.props.key)

        return (
            <div className="">
                {this.props.dateideas.map( dateidea => {
                    return (
                      <div className="" key={dateidea.id}>
                          <h4>{dateidea.body}</h4>
                          <button onClick={this.deleteDateIdea}>Delete</button>
                      </div>
                  )
                })}
                <div><DateIdeaForm onSubmit={this.createDateIdea}/></div>
            </div>
        )
    }

}
export default DateIdeas;
