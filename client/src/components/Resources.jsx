import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



function Resources (props) {

return (
<div className="container">
<h1><Link to="/dateideas">Date Ideas</Link></h1>
<p>Introduce some spontaneity back into your relationship with these unique date ideas</p>
<h1><Link to="/tracker">Disagreement Tracker</Link></h1>
<p>Writing about your feelings helps process your emotions and prepares you for better communication with your partner. Track recent disagreements to get started. </p>

</div>
  )
}

export default Resources;
