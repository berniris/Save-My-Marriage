import React, { Component } from 'react';
// import DateIdea from './DateIdea'
import DateIdeaForm from './DateIdeaForm'

class DateIdeas extends Component {
  constructor(props) {
    super (props)
    this.state = {
      dateideas: []
    }

  }

render() {

        return (
            <div className="">
                {this.props.dateideas.map( dateidea => {
                    return (
                      <div className="" key={dateidea.id}>
                          <h4>{dateidea.body}</h4>
                      </div>
                  )
                })}
                <div><DateIdeaForm dateideas={this.state.dateideas}/></div>
            </div>
        )
    }

}
export default DateIdeas;
