import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



function Resources (props) {

return (
<div className="container">
<ul>
<li><Link to="/dateideas">Date Ideas</Link></li>
<p>Introduce some spontaneity back into your relationship with these unique date ideas</p>
</ul>
</div>
  )
}

export default Resources;
