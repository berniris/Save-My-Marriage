import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



function Resources (props) {

return (
<div className="container">
<p className="resources"><Link to="/api/dateideas">Date Ideas</Link></p>
<p>Introduce some spontaneity back into your relationship with these unique date ideas</p>
<p className="resources"><Link to="/tracker">Disagreement Tracker</Link></p>
<p>Writing about your feelings helps process your emotions and prepares you for better communication with your partner. Track recent disagreements to get started. </p>

</div>
  )
}

export default Resources;
