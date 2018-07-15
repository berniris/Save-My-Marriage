import React from 'react';
import DateIdeaForm from './DateIdeaForm';

function DateIdeas (props) {



return (
        <div className="container">
        <h1>Because you can do much better than just dinner and a movie...</h1>
        <div className="date-ideas">
             <div className="idea"><br/>
            <p key={props.dateideas.id}>  {props.dateideas.body}</p>
            {/*<button onClick={this.deleteDateIdea}>Delete</button>*/}
        </div>

        </div>
            <DateIdeaForm/>
        </div>

                )
}

export default DateIdeas;
