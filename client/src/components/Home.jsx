import React from 'react';
import '../App.css';

function Home(props) {

  return (


  <div>
    <div className="container">
    <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1520643187271-06df1162815e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b29e1bf17700cdee7f24ca2b1a5e79fa&auto=format&fit=crop&w=966&q=80)`}} className="splash-header">
    </div>
    <div className="flex">
    <div className="infobox-1">
    <h1>"A relationship is like a house. When a lightbulb burns out you do not go and buy a new house, you fix the lightbulb."
    </h1>
    </div>
    <div className="infobox-2"></div>
    </div>
    </div>
    <img className="couple" src="https://img00.deviantart.net/d4cb/i/2016/202/9/4/couple_png_by_valeemcyrus-daavl4b.png" alt="couple"></img>
    <div className="testimonial"><h1>"We were undoubtedly on the path to divorce. Constant fighting began to define our relationship. I decided to give Save 
   		My Marriage a try and our relationship improved significantly. We owe everything to this app."</h1>
    </div>
    <div className="container">
    <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1520643187271-06df1162815e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b29e1bf17700cdee7f24ca2b1a5e79fa&auto=format&fit=crop&w=966&q=80)`}} className="splash-header">
    </div>
    <div className="flex">
    <div className="infobox-1">
    <h1>It's never too late to get your marriage back on track. Speak with a dedicated counselor and browse free resources to get started today.
    </h1>
    </div>
    <div className="infobox-2"></div>
    </div>
    </div>
</div>

    );
  }


export default Home;
