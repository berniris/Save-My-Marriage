import React, { Component } from 'react';

class DateIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      dateID: null,
      created: false
    }

     this.handleCreateDateFormSubmit = this.handleCreateDateFormSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }


handleCreateDateFormSubmit(e) {
  e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      created: true
    })
    // this.props.history.push('/dateideas');
 }

handleChange(e) {
  this.setState({
  [e.target.name]: e.target.value
  })
}

render () {
 
 return (
  <div>
  {this.state.created ? 
  <h3>Review your date idea: {this.state.body} </h3>
  :
        <form onSubmit={this.handleCreateDateFormSubmit}>
        <div className="idea-form">
          <label htmlFor="dateidea">Propose a date idea for others:</label>
            <input
                    value={this.state.body}
                    type="text"
                    name="body"
                    onChange={this.handleChange} />
          </div>
            <button type="submit" value="submit">Submit Idea</button>
        </form>
      }
        </div>
    )
}
}


export default DateIdeaForm;
