import React from 'react';
import DateIdeaForm from './DateIdeaForm';

function DateIdeas (props) {


return (
        <div className="container">
        <h1>Because you can do much better than just dinner and a movie...</h1>
        <div className="date-ideas">
             <div className="idea"><br/>
             {/* key={props.dateideas.id}>*/} <p>{props.dateideas.body}</p>
            {/*<button onClick={this.deleteDateIdea}>Delete</button>*/}
        </div>

        </div>
            <DateIdeaForm
            onSubmit={props.onSubmit}
            onDelete={props.onDelete}
            />
        </div>

                )
}

export default DateIdeas;
