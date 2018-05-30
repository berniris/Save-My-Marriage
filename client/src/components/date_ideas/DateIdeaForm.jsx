import React, { Component } from 'react';
import axios from 'axios';

class DateIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ''
    };
     this.handleSubmit = this.handleSubmit.bind(this);
     this.onChange = this.onChange.bind(this);
  }

onChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit(e) {
  e.preventDefault();
  console.log(this.state);
    axios.post( 'http://localhost:3001/api/v1/dateideas',
      {
        dateidea: {
          body: this.state.body
          }
        }
      )
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
    }

render () {
 return (

        <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="dateidea">Propose a date idea for others:</label>
            <input
                    value={this.state.body}
                    type="text"
                    name="body"
                    onChange={this.onChange} />
          </div>
            <button type="submit" value="Submit">Submit Date Idea</button>
        </form>
    )
}
}


export default DateIdeaForm;
