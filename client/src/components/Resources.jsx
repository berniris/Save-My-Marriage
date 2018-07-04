import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



function Resources (props) {

return (
    <div className="container">
    <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1520643187271-06df1162815e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b29e1bf17700cdee7f24ca2b1a5e79fa&auto=format&fit=crop&w=966&q=80)`}} className="splash-header" >
    </div>
    <div className="flex">
     <div className="infobox-1 splash-flex">
<p>Introduce some spontaneity back into your relationship with these unique date ideas. Click below to get started. </p>
<button><Link to="/api/dateideas">Date Ideas</Link></button>
</div>
 <div className="infobox-2 splash-flex">
<p>Writing about your feelings helps process your emotions and prepares you for better communication with your partner. 
Track recent disagreements by clicking below to get started. </p>
<button><Link to="/tracker">Disagreement Tracker</Link></button>
</div>
</div>
</div>
  )
}

export default Resources;
