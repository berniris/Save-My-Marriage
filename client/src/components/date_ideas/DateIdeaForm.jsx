import React, { Component } from 'react';


class DateIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      created: false
    }

     this.handleCreateDateFormSubmit = this.handleCreateDateFormSubmit.bind(this);
     this.handleDelete = this.handleDelete.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }


handleCreateDateFormSubmit(e) {
  e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state)
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

handleDelete(e) {
  e.preventDefault()
  console.log(this.props.dateID)
  this.props.onDelete(this.props.dateID)
  this.setState({
    created: false
  })
}

render () {
 return (
  <div>
  {this.state.created ?
  <div>
    <h3>Review your date idea: {this.state.body} </h3>
    <button type="submit" value="submit" onClick={this.handleDelete}>Delete</button>
  </div>
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
