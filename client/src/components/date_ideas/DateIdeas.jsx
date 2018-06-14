import React from 'react';
import DateIdeaForm from './DateIdeaForm';

function DateIdeas (props) {
console.log(props.dateideas)

  const show = props.dateideas.map(dateidea => {

        return (

        <div className="idea"><br/>
            <p key={dateidea.id}> Idea: <br/> {dateidea.body}</p>
            {/*<button onClick={this.deleteDateIdea}>Delete</button>*/}
        </div>



        )
    })

return (
        <div className="container">
        {show}
            <DateIdeaForm/>
        </div>

                )
}

export default DateIdeas;
