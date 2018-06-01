import React, { Component } from 'react';
import DateIdeaForm from './DateIdeaForm';
import axios from 'axios';

class DateIdeas extends Component {
  constructor(props) {
    super (props)
    this.state = {
      dateideas: [],
    }
    this.createDateIdea = this.createDateIdea.bind(this)
    this.deleteDateIdea = this.deleteDateIdea.bind(this)
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

deleteDateIdea () {
    axios.delete (`http://localhost:3001/dateideas/{props.dateideas.id}`, {
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
  const show = this.props.isLoggedIn ? this.props.dateideas.map(dateidea => {

        return
        <div>
            <p key={dateidea.id}>Idea:{dateidea.body}</p>
            <button onClick={this.deleteDateIdea}>Delete</button>
            </div>
                }) : "UNAUTHORIZED"
                    return (

                <div className="container">
                <DateIdeaForm onSubmit={this.createDateIdea}/>
                {show}
                </div>

        )
    }

}
export default DateIdeas;
