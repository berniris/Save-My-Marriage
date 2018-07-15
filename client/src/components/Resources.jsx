import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



function Resources (props) {

return (
    <div className="container">
    <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1525662665495-915530b703a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d44e2f01c46a533a85935f77e8b120d&auto=format&fit=crop&w=1050&q=80)`}} className="splash-header" >
    </div>
    <div className="flex">
     <div className="infobox-1">
<p>Introduce some spontaneity back into your relationship with these unique date ideas. Click below to get started. </p>
<button><Link to="/api/dateideas">Date Ideas</Link></button>
</div>
 <div className="infobox-2">
<p>Writing about your feelings helps process your emotions and prepares you for better communication with your partner. 
Track recent disagreements by clicking below to get started. </p>
<button><Link to="/tracker">Disagreement Tracker</Link></button>
</div>
</div>
</div>
  )
}

export default Resources;
