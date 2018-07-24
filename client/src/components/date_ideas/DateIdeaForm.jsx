import React, { Component } from 'react';


class DateIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ''
    }

     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }


handleSubmit(e) {
  e.preventDefault();
  this.props.onSubmit(this.state.body)
    }

handleChange(e) {
  this.setState({
  [e.target.name]: e.target.value
  })
}

render () {
  console.log(this.state.body)
 return (

        <form onSubmit={this.handleSubmit}>
        <div className="idea-form">
          <label htmlFor="dateidea">Propose a date idea for others:</label>
            <input
                    value={this.state.body}
                    type="text"
                    name="body"
                    onChange={this.handleChange} />
          </div>
            <button type="submit" value="Submit">Submit Idea</button>
        </form>
    )
}
}


export default DateIdeaForm;
