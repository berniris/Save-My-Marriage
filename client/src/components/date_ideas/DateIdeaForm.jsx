import React, { Component } from 'react';


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
  this.props.onSubmit()

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
