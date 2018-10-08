import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home(props) {

  return (


  <div>
    <div className="container">
    <div className="splash-header" style={{backgroundImage: `url(https://images.unsplash.com/photo-1520643187271-06df1162815e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b29e1bf17700cdee7f24ca2b1a5e79fa&auto=format&fit=crop&w=966&q=80)`}}>
    </div>
    <div className="flex">
    <div className="infobox-1">
    <h1>"A marriage is like a house. When a lightbulb burns out you do not go and buy a new house, you fix the lightbulb."
    </h1>
    </div>
    <div className="infobox-2 infobox-couple" style={{backgroundImage: `url(https://images.unsplash.com/photo-1501458005847-438756ac79dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c4d9e8fe35750d8816a6fd8779290d6b&auto=format&fit=crop&w=632&q=80)`}}>
    </div>
    </div>
    </div>

    <div className="middle-container">
    <img className="middle-couple" src="https://img00.deviantart.net/d4cb/i/2016/202/9/4/couple_png_by_valeemcyrus-daavl4b.png" alt="couple"></img>
    <div className="testimonial"><h1>"We were undoubtedly on the path to divorce. Constant fighting began to define our relationship. I decided to give Save 
   		My Marriage a try and our relationship improved significantly. We owe everything to this app."</h1>
    </div>
    </div>
    <div className="container">
    <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1520643187271-06df1162815e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b29e1bf17700cdee7f24ca2b1a5e79fa&auto=format&fit=crop&w=966&q=80)`}} className="splash-header">
    </div>
    <div className="flex">
    <div className="infobox-1">
    <h1>It's never too late to get your marriage back on track. <span><Link to="/counseling">Speak with a dedicated counselor</Link></span> or browse <span><Link to="/tips">free resources</Link></span> to get started today.
    </h1>
    </div>
    <div className="infobox-2">
    <h1>Nothing says "I'm sorry" like flowers or a box of chocalates. Look out for the debut of our new online gift shop soon.</h1></div>
    </div>
    </div>
</div>

    );
  }


export default Home;
